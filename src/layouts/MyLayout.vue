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
        <ul class="nav desktop-only" >
          <li v-for="(nav, index) in navs" :key="index">
            <a class="btn-wrap">
              <q-icon :name="nav.icon" class="btn-icon" />
              <span>{{nav.label}}</span>
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
    },
    data: () => {
      return {
        navs: [
          {
            id: 'home',
            label: '首页',
            icon: 'home'
          },

          {
            id: 'feature',
            label: '特性',
            icon: 'web'
          },
          {
            id: 'feature',
            label: '定价',
            icon: 'tab'
          }
        ]
      }
    }


  };

</script>

<style lang="scss" scoped>
.nav {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  /*height: 2rem;*/
}

.nav li {
  margin-left: 0em;
  margin-right: 0em;
  margin-bottom: 0;
  width: 6rem;
  line-height: 3rem;
  /*border: solid 1px;*/
}

.nav a {
  width: 100%;
  color: $dark;
  text-decoration: none;
  font-size: 0.9rem;
  text-transform: uppercase;
  opacity: 1;
  position: relative;
  transition: opacity 150ms ease-in-out;
}


.nav .btn-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.nav .btn-wrap:hover {
  color: $primary;
}

.btn-icon {
  font-size: 1em;
  margin-right: 0.5em;
}

.nav a::before {
  /*width: 100%;*/
  content: "";
  display: block;
  height: 0.15rem;
  background: $primary;
  position: absolute;
  top: -0.1rem;
  left: 0;
  right: 0;
  transform: scale(0, 1);
  transition: transform ease-in-out 250ms;
}

.nav a:hover::before {
  transform: scale(1, 1);
}
</style>
