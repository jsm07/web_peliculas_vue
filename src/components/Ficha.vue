<template>
    <div class="card-horizontal noSelect">
        <div class="card-horizontal-image">
            <a href="#"><img :src="pathImagen + pathPoster" alt="Poster"/></a>
        </div>
        <div class="card-horizontal-body">
            <div class="card-horizontal-heading">
                <h3>{{ nombre }}</h3>
            </div>
            <div class="card-horizontal-excerpt">
                <p>{{ recortarDescripcion }}</p>
                <div id="card-last-row">
                    <small>{{ fecha }}</small>
                    <button>Ver Ficha</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        peliculaId: {
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
        pathImagen: {
            type: String,
            default: 'https://image.tmdb.org/t/p/w500/',
            required: false,
        },
        pathPoster: {
            type: String,
            default: '',
            required: false,
        },
        fecha: {
            type: String,
            default: '',
            required: false,
        },
        puntuacion: {
            type: Number,
            default: 0,
            required: false,
        },
    },
    computed: {
        recortarDescripcion: function() {
            if (this.descripcion.length > 200) {
                return this.descripcion.substring(0, 200) + '...';
            }
            return this.descripcion;
        },
    },
};
</script>

<style lang="scss" scoped>
.card-horizontal {
    margin: 20px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    display: flex;
    text-decoration: none;
    position: relative;
}

.card-horizontal a {
    text-decoration: none;
}

.card-horizontal-image {
    padding-right: 10px;
}

.card-horizontal-image img {
    width: 220px;
    height: 100%;
    object-fit: cover;
}

.card-horizontal-body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 10px;
}

.card-horizontal-heading h3 {
    color: #333;
    font-size: 1.4rem;
    padding-bottom: 3px;
    padding-top: 5px;
}

.card-horizontal-excerpt p {
    color: #999;
    font-size: 1.05rem;
    padding-top: 8px;
    padding-bottom: 35px;
}

.card-horizontal-excerpt small {
    color: #777;
    font-size: 0.85rem;
    display: block;
    padding-top: 5px;
    padding-bottom: 5px;
}

#card-last-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

@media (max-width: 30rem) {
    .card-horizontal {
        flex-direction: column;
        width: 100%;
        margin: 0;
        border: none;
        box-shadow: 0 0 4px 0px rgba(0, 0, 0, 0.1);
        position: static;
    }
    .card-horizontal-image {
        padding-right: 0;
    }
    .card-horizontal-image img {
        width: 100%;
    }
    .card-horizontal-body {
        padding: 0.7rem 0.9rem;
        position: relative;
    }
    .card-horizontal-heading h3 {
        font-size: 1.3rem;
    }
    .card-horizontal-excerpt p {
        padding-bottom: 8px;
        font-size: 0.85rem;
    }
    .card-horizontal-excerpt small {
        padding-bottom: 0;
    }
    .card-horizontal-excerpt small,
    .card-category ul li {
        font-size: 0.7rem;
    }
}
</style>
