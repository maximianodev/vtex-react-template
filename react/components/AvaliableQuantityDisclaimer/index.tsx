import React from 'react'
import { useProduct } from 'vtex.product-context'

export default function AvaliableQuantityDisclaimer() {
  const { selectedItem } = useProduct()
  const quantity = selectedItem?.sellers[0].commertialOffer?.AvailableQuantity

  if (!quantity) return null
  if (quantity === 0) return <span>Out of stock</span>
  if (quantity > 0 && quantity < 10) return <span>Last units avaliable</span>

  return <span>Most avaliable</span>
}
