import React from 'react';
import grupo1 from '../assets/Enmascarar grupo 1.png';
import grupo2 from '../assets/Enmascarar grupo 2.png';
import grupo3 from '../assets/Enmascarar grupo 3.png';
import rig from '../assets/Grupo 143.png';


class Opiniones extends React.Component {
    render() {
        return(
        <div className="main__O">    
            <div className="Opiniones">
                <div className="Opiniones__upper">Opiniones</div>    
                <div className="Opiniones__middle">
                    <div className="Opiniones__middle__container">
                        <img src={grupo1} alt="Not Found"></img>
                        <div className="Opiniones__middle__container__m">
                            <h3>Santiago Mejia</h3>
                            <img src={rig} alt="Not Found"></img>
                        </div>
                        <p>La aplicación es muy buena, me ahorra tiempo. Se las recomiendo.</p>
                    </div>        
                    <div className="Opiniones__middle__container">
                        <img src={grupo2} alt="Not Found"></img>
                        <div className="Opiniones__middle__container__m">
                            <h3>Manuel Garcia</h3>
                            <img src={rig} alt="Not Found"></img>
                        </div>
                        <p>Me encanta esta aplicación, la funcionalidad y el look. 1Son una de las mejores aplicaciones! Que bueno haberlos encontrado.</p>
                    </div>        
                    <div className="Opiniones__middle__container">
                        <img src={grupo3} alt="Not Found"></img>
                        <div className="Opiniones__middle__container__m">
                            <h3>Estefanía Castro</h3>
                            <img src={rig} alt="Not Found"></img>
                        </div>
                        <p>Llevo usando Parkeando unos 5 días y es genial. Gracias.</p>
                    </div>        
                </div>    
                <div className="Opiniones__lower">
                    <h1>Descargala</h1>
                    <div className="Opiniones__lower__buttons">
                        <button className="ios-button"></button>
                        <button className="android-button"></button>
                    </div>
                    <div className="Opiniones__lower__2">
                        <input placeholder="     Correo Eléctronico"></input>
                        <button>Mantenme informado</button>
                    </div>
                </div>    
            </div>
        </div>     
        )
    }
}
export default Opiniones;