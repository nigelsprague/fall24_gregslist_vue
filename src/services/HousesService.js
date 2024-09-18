import { api } from "./AxiosService"
import { House } from "@/models/House"
import { AppState } from "@/AppState"
import { logger } from "@/utils/Logger"

class HousesService{
  async deleteHouse(houseId) {
    const response = await api.delete(`api/houses/${houseId}`)
    const houseIndex = AppState.houses.findIndex(house => house.id == houseId)
    AppState.houses.splice(houseIndex, 1)
  }

  async createHouse(houseData) {
    const response = await api.post('api/houses', houseData)
    const newHouse = new House(response.data)
    AppState.houses.push(newHouse)
  }

  async getCars() {
    const response = await api.get('api/houses')
    const newHouses = response.data.map(house => new House(house))
    AppState.houses = newHouses
  }
}

export const housesService = new HousesService()