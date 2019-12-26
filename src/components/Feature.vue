<template>
  <section class="section-feature">
    <div class="container">
      <h2>带你了解我们的特性</h2>
      <div
        style="display: flex; flex-direction: row; justify-content: space-between;"
      >
        <q-card flat class="my-card">
          <div class="icon-wrapper">
            <q-icon
              name="fas fa-ambulance"
              class="card-icon"
            />
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
            <q-icon
              name="fas fa-ambulance"
              class="card-icon"
            />
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
            <q-icon
              name="fas fa-ambulance"
              class="card-icon"
            />
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
          color: $primary;
        }
      }
    }
  }
}
</style>
