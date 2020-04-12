import React,{useState} from 'react';
import shortid from 'shortid';
import Error from './Error';
import PropTypes from 'prop-types';


const Formulario = ({setGasto,setCrearGasto}) => {

    const [nombre,setNombre] = useState('');
    const [cantidad, setCantidad] = useState(0);
    const [error,setError] = useState(false);

    const guardarNombre = (e) => {
        setNombre(e.target.value);
    } 

    const guardarCantidad = (e) => {
        setCantidad(parseInt(e.target.value));
    }

    const agregarGasto = (e) => {
        e.preventDefault();

        //validar
        if(cantidad < 1 || isNaN(cantidad) || nombre.trim() ==='' ){

            setError(true);
            return;
        }
        
        setError(false);
        //construir el gasto
        const gasto = {
            nombre,
            cantidad,
            id:shortid.generate()
        }

        
        
        //pasar el gasto al componente principal
        setGasto(gasto);
        setCrearGasto(true);
        //resetear el form
        setNombre('');
        setCantidad(0);
    }

    return(

        <form onSubmit={agregarGasto}>
            <h2>Agrega tus gastos aquí</h2>

            {error ? <Error mensaje="Ambos campos son obligatorios o presupuesto incorrecto" /> : null}
            <div className="campo">
                <label>Nombre gasto</label>
                <input type="text" className="u-full-width" placeholder='Ej. Transporte' value={nombre} onChange={guardarNombre} />
            </div>

            <div className="campo">
                <label>Cantidad gasto</label>
                <input type="number" className="u-full-width" placeholder='Ej. 300' value={cantidad} onChange={guardarCantidad}  />
            </div>
             
             <input type="submit" value="Agregar gasto" className='button-primary u-full-width' />
        </form>

    );


}

Formulario.propTypes = {
    setGasto:PropTypes.func.isRequired,
    setCrearGasto:PropTypes.func.isRequired
}

export default Formulario;