<template>
  <!-- Footer -->
  <footer class="section-footer py-4 bg-primary">
    <div class="container">
      <div>
        <h2 class="text-2 mb-1">Lorem ipsum dolor sit.</h2>
        <a href="http://twitter.com">
          <i class="fab fa-twitter fa-2x"></i>
        </a>
        <a href="http://facebook.com">
          <i class="fab fa-facebook fa-2x"></i>
        </a>
        <a href="http://youtube.com">
          <i class="fab fa-youtube fa-2x"></i>
        </a>
      </div>
      <div>
        <h3 style="text-align: left">Company Info</h3>
        <ul>
          <li><a href="#">All Products</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Service</a></li>
        </ul>
      </div>
      <div>
        <h3>Blog Posts</h3>
        <ul>
          <li><a href="#">Lorem ipsum dolor.</a></li>
          <li><a href="#">Lorem ipsum dolor.</a></li>
          <li><a href="#">Lorem ipsum dolor.</a></li>
          <li><a href="#">Lorem ipsum dolor.</a></li>
        </ul>
      </div>
      <div>
        <h3>Subscribe</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <form class="mt-1" name="email-form" method="POST" data-netlify="true">
          <div class="email-form">
            <span class="form-control-wrap"
              ><input
                type="email"
                name="email"
                id="email"
                size="40"
                class="form-control"
                placeholder="E-mail"/></span
            ><button type="submit" value="Submit" class="form-control submit">
              <i class="fas fa-chevron-right"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  </footer>
</template>

<script></script>

<style lang="scss" scoped>
.container {
  max-width: 1100px;
  margin: auto;
  overflow: hidden;
  padding: 0 2rem;
}

h1,
h2,
h3,
h4 {
  line-height: 1.3;
}

a {
  color: #444;
  text-decoration: none;
  font-size: 1rem;
}

.section-footer {
  background: $primary;
  color: #fff;
  padding: 4rem 0;
}

.section-footer .container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  div {
    /*border: solid 1px;*/
    /*box-sizing: border-box;*/
    /*margin:0;*/
    /*padding: 0;*/
  }
  ul {
    list-style: none;
    margin-left: -2.5rem;
  }
}

.section-footer h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.section-footer h3 {
  font-size: 1.5rem;
  margin-bottom: 0.7rem;
}

.section-footer a {
  line-height: 1.9;
  color: #ccc;
}

.section-footer a > i {
  color: white;
  margin-right: 0.5rem;
}

.email-form {
  width: 100%;
  display: inline-block;
  background-color: #555;
  position: relative;
  border-radius: 20px;
  /*line-height: 0;*/
  margin-top: 1rem;
}

/* // .form-control-wrap {
  // 	position: relative;
  // 	display: inline-block;
  // 	width: 100%;
  // } */

.email-form .form-control {
  display: inline-block;
  border: 0;
  outline: 0;
  font-size: 1rem;
  color: #ddd;
  background-color: transparent;
  font-family: inherit;
  margin: 0;
  padding: 0 3rem 0 1.5rem;
  width: 100%;
  height: 45px;
  border-radius: 20px;
}

.email-form .submit {
  display: inline-block;
  position: absolute;
  top: 0;
  right: 0;
  width: 45px;
  height: 45px;
  background-color: #eee;
  font-size: 1rem;
  text-align: center;
  margin: 0;
  padding: 0;
  outline: 0;
  border: 0;
  color: #333;
  cursor: pointer;
  border-radius: 0 20px 20px 0;
}

@media (max-width: 700px) {
  .section-footer {
    padding: 2rem 0;
  }
  .section-footer .container {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .section-footer div:nth-child(2),
  .section-footer div:nth-child(3) {
    display: none;
  }
}
</style>
