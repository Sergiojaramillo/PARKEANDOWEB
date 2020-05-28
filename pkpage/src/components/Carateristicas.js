import React from 'react';
import grupo from '../assets/Grupo 77.png'
import grupo1 from '../assets/Grupo 81.png'
import grupo2 from '../assets/Trazado 68.png'


class Caracteristicas extends React.Component {
    render() {
        return(
            <section className="caracteristicas">
                <div className="caracteristicas__container">
                    <img src={grupo} alt="Not found"></img>
                    <h3>Busqueda</h3>
                    <p>Elige tu destino y econtrarenos <br></br> un estacionamiento <br></br>cercano a este</p>
                </div>
                <div className="caracteristicas__container">
                    <img src={grupo1} alt="Not found"></img>
                    <h3>Pagos</h3>
                    <p>Realice sus pagos en pocos <br></br>pasos con cualquier sistema <br></br>de pago.</p>
                </div>
                <div className="caracteristicas__container">
                    <img src={grupo2} alt="Not found"></img>
                    <h3>Responsive</h3>
                    <p>Todos sus dispositivos <br></br>conectados.</p>
                </div>
            </section>
        )
    }
}
export default Caracteristicas;