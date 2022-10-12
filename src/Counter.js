import { useState,useEffect } from "react";

//react ctuliza el stato de los componentes con sus hooks
export const Counter = () => {
    //ESTO ES UN ESTADO : 
    //counter : inicializo la variable 
    //setCounter : funcion q actualiza la variable
    //0 : valor inicial de la variable
    const [counter, setCounter] = useState(0);
    //ejercicio : capturar la variable del input con el state
    const [msj, setMsj] = useState('');

    //SE EJECUTA CUANDO ALGO CAMBIA EN EL COMPONENTE
    useEffect(() => {
        console.log(('RENDER'))
    },[])
    //[] : se ejecuta solo 1 vez, al ser creado el componente
    // [counter] : se ejecuta cuando la varable que esta dentro de las llaves cambia, es una dependencia. una funcion que vigila la variable


  return (
    <>
      <h2>Counter: {counter}</h2>
      <button onClick={() => {
        setCounter(counter + 1)
      }}>++</button>

      <p>-------------------</p>

      <input onChange={e => setMsj(e.target.value)}/>
      <button onClick={() =>{
        alert('el mensajees :' +msj)
      }}>Guardar</button>
    </>
  );
};
