<template>
    <v-navigation-drawer v-model="drawer" app class="black" style="top: 63px;" absolute temporary>
        <p>test</p>
    </v-navigation-drawer>
</template>

<script>
    export default {
        name: "Menu",
        data() {
            return {
                drawer: true
            }

        }
    }
</script>

<style scoped>

</style>