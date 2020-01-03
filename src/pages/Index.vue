<template>
  <q-page
    class="full-height column wrap justify-center items-center content-center"
    ref="scrollContainer"
  >
    <IndexTop />
    <Feature/>
    <Packages/>
  </q-page>
</template>

<script>

import IndexTop from "../components/IndexTop";
import Feature from "../components/Feature";
import Packages from "../components/Packages";

export default {
  components: {
    IndexTop,
    Feature,
    Packages
  }
};
</script>


<style scoped lang="scss">


</style>
