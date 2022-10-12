//Importar como archivo simple 
import './task.css'
export function TaskCard({ready}){
    
    // como los estilos son objetos y se pueden guardas en variables, se puede hacer el ejercicio de 
    // condicional
    // ej: si pasa esto poner este estilo , si no este otro
    
    // no hay clases sino className

    //los nombres de las clases del css se envian como strings al jsx
    //html style=""    backgroundColor fontSize 
    //html class="" xxx

    // Operador Ternario
    // ..............? xxxxxx : yyyyyy
    return <div style={{background:'#000'}}>
        
        <h1 className='title'>Mi primera tarea</h1>

        <p>{ready ? 'realizada' : 'pendiente'}</p>

        <p style={ready ? {background:'green'} : {background:'red'}}></p>

        <p className={ready ? 'bg-green' : 'bg-red'}></p>
    </div>
}

