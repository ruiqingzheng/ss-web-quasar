<template>
  <q-layout view="lhr Lpr lff">
    <q-header reveal class=" bg-white">
      <q-toolbar class="text-indigo">
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg" />
          </q-avatar>
          Title
        </q-toolbar-title>

        <q-space />

        <!--
          notice shrink property since we are placing it
          as child of QToolbar
        -->
        <ul class="nav">
          <li>
            <a class="btn-wrap">
              <q-icon name="home" class="text-orange btn-icon" />
              <span>Home</span>
            </a>
          </li>

          <li>
            <a class="btn-wrap">
              <q-icon name="flag" class="text-orange btn-icon" />
              <span>About</span>
            </a>
          </li>

          <li>
            <a class="btn-wrap">
              <q-icon name="web" class="text-orange btn-icon" />
              <span>Blog</span>
            </a>
          </li>

          <li>
            <a class="btn-wrap">
              <q-icon name="contacts" class="text-orange btn-icon" />
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer bordered class="bg-grey-8 text-white">
      <Footer/>
    </q-footer>
  </q-layout>
</template>

<script>
  import Footer from "../components/Footer";

  export default {
    components: {
      Footer
    }


  };

</script>

<style lang="scss" scoped>
.nav {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}

.nav li {
  margin-left: 3em;
  margin-right: 0.5em;
  margin-bottom: 0;
}

.nav a {
  color: black;
  text-decoration: none;
  font-size: 0.9rem;
  text-transform: uppercase;
  opacity: 1;
  position: relative;
  transition: opacity 150ms ease-in-out;
}

.nav a:hover {
  color: #c4c4c4;
}
.btn-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn-icon {
  font-size: 1em;
  margin-right: 0.5em;
}

.nav a::before {
  content: "";
  display: block;
  height: 3px;
  background: black;
  position: absolute;
  top: -0.75em;
  left: 0;
  right: 0;
  transform: scale(0, 1);
  transition: transform ease-in-out 250ms;
}

.nav a:hover::before {
  transform: scale(1, 1);
}
</style>
