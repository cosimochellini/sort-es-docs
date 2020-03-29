<template>
    <Layout :sidebar="false">
        <div class="content">
            <h1>{{$static.metadata.siteName}}, {{ description }}</h1>
            <nav>
                <!-- To use other icons here, you need to import them in the Shortcut component -->
                <Shortcut icon="play-icon" link="/getting-started" text="Getting started"/>
                <Shortcut icon="sliders-icon" link="/sortable-introduction" text="Sortables"/>
                <Shortcut icon="type-icon" link="/typescript" text="TypeScript support"/>
            </nav>
            <GitLink class="git" size="large"/>
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

    const urlImage = 'https://dzwonsemrish7.cloudfront.net/items/412L1Z001B1z331v2e1j/Annotazione%202020-02-25%20162807.jpg';
    const title = 'sort-es , a modern, tree-shakeable, type-safe, utility library to sort any type of array';

    const metaTags = [
        ["description", title],
        ['og:type', 'website'],
        ['og:url', 'sort-es.netlify.com'],
        ['og:image', urlImage],
        ['og:title', title]
    ];
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
                meta: metaTags.map(([name, content]) => ({key: name, name, content}))
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
