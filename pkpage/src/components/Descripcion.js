import React from 'react';

import vec from '../assets/vectorpersona.png';



class Descripcion extends React.Component {
    render() {
        return(
            <div className="Description">
                <div className="Description__container__left">
                    <div className="Description__container__left__upper">
                        No desperdicies tu tiempo        
                    </div>
                    <div className="Description__container__left__middle">Le encontraremos un espacio en unos segundos. <br></br>
                    Con nuestra aplicación no pasarás mucho tiempo 
                    buscando estacionamiento.</div>
                    <div className="Description__container__left__lower">
                        <button className="ios-button"></button>
                        <button className="android-button"></button>
                    </div>
                </div>
                <div className="Description__container__rigth">
                    <img src={vec} alt="not found"></img>
                </div>
            </div>
        )
    }
}
export default Descripcion;