<template>
  <div id="listado">
    <div v-if="items.length === 0">
      <slot name="no-items">
        <p>
          No hay ni un jodido elemento.
        </p>
      </slot>
    </div>
    <div class="contenido-lista" v-for="item in items" :key="item.id">
      <slot :item="item"> </slot>
    </div>
  </div>
</template>

<script>
  import Ficha from '@/components/Ficha.vue';

  export default {
    name: 'Lista',
    components: {
      Ficha,
    },
    props: {
      items: {
        type: Array,
      },
      itemName: {
        type: String,
        default: '',
      },
    },
  };
</script>

<style lang="scss" scoped>
  #listado {
    display: flex;
    flex-wrap: wrap;
  }
  .contenido-lista {
    width: 24%;
    margin: 5px;
  }
</style>
