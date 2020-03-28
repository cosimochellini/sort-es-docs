<template>
  <Layout :sidebar="false">
    <div class="content">
      <h1>{{$static.metadata.siteName}}, {{ description }}</h1>
      <nav>
        <!-- To use other icons here, you need to import them in the Shortcut component -->
        <Shortcut link="/getting-started" text="Getting started" icon="play-icon" />
        <Shortcut link="/sortable-introduction" text="Sortables" icon="sliders-icon" />
        <Shortcut link="/typescript" text="TypeScript support" icon="type-icon" />
      </nav>
      <GitLink class="git" size="large" />
    </div>
  </Layout>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import GitLink from "~/components/GitLink.vue";
import Shortcut from "~/components/Shortcut.vue";

export default {
  components: {
    GitLink,
    Shortcut
  },
  data() {
    return {
      description:
        "a modern, tree-shakeable, type-safe, utility library to sort any type of array"
    };
  },
  metaInfo() {
    return {
      title: this.description,
      meta: [
        {
          key: "description",
          name: "description",
          content:
            "A theme for static site documentation based on Gridsome, ready to deploy to Netlify in one click."
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
}

h1 {
  text-align: center;
  max-width: 600px;
  margin: 1.5em auto 1.5em;

  @include respond-above(md) {
    max-width: 1000px;
  }
}

h2 {
  font-size: 1.4rem;
  margin: 0;
}

nav {
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @include respond-above(sm) {
    flex-direction: row;
  }
}

.git {
  margin: 3em 0 0;
  align-self: center;

  @include respond-above(md) {
    margin: 5em 0 0;
  }
}
</style>
