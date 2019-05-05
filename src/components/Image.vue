<template>
  <div class="image2">
    <img :src="url" />
  </div>
</template>

<script lang="ts">
export default {
    name: 'ImageComponent',
    props: {
      url: String,
    } 
}
</script>

<style lang="scss">

.image2 img {
  width: 80%;
  max-width: 500px;
  background-color: red;
  margin-top: 2rem;
}

</style>