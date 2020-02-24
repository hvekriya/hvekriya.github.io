<template>
  <header>
    <div class="collapse bg-dark" id="navbarHeader">
      <div class="container">
        <div class="row">
          <div class="col-sm-8 col-md-7 py-4">
            <h4 class="text-white">About me</h4>
            <p class="text-muted">
              Technology changes daily shapes what is possible in my life, and
              also gets me excited! I enjoy the challenge of researching and
              solving problems using the latest technology. I am very
              passionate about design and front-end development, quick to grasp new ideas and concepts and
              to develop innovative and creative solutions to problems. Able
              to work well on own initiative and can demonstrate the high
              levels of motivation required to meet the tightest of deadlines.
              Even under significant pressure, I have a strong ability to
              perform effectively.
              <br />
              <br />During my spare time I like to learn new skills
              and develop my existing skills. I also help local businesses with their online presence by creating websites or designing graphics.
            </p>
          </div>
          <div class="col-sm-4 offset-md-1 py-4">
            <h4 class="text-white">
              Contact me
              <span class="wave">👋</span>
            </h4>
            <ul class="list-unstyled">
              <li class="mb-2">
                <a href="tel:+447412899041" class="text-muted">
                  <i class="fas fa-mobile text-white mr-1"></i>
                  07412899041
                </a>
              </li>
              <li class="mb-2">
                <a href="mailto:haresh.vekriya@gmail.com" class="text-muted">
                  <i class="fas fa-envelope text-white mr-1"></i>
                  haresh.vekriya@gmail.com
                </a>
              </li>
              <li class="mb-2">
                <a href="https://github.com/hvekriya" class="text-muted">
                  <i class="fab fa-github text-white mr-1"></i>
                  Github
                </a>
              </li>
              <li class="mb-2">
                <a href="https://www.linkedin.com/in/hareshvekriya/" class="text-muted">
                  <i class="fab fa-linkedin text-white mr-1"></i>
                  LinkedIn
                </a>
              </li>
              <li class="mb-2">
                <a href="https://www.behance.net/skyhighdesign" class="text-muted">
                  <i class="fab fa-behance-square text-white mr-1"></i>
                  Behance
                </a>
              </li>
              <li class="mb-2">
                <a href="https://dribbble.com/hvekriya" class="text-muted">
                  <i class="fab fa-dribbble text-white mr-1"></i>
                  Dribble
                </a>
              </li>
              <li class="mb-2">
                <input type="checkbox" id="theme-toggle" v-model="nightMode" />
                <label for="theme-toggle">
                  <span></span>
                </label>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="navbar navbar-dark bg-dark shadow-sm">
      <div class="container d-flex justify-content-between">
        <a href="/" class="navbar-brand d-flex align-items-center">
          <img
            src="/img/logo.svg"
            class="logo img-fluid animated fadeInLeft"
            alt="Haresh Vekriya Logo"
            onerror="this.onerror=null; this.src='/img/logo.png'"
          />
        </a>
        <button
          class="hamburger hamburger--arrowturn navbar-toggler"
          v-bind:class="{ 'is-active': menuIsActive }"
          type="button"
          v-on:click="toggleNav"
          data-toggle="collapse"
          data-target="#navbarHeader"
          aria-controls="navbarHeader"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      nightMode: this.$session.get("nightMode") || false,
      menuIsActive: false
    };
  },
  watch: {
    nightMode: function() {
      this.$session.set("nightMode", this.nightMode);
      // Emit this information to the parents component
      this.$emit("nightMode-toggle", this.$session.get("nightMode"));
    }
  },
  methods: {
    toggleNav() {
      this.menuIsActive = !this.menuIsActive;
    }
  }
};
</script>
