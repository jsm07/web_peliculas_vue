<template>
  <div>
    <layout>
      <template slot="busqueda">
        <input v-model="busqueda" type="text" id="input-busqueda" name="search" placeholder="Buscar.." />
      </template>
      <template>
        <div v-show="loading" style="height:900px;">
          <spinner />
        </div>
        <div v-show="!loading">
          <paginacion
            :total-pages="total_pages"
            :total="total_results"
            :per-page="20"
            :current-page="page"
            @pagechanged="onPageChange"
          />
          <lista :items="peliculas">
            <template #no-items>
              <p>
                No hay ninguna jodida pelicula
              </p>
            </template>

            <template #default="{ item }">
              <ficha
                :id="item.id"
                :nombre="item.title"
                :descripcion="item.overview"
                :fecha="new Date(item.release_date)"
                :pathFondo="item.backdrop_path"
                :pathPoster="item.poster_path"
                :puntuacion="item.vote_average"
                :duracion="item.runtime"
              >
                <template slot="slot-1">
                  <ranking :puntuacion="item.vote_average" :editable="false" />
                </template>
                <template slot="slot-2">
                  <boton :nombre="'Ver Ficha'" @click="detallePelicula(item.id)" />
                </template>
              </ficha>
            </template>
          </lista>
          <paginacion
            :total-pages="total_pages"
            :total="total_results"
            :per-page="20"
            :current-page="page"
            @pagechanged="onPageChange"
          />
        </div>
      </template>
    </layout>
  </div>
</template>

<script>
  import { Lista, Ficha, Boton, Paginacion, Spinner, Layout, Ranking } from '@/components';
  import axios from 'axios';
  import _ from 'lodash';
  import { mapState } from 'vuex';

  export default {
    name: 'Home',
    components: {
      Lista,
      Ficha,
      Boton,
      Paginacion,
      Spinner,
      Layout,
      Ranking,
    },
    data() {
      return {
        page: 1,
        total_pages: 1,
        total_results: 1,
        loading: true,
        debouncedInput: '',
        timeout: null,
      };
    },
    computed: {
      ...mapState({
        peliculas: (state) => state.peliculas,
      }),
      busqueda: {
        get() {
          return this.debouncedInput;
        },
        set(val) {
          if (this.timeout) clearTimeout(this.timeout);
          this.timeout = setTimeout(() => {
            this.debouncedInput = val;
            console.log('busqueda', this.debouncedInput);
          }, 300);
        },
      },
    },
    created() {
      this.page = this.$route.query.page || 1;
      this.getPelis();
    },
    methods: {
      async getPelis() {
        this.loading = true;
        const API_KEY = process.env.VUE_APP_API_KEY;

        try {
          const { data, status } = await axios.get(`https://api.themoviedb.org/3/movie/popular`, {
            params: {
              api_key: API_KEY,
              language: 'es',
              page: this.page,
            },
          });
          this.$store.dispatch('setPeliculas', data.results);
          this.total_pages = data.total_pages;
          this.total_results = data.total_results;
        } catch (error) {
          console.error(error);
        }
        this.loading = false;
      },
      onPageChange(page) {
        this.page = page;
        this.$router.push({ name: 'Home', query: { page: this.page } });
      },
      detallePelicula(peliculaId) {
        this.$router.push({ name: 'Pelicula', query: { id: peliculaId } });
      },
    },
    watch: {
      page(newValue, oldValue) {
        this.getPelis();
        window.scrollTo(0, 0);
      },
    },
  };
</script>

<style lang="scss"></style>
