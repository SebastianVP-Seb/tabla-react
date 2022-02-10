import React from 'react'
import './tabla.scss';
import Loader from '../loader/Loader';
import Card from '../card/Card';

function Tabla({condiciones}) {
    const { datos, loading}=condiciones;
    let totalR=0;

  return (
    <div classNmae='tabla'>
        <table>
            <thead className='tabla_titulos'>
                <tr>
                    <th>_id</th>
                    <th>cityid</th>
                    <th>name</th>
                    <th>state</th>
                    <th>probabilityOfPrecip</th>
                    <th>relativeHumidity</th>
                    <th>lastReportTime</th>
                    <th>¿Lluvia?</th>
                </tr>
            </thead>
            <tbody>
        {
            loading || !datos ?
                <Loader /> : 
                datos.results.map((item)=>{
                    totalR++;
                    return (
                        <Card item={item} />
                    )
                })
        }
            </tbody>
        </table>
        <p className='tabla_parrafo'>Total de registros: {totalR}</p>
    </div>
  )
}

export default Tabla