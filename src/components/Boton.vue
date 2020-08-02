<template>
  <div>
    <button
      class="button"
      style="vertical-align:middle"
      @click="$emit('click')"
      :style="{ width: width }"
      :class="{ left: left, right: !left }"
    >
      <span>{{ nombre }} </span>
    </button>
  </div>
</template>

<script>
  export default {
    name: 'boton',
    props: {
      nombre: {
        type: String,
      },
      width: {
        type: Number,
        default: 120,
      },
      left: {
        type: Boolean,
      },
    },
  };
</script>

<style lang="scss" scoped>
  .button {
    display: inline-block;
    border-radius: 4px;
    background-color: #1e74f4;
    border: none;
    color: #ffffff;
    text-align: center;
    font-size: 16px;
    padding: 5px;
    transition: all 0.5s;
    cursor: pointer;
    margin: 5px;
  }

  .button span {
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: 0.5s;
  }

  .button.right span:after {
    content: '\00bb';
    position: absolute;
    opacity: 0;
    top: 0;
    right: -20px;
    transition: 0.5s;
  }

  .button.right:hover span {
    padding-right: 25px;
  }

  .button.right:hover span:after {
    opacity: 1;
    right: 0;
  }

  .button.left span:after {
    content: '\00ab';
    position: absolute;
    opacity: 0;
    top: 0;
    left: -20px;
    transition: 0.5s;
  }

  .button.left:hover span {
    padding-left: 25px;
  }

  .button.left:hover span:after {
    opacity: 1;
    left: 0;
  }
</style>
