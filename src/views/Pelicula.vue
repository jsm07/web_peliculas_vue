<template>
  <div>
    <layout>
      <template>
        <detalle
          :id="this.id"
          :homepage="this.pelicula.homepage"
          :nombre="this.pelicula.title"
          :pathFondo="this.pelicula.backdrop_path"
          :pathPoster="this.pelicula.poster_path"
          :descripcion="this.pelicula.overview"
          :puntuacion="this.pelicula.vote_average"
          :fecha="new Date(this.pelicula.release_date)"
          :duracion="this.pelicula.runtime"
          :generos="this.pelicula.genres"
          :production_companies="this.pelicula.production_companies"
        >
          <template>
            <ranking :puntuacion="this.pelicula.vote_average" :editable="false" />
          </template>
        </detalle>
      </template>
    </layout>
  </div>
</template>

<script>
  import { Layout, Detalle, Ranking } from '@/components';
  import axios from 'axios';

  export default {
    name: 'Pelicula',
    components: {
      Layout,
      Detalle,
      Ranking,
    },
    data() {
      return {
        id: {
          type: Number,
        },
        pelicula: {
          type: Object,
        },
      };
    },
    created() {
      this.id = parseInt(this.$route.query.id);
      this.getPeli();
    },
    methods: {
      async getPeli() {
        const API_KEY = process.env.VUE_APP_API_KEY;

        try {
          const { data, status } = await axios.get(`https://api.themoviedb.org/3/movie/${this.id}`, {
            params: {
              api_key: API_KEY,
              language: 'es',
            },
          });
          this.pelicula = data;
        } catch (error) {
          console.log('error', error);
        }
      },
    },
  };
</script>

<style lang="scss" scoped></style>
