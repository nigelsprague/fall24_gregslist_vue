import { logger } from "@/utils/Logger"
import { api } from "./AxiosService"
import { House } from "@/models/House"
import { AppState } from "@/AppState"

class HousesService{
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