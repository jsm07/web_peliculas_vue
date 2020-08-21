<template>
  <div>
    <layout>
      <template>
        <ul class="breadcrumb">
          <li><span @click="$router.go(-1)">Inicio</span></li>
          <li>Película</li>
        </ul>
        <detalle
          :id="this.id"
          :homepage="this.pelicula.homepage"
          :nombre="this.pelicula.title"
          :tagline="this.pelicula.tagline"
          :popularity="this.pelicula.popularity"
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

<style lang="scss" scoped>
  /* Style the list */
  ul.breadcrumb {
    padding: 10px 16px;
    list-style: none;
  }

  /* Display list items side by side */
  ul.breadcrumb li {
    display: inline;
    font-size: 18px;
  }

  /* Add a slash symbol (/) before/behind each list item */
  ul.breadcrumb li + li:before {
    padding: 8px;
    color: black;
    content: '/\00a0';
  }

  /* Add a color to all links inside the list */
  ul.breadcrumb li span {
    color: #0275d8;
    text-decoration: none;
    cursor: pointer;
  }

  /* Add a color on mouse-over */
  ul.breadcrumb li span:hover {
    color: #01447e;
    text-decoration: underline;
  }
</style>
