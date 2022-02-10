import './App.css';
import useFetch from './hooks/useFetch';
import { useState } from 'react';
import Tabla from './components/tabla/Tabla';

function App() {

  const url='https://api.datos.gob.mx/v1/condiciones-atmosfericas';

  const condiciones=useFetch(url);
  console.log(condiciones);



  return (
    <div className="App">

      <Tabla condiciones={condiciones} />

    </div>
  );
}

export default App;
