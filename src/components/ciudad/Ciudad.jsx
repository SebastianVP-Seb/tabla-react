import React from 'react'

function Ciudad(item) {
  return (
    <div>
        <p>Estado: {item.state}</p>
        <p>Nombre: {item.name}</p>
    </div>
  )
}

export default Ciudad