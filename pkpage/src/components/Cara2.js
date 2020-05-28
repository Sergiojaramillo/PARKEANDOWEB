import React from 'react';

import fil from '../assets/Grupo 82.png';
import fil2 from '../assets/Grupo 139.png';
import fil3 from '../assets/Grupo 141.png';
import fil4 from '../assets/Grupo 143.png';
import main from '../assets/vector.png';

class Cara2 extends React.Component {
    render(){
        return(
        <div className="Cara2__main">
            
            <div className="Carac2">
            <h1>Caracteristicas</h1>
                <div className="caracteristicas2">  
                    <div className="caracteristicas2__left">
                        <div className="caracteristicas2__left--container">
                            <div className="cara2-container">
                                <img src={fil} alt="Not found"></img>
                                <h3>Filtro</h3>
                            </div>
                            <article>Usando la opcion de filtro buscaremos el lugar más adecuado para ti.</article>
                        </div>
                        <div className="caracteristicas2__left--container">
                            <div className="cara2-container">
                                <img src={fil2} alt="Not found"></img>
                                <h3>Historial</h3>
                            </div>
                            <article>Acceso completo a todas tus sesiones de estacionamiento.</article>
                        </div>
                        <div className="caracteristicas2__left--container">
                            <div className="cara2-container">
                                <img src={fil3} alt="Not found"></img>
                                <h3>Navega</h3>
                            </div>
                            <article>Te guiaremos desde tu ubicación hasta el parqueadero escogido.</article>
                        </div>
                        <div className="caracteristicas2__left--container">
                            <div className="cara2-container">
                                <img src={fil4} alt="Not found"></img>
                                <h3>Soporte</h3>
                            </div>
                            <article>Te ayudamos a resolver tus dudas en cualquier momento.</article>
                        </div>
                    </div>
                    <div className="caracteristicas2__rigth">
                        <img src={main} alt="Not found"></img>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
export default Cara2;