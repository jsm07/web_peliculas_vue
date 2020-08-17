<template>
  <div class="rate">
    <label
      title="1"
      :class="{ activa: puntuacionRound < 2 || puntuacionRound > 0, editable: editable }"
    ></label>
    <label
      title="2"
      :class="{ activa: puntuacionRound < 3 || puntuacionRound > 1, editable: editable }"
    ></label>
    <label
      title="3"
      :class="{ activa: puntuacionRound < 4 || puntuacionRound > 2, editable: editable }"
    ></label>
    <label
      title="4"
      :class="{ activa: puntuacionRound < 5 || puntuacionRound > 3, editable: editable }"
    ></label>
    <label title="5" :class="{ activa: puntuacionRound > 4 }"></label>
  </div>
</template>

<script>
  export default {
    name: 'ranking',
    props: {
      puntuacion: {
        type: Number,
      },
      editable: {
        type: Boolean,
      },
    },
    computed: {
      puntuacionRound: function() {
        return (this.puntuacion * 5) / 10;
      },
    },
  };
</script>

<style lang="scss" scoped>
  .rate {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .rate > label {
    width: 1em;
    cursor: pointer;
    font-size: 30px;
    color: #ccc;
  }
  .rate > label:before {
    content: '★ ';
  }

  .rate > label.activa {
    color: #ffc700;
  }

  .rate > label.editable:hover,
  .rate > label.editable:hover ~ label.editable {
    color: #deb217;
  }
</style>
