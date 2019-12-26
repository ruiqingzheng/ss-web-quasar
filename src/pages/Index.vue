<template>
  <q-page
    class="full-height column wrap justify-center items-center content-center"
    ref="scrollContainer"
  >
    <IndexTop />
    <Feature/>
  </q-page>
</template>

<script>
import IndexTop from "../components/IndexTop";
import Feature from "../components/Feature";

export default {
  components: {
    IndexTop,
    Feature
  }
};
</script>
