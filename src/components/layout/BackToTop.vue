<template>
  <p class="top-arrow" @click="backTop">▲</p>
</template>

<script>
export default {
  name: "BackToTop",
  methods: {
    backTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
};
</script>

<style scoped>
.top-arrow {
  position: fixed;
  bottom: 30px;
  right: 30px;
  background: black;
  color: white;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  text-align: center;
  align-content: center;
  justify-content: center;
  justify-items: center;
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
}
</style>