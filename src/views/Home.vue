<template>
  <main role="main">
    <section
      class="jumbotron text-center text-white"
      v-bind:style="{ backgroundImage: 'url(' + this.cover.url + ')' }"
    >
      <div class="container animated pulse pulse">
        <h1
          class="home-heading display-3 animated slideInDown heading--stroke-shadow"
        >Haresh Vekriya</h1>

        <p class="lead">UX/UI Designer</p>
        <p>
          <a href="/experience" class="btn m-2">Experience</a>
          <a
            href="https://drive.google.com/file/d/1yqg2e0DIoe9NPoNETT-d9vmuRfEaGR5O/view?usp=sharing"
            class="btn m-2"
            target="_blank"
          >Download CV</a>
        </p>
      </div>
    </section>

    <LatestProjects />
    <!-- <BlogPosts /> -->
    <!-- <DribblePosts /> -->
    <MediumClaps />
    <Tools />
  </main>
</template>

<script>
import LatestProjects from "../components/LatestProjects";
import BlogPosts from "../components/BlogPosts";
import MediumClaps from "../components/MediumClaps";
import Tools from "../components/Tools";
import DribblePosts from "../components/DribblePosts";

export default {
  name: "Home",
  components: {
    LatestProjects,
    BlogPosts,
    MediumClaps,
    Tools,
    DribblePosts
  },
  data() {
    return {
      cover: {
        url:
          "https://images.unsplash.com/photo-1580581764285-5b9567a3649e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&auto=format&fit=crop&w=2250&q=80"
      }
    };
  }
};
</script>

<style lang="scss" scoped>
section {
  background-size: cover;
}
.home-heading {
  color: white;
  font-family: "Great Vibes", cursive;
  font-size: 80px;
  line-height: 100px;
  font-weight: normal;
  margin-bottom: 0px;
  margin-top: 40px;
  margin-bottom: 20px;
  text-align: center;
  text-shadow: 0 1px 1px #fff;
}
</style>
