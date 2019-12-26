<template>
  <!-- Showcase -->
  <section class="section-a">
    <div class="container">
      <div>
        <h1>The headphones of the future.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
          repudiandae rerum libero ipsum asperiores omnis mollitia, nostrum
          commodi placeat ea itaque modi corrupti corporis nam voluptas aut
          reprehenderit eaque culpa.
        </p>
        <a href="#" class="btn">Read More</a>
      </div>
      <img src="https://i.ibb.co/37Y74kv/showcase.jpg" alt="" />
    </div>
  </section>
</template>

<style lang="scss" scoped>

  .container {
    max-width: 1100px;
    margin: auto;
    overflow: hidden;
    padding: 0 2rem;
  }

  .section-a {
    margin: 2rem 0;
    .container {
      display: grid;
      grid-template-columns: 50% 50%;
      grid-gap: 3rem;
      align-items: center;
      justify-content: center;
      .btn {
        display: inline-block;
        background: $primary;
        color: #fff;
        padding: 0.8rem 1.5rem;
        border: none;
        cursor: pointer;
        font-size: 1.1rem;
        border-radius: 30px;
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



</style>

