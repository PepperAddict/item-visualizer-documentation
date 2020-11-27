<template>
<div>
      <div v-bind:key="content.id" v-for="content in contents">
        <div v-bind:id="content.id">
            <h2>{{content.topic}}</h2>
            <div class="intro">
                <p v-bind:key="index" v-for="(intro, index) in content.intro.text" v-html="intro">
                    {{intro}}
                </p>
            </div>
        </div>
    </div>  
</div>

</template>

<script>
export default {
    name: "Content",
    props: ['contents']
}
</script>