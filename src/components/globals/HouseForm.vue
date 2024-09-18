<script setup>
import { housesService } from '@/services/HousesService';
import { logger } from '@/utils/Logger';
import Pop from '@/utils/Pop';
import { ref } from 'vue';

const currentYear = new Date().getFullYear()

const editableHouseData = ref({
  bedrooms: 1,
  bathrooms: 0,
  levels: 1,
  imgUrl: '',
  year: currentYear,
  price: 0,
  description: ''
})

async function createHouse() {
  try {
    const houseData = editableHouseData.value
    await housesService.createHouse(houseData)
    editableHouseData.value = {
      bedrooms: 1,
      bathrooms: 0,
      levels: 1,
      imgUrl: '',
      year: currentYear,
      price: 0,
      description: ''
    }
  }
  catch (error){
    Pop.meow(error)
    logger.error(error)
  }
}
</script>


<template>
  <form @submit.prevent="createHouse()">
    <section class="row">
      <div class="col mb-3">
        <label class="form-label" for="bedrooms">Bedrooms</label>
        <input v-model="editableHouseData.bedrooms" class="form-control" name="bedrooms" type="number" required min="1" max="150">
      </div>
      <div class="col mb-3">
        <label class="form-label" for="bathrooms">Bathrooms</label>
        <input v-model="editableHouseData.bathrooms" class="form-control" name="bathrooms" type="number" required min="0" step=".5" max="150">
      </div>
      <div class="col mb-3">
        <label class="form-label" for="levels">Levels</label>
        <input v-model="editableHouseData.levels" class="form-control" name="levels" type="number" required min="1" max="150">
      </div>
    </section>
    <section class="row">
      <div class="col mb-3">
        <label class="form-label" for="imgUrl">Image</label>
        <input v-model="editableHouseData.imgUrl" class="form-control" name="imgUrl" type="url" required maxlength="500">
      </div>
      <div class="col mb-3">
        <label class="form-label" for="year">Year Built</label>
        <input v-model="editableHouseData.year" class="form-control" name="year" type="number" required min="1700" :max="currentYear">
      </div>
      <div class="col mb-3">
        <label class="form-label" for="price">Price</label>
        <input v-model="editableHouseData.price" class="form-control" name="price" type="number" required min="0">
      </div>
    </section>
    <section class="row">
      <div class="col mb-3">
        <label class="form-label" for="description">Description</label>
        <textarea v-model="editableHouseData.description" class="form-control" name="description" id="description"></textarea>
        <button class="col btn btn-outline-dark bg-success my-3 justify-self-end" type="submit">Submit</button>
      </div>
    </section>
    </form>
  </template>


<style lang="scss" scoped>

</style>