import React from 'react'
import './card.scss';

function Card({item}) {

    const handleClick=(id)=> {
        console.log(`click con el id ${id}`)
    }
  return (
        <tr  onClick={()=>handleClick(item._id)} key={item._id} className='tabla_ciudad' >
            <td>{item._id}</td>
            <td>{item.cityid}</td>
            <td>{item.name}</td>
            <td>{item.state}</td>
            <td>{item.probabilityofprecip}</td>
            <td>{item.relativehumidity}</td>
            <td>{item.lastreporttime}</td>
            {
                (item.probabilityofprecip > 60 || item.relativehumidity >50) ?
                (<td>Lluvia</td>) :
                (<td>No llueve</td>)
            }
        </tr>
  )
}

export default Card