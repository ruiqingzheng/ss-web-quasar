<template>
  <q-layout view="lhr Lpr lff">
    <q-header reveal class=" bg-white">
      <q-toolbar class="text-indigo">
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg" />
          </q-avatar>
          Title </q-toolbar-title
        ><q-space />

        <!--
          notice shrink property since we are placing it
          as child of QToolbar
        -->

        <q-btn
          to="/div1"
          flat
          stretch
          label="div1"
          :class="[{ active: current === 0 }]"
          @click="current = 0"
        />
        <q-btn
          to="/div2"
          flat
          stretch
          label="div2"
          :class="[{ active: current === 1 }]"
          @click="current = 1"
        />
        <q-btn
          to="/div3"
          flat
          stretch
          label="div3"
          :class="[{ active: current === 2 }]"
          @click="current = 2"
        />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer bordered class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg" />
          </q-avatar>
          Title
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import bus from "../utils/bus";
export default {
  data() {
    return {
      current: 0
    };
  },
  mounted() {
    bus.$on("indexChange", index => {
      this.current = index;
      // console.log("bus $on index change :" + index);
    });
  },
  components: {},
  methods: {
  }
};
</script>

<style scoped>
.active {
  color: red;
}
</style>
