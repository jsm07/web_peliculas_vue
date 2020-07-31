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
            <Lista :peliculas="peliculas"></Lista>
        </div>
    </div>
</template>

<script>
import Lista from '@/components/Lista.vue';
import axios from 'axios';
import _ from 'lodash';

export default {
    name: 'Home',
    components: {
        Lista,
    },
    data() {
        return {
            peliculas: [],
        };
    },
    mounted() {
        axios
            .get('https://api.themoviedb.org/3/movie/popular?api_key=d94bf9a9aa41737617ac858a87cf9a87&language=es')
            .then((response) => {
                response.data.results.forEach((pelicula) => {
                    this.peliculas.push(pelicula);
                });
            })
            .catch((error) => {
                console.log(error);
                this.errored = true;
            })
            .finally(() => (this.loading = false));
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
}
</style>
