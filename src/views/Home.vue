<template>
  <div class="grid-container">
    <div class="Header">
      <div>
        <h1>Bienvenido a tu web Vue</h1>
        <img alt="Vue logo" src="../assets/logo.png" />
      </div>
    </div>
    <div class="Sidebar">
      <a class="active" href="#home">Inicio</a>
    </div>
    <div class="Main">
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
            :nombre="item.title"
            :descripcion="item.overview"
            :fecha="new Date(item.release_date)"
            :pathPoster="item.poster_path"
            :puntuacion="item.vote_average"
          />
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
  </div>
</template>

<script>
  import { Lista, Ficha, Boton, Paginacion } from '@/components';
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
    },
    data() {
      return {
        page: 1,
        total_pages: 1,
        total_results: 1,
      };
    },
    computed: mapState({
      peliculas: (state) => state.peliculas,
    }),
    created() {
      this.page = this.$route.query.page || 1;
      this.getPelis();
    },
    methods: {
      async getPelis() {
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
      },
      onPageChange(page) {
        this.page = page;
        this.$router.push({ name: 'Home', query: { page: this.page } });
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

<style lang="scss">
  .grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 150px 1fr 100px;
    gap: 1px 1px;
    grid-template-areas: 'Header Header Header Header' 'Sidebar Main Main Main' 'Sidebar Main Main Main';
  }

  .Header {
    grid-area: Header;
    padding: 20px;
    background-color: #f1f1f1;
  }

  .Header > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .Header > div img {
    width: 50px;
  }

  .Sidebar {
    grid-area: Sidebar;
    padding: 10px;
    background-color: #f1f1f1;
  }

  /* Sidebar links */
  .Sidebar a {
    display: block;
    color: black;
    padding: 16px;
    text-decoration: none;
  }

  /* Active/current link */
  .Sidebar a.active {
    background-color: #4caf50;
    color: white;
  }

  /* Links on mouse-over */
  .Sidebar a:hover:not(.active) {
    background-color: #555;
    color: white;
  }

  .Main {
    grid-area: Main;
    margin-bottom: 30px;
  }

  #buttons-pagination {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 10px;
  }
</style>
