<template>
    <button
            @click="toggleTheme({change : true})"
            aria-label="Switch theme between light and dark"
            id="themeSwitch"
    >
        <transition name="theme">
            <moon-icon class="moon" v-if="theme === 'bright'"/>
        </transition>
        <transition name="theme">
            <sun-icon class="sun" v-if="theme === 'dark'"/>
        </transition>
    </button>
</template>

<script>
    import {MoonIcon, SunIcon} from "vue-feather-icons";
    import {toggleTheme} from "../Services/theme.service";

    const [dark, bright] = ["dark", "bright"];
    const getTheme = () => localStorage.getItem('theme') || bright;

    export default {
        components: {
            MoonIcon,
            SunIcon
        },
        data() {
            return {
                theme: ""
            };
        },
        methods: {
            toggleTheme({change = false, initial = false} = {}) {

                this.theme = toggleTheme(initial);

                if (change) this.$emit("theme-change");
            }
        },
        created() {
            this.toggleTheme({initial: true});
        }
    };
</script>

<style lang="scss" scoped>
    button {
        background: none;
        border: 0;
        padding: 0;
        transition: color 0.15s ease-in-out;
        cursor: pointer;
        width: 48px;
        height: 48px;
        position: relative;

        &:focus {
            outline: none;
        }

        .dark & {
            color: $textDark;
        }

        .bright & {
            color: $textBright;
        }
    }

    svg {
        position: absolute;
        top: 12px;
        left: 12px;
    }

    .theme-enter-active,
    .theme-leave-active {
        transition: transform 0.25s ease-in-out, opacity 0.25s ease-in-out;
    }

    .theme-enter, .theme-leave-to /* .fade-leave-active below version 2.1.8 */
    {
        transform: translateY(20px) scale(0.5);
        opacity: 0;
    }
</style>


