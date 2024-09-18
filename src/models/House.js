export class House {
  constructor(data) {
    this.id = data.id
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.levels = data.levels
    this.imgUrl = data.imgUrl
    this.year = data.year
    this.price = data.price
    this.description = data.description
    this.creatorId = data.creatorId
    this.createdAt = data.createdAt
    this.updatedAt = data.updatedAt
    this.creatorName = data.creator.name
    this.creatorPicture = data.creator.picture
    
  }

  get priceAsCurrency() {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(this.price)
  }
}