<template>
    <nav>
        <v-toolbar dark>

            <!--            <v-toolbar-side-icon></v-toolbar-side-icon>-->
            <v-toolbar-side-icon>
                <img src="@/assets/watieat.png" style="width: 40px">
            </v-toolbar-side-icon>
            <v-toolbar-title>WatiEat</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn flat>Login</v-btn>
                <v-btn flat>Signup</v-btn>
            </v-toolbar-items>
        </v-toolbar>
    </nav>
</template>

<script>
    export default {
        name: "Navbar"
    }
</script>

<style scoped>

</style>