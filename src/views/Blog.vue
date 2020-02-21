<template>
  <main role="main">
    <section
      class="jumbotron masthead text-center text-white"
      v-bind:style="{ backgroundImage: 'url(' + this.cover.url + ')' }"
    >
      <div class="overlay"></div>
      <div class="container animated pulse pulse">
        <h1 class="jumbotron-heading">Blog</h1>
        <p>
          <a href="/" class="btn m-2">
            <span class="fas fa-arrow-alt-circle-left"></span> Go back
          </a>
        </p>
      </div>
    </section>

    <div class="album">
      <div class="container">
        <p class="h2 pb-4">Blog</p>
        <div class="row">
          <div
            class="col-md-4 animated pulse bounce"
            v-for="(item, index) in posts"
            :key="'project-' + index"
          >
            <div
              class="card mb-4 shadow p-3 mb-5 bg-white rounded"
              v-for="(title, index) in item.data.title"
              :key="'project-' + index"
            >
              <img
                class="bd-placeholder-img card-img-top"
                :src="item.data.cover.url"
                :alt="item.data.cover.alt"
              />
              <div class="card-body">
                <h5 class="card-title">{{ title.text }}</h5>
                <p class="card-text">{{ item.data.content | readMore(200, ' ...') }}</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group w-100">
                    <a :href="'/blog/post/' + item.uid">Read more</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Blog",
  data() {
    return {
      posts: "",
      cover: {
        url:
          "https://images.unsplash.com/photo-1580581764285-5b9567a3649e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&auto=format&fit=crop&w=2250&q=80"
      }
    };
  },
  methods: {
    getContent() {
      this.$prismic.client
        .query(this.$prismic.Predicates.at("document.type", "blog"), {
          orderings: "[document.last_publication_date]"
        })
        .then(document => {
          if (document) {
            console.log(document);
            this.posts = document.results;
          } else {
            this.$router.push({
              name: "not-found"
            });
          }
        });
    }
  },
  created() {
    this.getContent();
  },
  beforeRouteUpdate(to, from, next) {
    this.getContent();
    next();
  }
};
</script>
