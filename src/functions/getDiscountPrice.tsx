const getDiscountPrice = (price: number, percent?: number): number => {
   if(!percent) return price

   return parseFloat((price - ((price / 100) * percent)).toFixed(2))
}

export default getDiscountPrice