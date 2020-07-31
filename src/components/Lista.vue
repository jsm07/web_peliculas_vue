<template>
    <div id="listado">
        <div v-if="peliculas.length === 0">
            <p>No hay pelicula disponibles.</p>
        </div>
        <div v-for="pelicula in peliculas" :key="pelicula.id">
            <Ficha
                :nombre="pelicula.title"
                :descripcion="pelicula.overview"
                :fecha="pelicula.release_date"
                :pathPoster="pelicula.poster_path"
            >
            </Ficha>
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
        peliculas: {
            type: Array,
        },
    },
};
</script>

<style lang="scss" scoped></style>
