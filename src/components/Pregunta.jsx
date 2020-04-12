import React,{Fragment,useState} from 'react';
import Error from './Error';
import PropTypes from 'prop-types';


const Pregunta = ({setPresupuesto,setRestante,setMostrarPregunta}) => {

    const [cantidad,setCantidad] = useState(0);
    const [error,setError] = useState(false);

    const defenirPresupuesto = (e) => {
        setCantidad(parseInt(e.target.value));
    }

    const agregarPresupuesto = (e) => {
        e.preventDefault();

        //validar
        if(cantidad < 1 || isNaN(cantidad)){
            setError(true);
            return;
        }
        setError(false);
        setPresupuesto(cantidad);
        setRestante(cantidad);
        setMostrarPregunta(false);
    }



    return(

        <Fragment>
            <h2>Coloca tu presupuesto</h2>
            {   error ? <Error mensaje='El presupuesto es Incorrecto' /> : null   }

            <form onSubmit={agregarPresupuesto}>
                <input type="number" className="u-full-width" placeholder="Coloca tu presupuesto" onChange={defenirPresupuesto} />
                <input type="submit" value="Definir presupuesto" className="u-full-width button-primary"/>
            </form>

        </Fragment>
    );

}

Pregunta.propTypes = {
    setPresupuesto :PropTypes.func.isRequired,
    setRestante:PropTypes.func.isRequired,
    setMostrarPregunta:PropTypes.func.isRequired
}

export default Pregunta;