<template>
  <div class="dark-overlay">
    <div class="movie-details">
      <div class="image-container">
        <img :src="urlCompletaImagen(this.pathPoster)" alt="sample-image" />
      </div>
      <div class="details-container">
        <div class="top">
          <div class="details-summary">
            <div class="top">
              <h3>{{ nombre }}</h3>
            </div>
            <div class="center">
              <h5>{{ nombreGeneros() }}</h5>
              <ul>
                <li>{{ duracion }} MIN</li>
              </ul>
            </div>
            <hr />
            <div class="bottom">
              <slot></slot>
            </div>
          </div>
        </div>
        <div class="center">
          <p>
            {{ descripcion }}
          </p>
        </div>
        <div class="bottom">
          <a target="_blank" :href="homepage" v-if="homepage">
            <font-awesome-icon :icon="['fas', 'film']" size="lg" />
            Ver película</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { library } from '@fortawesome/fontawesome-svg-core';
  import { faFilm } from '@fortawesome/free-solid-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

  export default {
    name: 'Detalle',
    components: {
      FontAwesomeIcon,
    },
    props: {
      id: {
        type: Number,
      },
      homepage: {
        type: String,
      },
      nombre: {
        type: String,
      },
      pathFondo: {
        type: String,
      },
      pathPoster: {
        type: String,
      },
      descripcion: {
        type: String,
      },
      puntuacion: {
        type: Number,
      },
      fecha: {
        type: Date,
      },
      duracion: {
        type: Number,
      },
      generos: {
        type: Array,
        default: () => [],
      },
      production_companies: {
        type: Array,
        default: () => [],
      },
    },
    created() {
      library.add(faFilm);
    },
    methods: {
      urlCompletaImagen: function(path) {
        const pathImagen = 'https://image.tmdb.org/t/p/w500';
        return pathImagen + path;
      },
      nombreGeneros: function() {
        const nombresDeGenero = [];
        for (const genero of this.generos) {
          nombresDeGenero.push(genero.name);
        }
        return nombresDeGenero.join();
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css?family=Raleway:400,700|Merriweather:400,700');

  a {
    text-decoration: none;
    color: white;
  }
  .dark-overlay .movie-details {
    display: flex;
    box-sizing: border-box;
    font-family: 'Raleway', sans-serif;
    align-items: flex-start;
    background-color: #18212e;
  }

  .movie-details .image-container {
    min-height: 100%;
    position: relative;
    box-sizing: border-box;
  }

  .movie-details .image-container:after {
    position: absolute;
    height: 99%;
    width: 100%;
    left: 0;
    top: 0;
    content: '';
    background: rgba(68, 54, 41, 0.4);
  }

  .movie-details .image-container img {
    width: 100%;
    height: 100%;
  }

  .movie-details .details-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .movie-details .details-container > div {
    width: 100%;
    box-sizing: border-box;
  }

  .movie-details .details-container > .top {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
  }

  .details-container > .top .close-button {
    display: flex;
    justify-content: flex-end;
    box-sizing: border-box;
    padding: 0.3rem 0.5rem;
    color: #5e6871;
    font-weight: 800;
    cursor: pointer;
  }

  .details-container > .top .details-summary {
    display: flex;
    padding: 0.8rem;
    margin: 5px 30px 5px -50px;
    z-index: 1;
    background: #fff;
    flex-direction: column;
    line-height: 1.7rem;
    border-radius: 5px;
  }

  .details-summary > .top h3 {
    text-transform: uppercase;
    letter-spacing: 0.04rem;
    font-weight: 400;
  }
  .details-summary > .center {
    display: flex;
    justify-content: space-between;
  }

  .details-summary > .center > h5 {
    text-transform: capitalize;
    font-size: 0.72rem;
    font-weight: 600;
    color: #5c554d;
  }
  .details-summary > .center > ul {
    list-style-type: none;
    display: flex;
    align-items: center;
  }

  .details-summary > .center > ul > li:first-child {
    margin-right: 0.3rem;
  }

  .details-summary > .center > ul > li {
    text-transform: uppercase;
    font-size: 0.75rem;
    font-weight: 600;
    border-radius: 0.35rem;
    background: #ebeef0;
    padding: 0 0.3rem;
  }

  .details-summary > hr {
    margin: 2rem 0 0.7rem 0;
    border: inset 0.5px rgba(0, 0, 0, 0.125);
  }

  .details-summary > .bottom {
    text-align: center;
  }

  .details-container > .center {
    padding: 0.6rem;
    box-sizing: border-box;
    font-family: 'Merriweather', sans-serif;
    color: white;
  }

  .details-container > .center > p {
    font-size: 0.75rem;
    letter-spacing: 0.049rem;
    line-height: 1.19rem;
    text-align: center;
  }
  .details-container > .center > h6 > a {
    display: block;
    padding: 0.9rem 0.6rem 0.5rem 0;
    text-transform: uppercase;
    color: #463e37;
    font-size: 0.75rem;
    text-align: right;
  }

  .details-container > .center > h6 > a:hover {
    color: #93a3b1;
  }

  .details-container > .bottom {
    text-align: center;
    padding: 15px 0px 15px 0px;
    color: white;
  }

  /*  Utility Classes*/
  .btn {
    text-transform: uppercase;
    font-family: 'Merriweather', sans-serif;
    font-weight: 600;
    padding: 1.18rem 0;
    background: transparent;
    border: none;
    cursor: pointer;
    letter-spacing: 0.07rem;
    text-align: center;
  }

  .btn-primary {
    background: #151311;
    color: #e1e5e9;
  }

  .btn-secondary {
    background: #9cabb8;
    color: #151311;
  }

  /*  Media queries */
  @media (max-width: 768px) {
    .dark-overlay .movie-details {
      flex-direction: column;
    }
    .details-container > .top .details-summary {
      margin: 5px 10px;
    }
  }

  @media (max-width: 568px) {
    .dark-overlay .movie-details {
      flex-direction: column;
      width: 90%;
    }
    .details-container > .top .details-summary {
      margin: 5px 10px;
    }
  }
</style>
