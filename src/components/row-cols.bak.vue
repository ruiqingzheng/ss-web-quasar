<template>
  <div class="q-pa-md " style="width: 100%; ">
    <div class="row justify-center items-center">
      <div class="col-xs-12 col-sm-12 col-md-3 card-container">
        col-12 col-md-4
      </div>
      <div class="col-xs-12 col-sm-12 col-md-3 card-container">
        col-12 col-md-4
      </div>
      <div class="col-xs-12  col-sm-12 col-md-3 card-container">
        col-12 col-md-4
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      packages: [
        {
          name: "",
          icon: "",
          traffic: "",
          speed: "",
          nodes: "",
          devices: "",
          price: ""
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>


  .card-container {
    border: solid 1px;
  }
</style>
