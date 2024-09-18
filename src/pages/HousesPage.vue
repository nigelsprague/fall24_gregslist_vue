<script setup>
import { AppState } from '@/AppState';
import HouseListing from '@/components/globals/HouseListing.vue';
import { housesService } from '@/services/HousesService';
import { logger } from '@/utils/Logger';
import Pop from '@/utils/Pop';
import { computed, onMounted } from 'vue';


const houses = computed(() => AppState.houses)

onMounted(() => {
  getCars()
})

async function getCars() {
  try {
    await housesService.getCars()
  }
  catch (error){
    Pop.meow(error);
    logger.error(error)
  }
}
</script>


<template>
  <div class="container">
    <section class="row">
      <h1 class="my-3">Houses</h1>
      <div v-for="house in houses" :key="house.id" class="col-md-6 mb-3">
        <HouseListing :houseProp="house" />
      </div>
    </section>
  </div>
</template>


<style lang="scss" scoped></style>