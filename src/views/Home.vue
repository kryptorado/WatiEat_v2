<template>

    <div>

        <b-tabs position="is-centered">

            <b-tab-item label="Breakfast" icon="coffee" pack="fas" size="is-small">
            </b-tab-item>
            <b-tab-item label="Lunch" icon="concierge-bell"></b-tab-item>
            <b-tab-item label="Dinner" icon="wine-glass"></b-tab-item>
        </b-tabs>



    </div>

</template>


<script>
    export default {
        data() {
            return {
                drawer: true
            }

        }
    }
</script>