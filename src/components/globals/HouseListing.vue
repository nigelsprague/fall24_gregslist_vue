<script setup>
import { AppState } from '@/AppState';
import { House } from '@/models/House';
import { housesService } from '@/services/HousesService';
import { logger } from '@/utils/Logger';
import Pop from '@/utils/Pop';
import { computed } from 'vue';

const props = defineProps({
  houseProp: { type: House, required: true }
})

const account = computed(() => AppState.account)

async function deleteHouse() {
  try {
    const wantsToDelete = await Pop.confirm(`Are you sure you want to delete this House listing?`)
    if(!wantsToDelete) { return }
    await housesService.deleteHouse(props.houseProp.id)
  }
  catch (error){
    Pop.meow(error)
    logger.error(error)
  }
}
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
    <div class="pb-3 pe-3 text-end">
          <button v-if="houseProp.creatorId == account?.id" @click="deleteHouse()" class="btn btn-danger" type="button">
            Delete House
          </button>
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