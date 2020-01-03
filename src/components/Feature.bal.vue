<template>
  <section class="section-feature">
    <div class="container">
      <h2>OUR FEATURE</h2>
      <div
        style="display: flex; flex-direction: row; justify-content: space-between;"
      >
        <q-card flat class="my-card">
          <div class="icon-wrapper">
            <!--<q-icon name="fas fa-ambulance" class="card-icon" />-->

            <i class="material-icons card-icon">
              highlight
            </i>
          </div>

          <q-card-section>
            <div class="text-h6">Our Changing Planet</div>
            <div class="text-subtitle2">by John Doe</div>
          </q-card-section>

          <q-card-section>
            {{ lorem }}
          </q-card-section>
        </q-card>
        <q-card flat class="my-card">
          <div class="icon-wrapper">
            <!--<q-icon name="fas fa-ambulance" class="card-icon" />-->
            <i class="material-icons card-icon">
              device_hub
            </i>
          </div>
          <q-card-section>
            <div class="text-h6">Our Changing Planet</div>
            <div class="text-subtitle2">by John Doe</div>
          </q-card-section>

          <q-card-section>
            {{ lorem }}
          </q-card-section>
        </q-card>
        <q-card flat class="my-card">
          <div class="icon-wrapper">
            <!--<q-icon name="fas fa-ambulance" class="card-icon" />-->
            <i class="material-icons card-icon" >
              important_devices
            </i>
          </div>
          <q-card-section>
            <div class="text-h6">Our Changing Planet</div>
            <div class="text-subtitle2">by John Doe</div>
          </q-card-section>

          <q-card-section>
            {{ lorem }}
          </q-card-section>
        </q-card>
      </div>
    </div>
    <!--<p-->
      <!--v-scrollanimation-->
      <!--style="width: 100%; font-size: 3rem; text-align: center; padding: 2rem;"-->
    <!--&gt;-->
      <!--Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias asperiores-->
      <!--autem beatae dignissimos dolor eius fugiat hic impedit ipsum, itaque-->
      <!--laboriosam laborum, magni obcaecati pariatur praesentium quidem-->
      <!--reprehenderit voluptatum? Dignissimos!-->
    <!--</p>-->
  </section>
</template>

<script>
export default {
  data() {
    return {
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    };
  }
};
</script>

<style lang="scss" scoped>
.before-enter {
  transform: translateY(100px);
  opacity: 0;
  transition: 2s all ease-out;
}
.enter {
  transform: translateY(0);
  opacity: 1;
}
.section-feature {
  width: 100%;
  margin: 2rem 0;
  .container {
    /*border: solid 1px;*/
    max-width: 1100px;
    margin: auto;
    overflow: hidden;
    padding: 0 0rem;

    h2 {
      width: 100%;
      text-align: center;
    }

    .my-card {
      max-width: 250px;
      .icon-wrapper {
        width: 100%;
        text-align: center;
        .card-icon {
          font-size: 4rem;
          color: $icon-secondary;
        }
      }
    }
  }
}
</style>
