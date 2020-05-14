<template>
  <!-- Showcase -->
  <section class="section-a">
    <div class="container">
      <div>
        <h1 v-html="topData.title1" />
        <p>{{ topData.desc }}</p>
        <q-btn
          outline
          rounded
          color="primary"
          label="注册"
          class="q-ma-lg new-btn"
        />
        <q-btn
          unelevated
          rounded
          color="primary"
          label="登录"
          class="q-ma-lg new-btn"
        />
      </div>
      <!--<img src="https://i.ibb.co/37Y74kv/showcase.jpg" alt="" />-->
      <img src="/statics/index-top-7.png" alt="" style="width: 100%">
    </div>
  </section>
</template>

<script>
export default {
  data: () => {
    return {
      topData: {
        title1: "顷刻之间,<br>眨眼加载.!!!!!!",
        title2: "眨眼加载.",

        desc:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo\n" +
          "          repudiandae rerum libero ipsum asperiores omnis mollitia, nostrum\n" +
          "          commodi placeat ea itaque modi corrupti corporis nam voluptas aut\n" +
          "          reprehenderit eaque culpa."
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 1100px;
  margin: auto;
  overflow: hidden;
  padding: 0 2rem;
  /*height: 100vh;*/
}

.section-a {
  margin: 0rem 0;
  .container {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-gap: 3rem;
    align-items: center;
    justify-content: center;
    .btn {
      display: inline-block;
      text-align: center;
      width: 10rem;
      background: $primary;
      color: #fff;
      padding: 0.5rem;
      letter-spacing: 1rem;
      border: none;
      cursor: pointer;
      font-size: 1.1rem;
      border-radius: 30px;
    }
    .new-btn {
      font-size: 1.1rem;
      /*padding: 0.5rem;*/
      text-align: center;
      color: black;
      width: 10rem;
      letter-spacing: 1rem;
      padding-left: 1rem;
    }

    .btn:hover {
      background: $secondary;
    }
  }
  h1 {
    font-size: 4rem;
    /*color: var(--primary-color);*/
  }
  p {
    margin: 1rem 0;
  }
  a {
    color: #444;
    text-decoration: none;
  }
}

@media (max-width: 700px) {
  .section-a .container {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .section-a .container h1 {
    font-size: 1.5rem;
    line-height: 2rem;
  }

  .section-a .container div:first-child {
    order: 2;
  }

  .section-a .container div:nth-child(2) {
    order: -1;
  }

  .section-a img {
    width: 80%;
    margin: auto;
  }
}
</style>
