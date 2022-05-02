import React from 'react'

type Props = {
  name: string
  quantityMinicart?: number
}

function Greeting({ name, quantityMinicart }: Props) {
  return (
    <div>
      <h2>Hey, {name}</h2>
      {quantityMinicart && (
        <span>You have {quantityMinicart} in your cart.</span>
      )}
    </div>
  )
}

export default Greeting
