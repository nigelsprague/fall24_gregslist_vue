<script setup>
import { House } from '@/models/House';


const props = defineProps({
  houseProp: { type: House, required: true }
})
</script>


<template>
  <div class="card">
  <img :src="houseProp.imgUrl" class="card-img-top img-fluid house-img" :alt="houseProp.description">
  <div class="card-body">
    <h2>{{ houseProp.priceAsCurrency }}</h2>
    <p class="fs-5 my-1">Built in <b>{{ houseProp.year }}</b></p>
    <p class="fs-4"><b>{{ houseProp.bedrooms }}</b> bdrs | <b>{{ houseProp.bathrooms }}</b> bths | <b>{{ houseProp.levels }}</b> lvls</p>
    <p class="card-text fs-5">{{ houseProp.description }}</p>
  </div>
</div>
</template>


<style lang="scss" scoped>
.house-img {
  height: 30dvh;
  width: 100%;
  object-fit: cover;
  object-position: center;
}
</style>