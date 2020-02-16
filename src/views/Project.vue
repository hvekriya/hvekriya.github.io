<template>
  <main role="main">
    <section
      class="jumbotron masthead text-center text-white"
      v-bind:style="{ backgroundImage: 'url(' + project.cover.url + ')' }"
    >
      <div class="overlay"></div>
      <div class="container animated pulse pulse">
        <h1 class="display-3 animated zoomIn heading--stroke-shadow">{{project.title[0].text}}</h1>
        <!-- <p>
          <a href="/" class="btn m-2">
            <span class="fas fa-arrow-alt-circle-left"></span> Back to projects
          </a>
        </p>-->
      </div>
    </section>

    <div class="album">
      <div class="container">
        <h2>Overview</h2>
        <br />
        <h5>Client</h5>
        <prismic-rich-text :field="project.client" />

        <h5>Challenge</h5>
        <prismic-rich-text :field="project.challenge" />

        <h5>Outcome</h5>
        <prismic-rich-text :field="project.outcome" />

        <h5>Length of project</h5>
        <prismic-rich-text :field="project.length" />

        <h5>My role in the project</h5>
        <prismic-rich-text :field="project.role" />

        <br />
        <prismic-rich-text :field="project.content" />

        <br />
      </div>
    </div>
    <div
      class="container-fluid bg-light"
      v-bind:style="{ backgroundImage: 'url(' + this.cover.url + ')' }"
    >
      <div class="featured">
        <h4>You may also like</h4>
        <br />
        <YouMayAlsoLike :fields="project.body" />
        <center v-if="project.body[0].items.length >= 3">
          <a href="/" class="btn btn-secondary m-2">
            <span class="fas fa-arrow-alt-circle-left"></span> Back to projects
          </a>
        </center>
      </div>
    </div>
  </main>
</template>

<script>
import YouMayAlsoLike from "../components/YouMayAlsoLike";

export default {
  name: "Project",
  components: {
    YouMayAlsoLike
  },
  data() {
    return {
      project: "",
      cover: {
        url:
          "https://images.unsplash.com/photo-1580581764285-5b9567a3649e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&auto=format&fit=crop&w=2250&q=80"
      }
    };
  },
  methods: {
    getContent(uid) {
      this.$prismic.client.getByUID("projects", uid).then(document => {
        if (document) {
          this.project = document.data;
        } else {
          this.$router.push({
            name: "not-found"
          });
        }
      });
    }
  },
  created() {
    this.getContent(this.$route.params.uid);
  },
  beforeRouteUpdate(to, from, next) {
    this.getContent(to.params.uid);
    next();
  }
};
</script>