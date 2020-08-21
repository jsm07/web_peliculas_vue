<template>
  <div class="movie">
    <div class="movie_header">
      <div class="movie_poster">
        <img v-if="this.pathPoster" :src="urlCompletaImagen(this.pathPoster)" alt="Portada película" />
        <img v-if="!this.pathPoster" src="@/assets/default-movie.png" alt="Portada película" />
      </div>
      <h2 class="movie_title">
        <div class="title_content">
          <span :title="nombre">{{ recortarTexto(this.nombre, 35) }}</span>
          <small
            >({{ fecha.toLocaleString('es-ES', { day: '2-digit', month: 'long', year: 'numeric' }) }})
          </small>
        </div>
      </h2>
      <div class="movie_stars">
        <slot name="slot-1"></slot>
      </div>
    </div>
    <div class="movie_content">
      <p class="movie_plot">
        {{ recortarTexto(this.descripcion, 200) }}
      </p>
    </div>
    <div class="movie_footer">
      <slot name="slot-2"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      id: {
        type: Number,
        required: false,
      },
      nombre: {
        type: String,
        default: 'Nombre',
        required: true,
      },
      descripcion: {
        type: String,
        default: 'Descripción',
        required: true,
      },
      pathFondo: {
        type: String,
      },
      pathPoster: {
        type: String,
        default: '',
        required: false,
      },
      fecha: {
        type: Date,
        required: false,
      },
      puntuacion: {
        type: Number,
        default: 0,
        required: false,
      },
    },
    methods: {
      recortarTexto: function(text, long) {
        if (text.length > long) {
          return text.substring(0, long) + '...';
        }
        return text;
      },
      urlCompletaImagen: function(path) {
        const pathImagen = 'https://image.tmdb.org/t/p/w500';
        return pathImagen + path;
      },
    },
  };
</script>

<style lang="scss" scoped>
  .movie {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    min-height: 580px;
    background-color: #18212e;
    margin-top: 15px;
    padding: 15px 25px 15px 15px;
    border-radius: 5px;
    &_poster {
      padding: 5px;
      img {
        height: 200px;
        border-radius: 5px;
      }
    }
    &_title {
      text-align: center;
      margin: 0;
      color: lightgrey;
    }
    &_stars {
      display: flex;
      justify-content: center;
      margin-top: 10px;
    }
    &_plot {
      color: grey;
    }
    &_footer {
      text-align: center;
    }
    .title_content {
      display: flex;
      flex-direction: column;
      small {
        font-size: 12px;
      }
    }
  }

  @media only screen and (max-width: 600px) {
    .movie {
      justify-content: center;
    }
    .movie_stars {
      justify-content: center;
    }
  }
</style>
