<template>
<div>
        <TOC v-bind:toc="content"/>
    <Content v-bind:contents="content"/>
</div>

</template>

<script>
import TOC from './layout/TOC'
import doc from '../assets/documentation.js'
import Content from './layout/Content'

export default {
    name: "How",
    components: {
        TOC, Content
    },
    data() {
        return {
                 content: []   
        }
    },
    created() {
        this.content = doc
    }
}
</script>

<style scoped>

</style>