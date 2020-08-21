<template>
  <div class="grid-container">
    <div class="header">
      <div>
        <img alt="Vue logo" src="@/assets/logo.png" />
        <h4>Tus mejores películas</h4>
      </div>
      <div>
        <slot name="busqueda"></slot>
      </div>
    </div>
    <nav class="main-nav">
      <ul>
        <li>
          <font-awesome-icon :icon="['fas', 'caret-right']" size="lg" />
          <router-link class="active" to="/">Inicio</router-link>
        </li>
      </ul>
    </nav>
    <div class="main">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import { library } from '@fortawesome/fontawesome-svg-core';
  import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

  export default {
    name: 'Layout',
    components: {
      FontAwesomeIcon,
    },
    created() {
      library.add(faCaretRight);
    },
  };
</script>

<style lang="scss" scoped>
  .grid-container {
    display: grid;
    grid-template-columns: 1fr 7fr;
    grid-template-rows: 50px 1fr 100px;
    grid-template-areas: 'header header' 'nav main' 'nav main';
  }

  .header {
    grid-area: header;
    background-color: white;
    color: #41b883;
    display: flex;
    justify-content: space-between;

    div:nth-child(2) {
      width: 15%;
      margin-right: 15px;
    }

    #input-busqueda {
      width: 60%;
      box-sizing: border-box;
      border: 2px solid #ccc;
      border-radius: 4px;
      font-size: 16px;
      background-color: white;
      padding: 8px 20px 8px 20px;
      -webkit-transition: width 0.4s ease-in-out;
      transition: width 0.4s ease-in-out;
    }

    #input-busqueda:focus {
      width: 100%;
    }
  }

  .header > div {
    display: flex;
    align-items: center;
    padding-left: 5px;
    height: 100%;
  }

  .header > div img {
    width: 25px;
    margin-right: 5px;
  }

  .main-nav {
    grid-area: nav;
    padding: 20px 10px 20px 10px;
    background-color: #f0f0f0;
  }

  .main-nav ul {
    margin: 0px;
    padding: 0px;
  }

  .main-nav ul li {
    list-style-type: none;
  }

  .main-nav a {
    color: black;
    text-decoration: none;
    margin: 0px 10px 0px 10px;
    font-size: 16px;
  }

  .main-nav a.active {
    color: #41b883;
    font-weight: bold;
  }

  .main {
    grid-area: main;
    margin-bottom: 30px;
    background-color: #f7f7f7;
  }

  @media only screen and (max-width: 600px) {
    .grid-container {
      grid-template-columns: 1fr 3fr;
      grid-template-areas:
        'header  header'
        'nav     nav'
        'main    main';
    }
    nav ul {
      display: flex;
      justify-content: space-between;
    }
  }

  @media only screen and (min-width: 768px) {
    .grid-container {
      grid-template-columns: 1fr 7fr;
      grid-template-areas:
        'header header'
        'nav    main'
        'nav    main';
    }
    nav ul {
      flex-direction: column;
    }
  }
</style>
