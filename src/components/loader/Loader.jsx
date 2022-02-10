import React from 'react'
import './loader.scss';

function Loader() {
  return (
      <div className='loader' >
        <div className="spinner"></div>
        <div>Cargando datos...</div>
      </div>
  )
}

export default Loader