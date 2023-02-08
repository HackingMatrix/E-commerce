import React from 'react'

const ItemListContainer = ({greeting}) => {
  return (
    <>
    <h1 class="position-absolute top-50 start-50 translate-middle" >{greeting}</h1>
    </>
  )
}

export default ItemListContainer