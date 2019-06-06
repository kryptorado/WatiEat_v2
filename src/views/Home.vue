<template>


    <div>


        <v-jumbotron>
            <v-container fill-height>
                <v-layout align-center>
                    <v-flex>
                        <h3 class="display-3">Welcome to the site</h3>

                        <span class="subheading">Lorem ipsum dolor sit amet, pri veniam forensibus id. Vis maluisset molestiae id, ad semper lobortis cum. At impetus detraxit incorrupte usu, repudiare assueverit ex eum, ne nam essent vocent admodum.</span>

                        <v-divider class="my-3"></v-divider>

                        <div class="title mb-3">Check out our newest features!</div>

                        <v-btn
                                class="mx-0"
                                color="primary"
                                large
                        >
                            See more
                        </v-btn>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-jumbotron>

        <v-tabs centered dark
                v-model="active"
                color="purple"

                slider-color="blacl"
        >
            <v-tab>
                <span><i class="fas fa-coffee"></i></span>
                <div style="padding: 4px">Breakfast</div>
            </v-tab>

            <v-tab>
                <span><i class="fas fa-concierge-bell"></i></span>
                <div style="padding: 4px">Lunch</div>
            </v-tab>

            <v-tab>
                <span><i class="fas fa-wine-glass"></i></span>
                <div style="padding: 4px">Dinner</div>
            </v-tab>


            <v-tab-item
                    v-for="n in 3"
                    :key="n"
            >
                <v-card flat>
                    <v-card-text>{{ text }}</v-card-text>
                </v-card>
            </v-tab-item>
        </v-tabs>

        <div class="text-xs-center mt-3">
            <v-btn @click="next">next tab</v-btn>
        </div>

        <div class="home">
            <h1>This is the homepage</h1>
        </div>

    </div>


</template>

<script>
    export default {
        data() {
            return {
                active: null,
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            }
        },
        methods: {
            next() {
                const active = parseInt(this.active)
                this.active = (active < 2 ? active + 1 : 0)
            }
        }
    }
</script>