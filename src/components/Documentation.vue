<template>
    <TOC v-bind:toc="topics"/>
</template>

<script>
import TOC from './layout/TOC'
export default {
    name: "How",
    components: {
        TOC
    },
    data() {
        return {
                 topics: []   
        }

    }
}
</script>

<style scoped>

</style>