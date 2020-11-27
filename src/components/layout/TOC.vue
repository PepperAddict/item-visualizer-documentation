<template>
    <div>
        <h1>Item visualizer documentation</h1>
        <h2>A guide to using this Monday View app to 
            help explain your item better.
        </h2>

        <p>
            Explore by Topic
        </p>



        <div v-bind:key="i.id" v-for="i in toc">
            <ul>
            <a v-bind:href="'#' + i.id">{{i.topic}}</a>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "TOC",
    props: ["toc"]
}
</script>
