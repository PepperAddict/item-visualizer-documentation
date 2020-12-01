<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>


<style scoped>
h1 {
  color:#0A253A;
  font-family: 'Poppins', sans-serif;
  font-size:52px;
  line-height:52px;
}
h2 {
  text-transform: none;
  color: #0A253A;
  text-align:left;
  font-family: 'Open Sans', sans-serif;
}
h3 {
  font-size: 1rem;
  text-transform: uppercase;
  text-align: left;
  color:#5A88AA;
}

.home-container {
  display: grid;
    grid-template-columns: 1fr 560px;
    grid-gap: 50px;
    padding: 100px 0;
    box-sizing: border-box;
}
button {
  background: black;
  color: white;
}
.note {
 line-height:1.2;
 font-size:12px;
 color:#0A253A;
 font-family:'Open Sans', sans-serif;
}

</style>
