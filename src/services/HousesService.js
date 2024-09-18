import { logger } from "@/utils/Logger"
import { api } from "./AxiosService"
import { House } from "@/models/House"
import { AppState } from "@/AppState"

class HousesService{
  async getCars() {
    const response = await api.get('api/houses')
    logger.log(response.data)
    const newHouses = response.data.map(house => new House(house))
    AppState.houses = newHouses
  }

}

export const housesService = new HousesService()