import React from 'react';
import face from '../assets/Grupo 144.png'
import insta from '../assets/Grupo 145.png'

class Footer extends React.Component {
    render() {
        return(
            <footer className="footer">
                 <div className="footer__left">
                     <div className="footer__left--upper">Contactos</div>
                     <div className="footer__left--lower">
                         <ul>
                             <li>
                                 <a className="footer__left-a" href="/">support@parkeando.com</a>
                             </li>
                             <li>
                                 <a className="footer__left-a" href="/">PQRS</a>
                             </li>
                             <li>
                                 <a className="footer__left-a" href="/">Términos de uso</a>
                             </li>
                             <li>
                                 <a className="footer__left-a" href="/">Póliticas de privacidad</a>
                             </li>
                         </ul>
                     </div>
                 </div>
                 <div className="footer__rigth">
                     <div className="footer__rigth--upper">
                         <img src={face} alt="Not Found"></img>
                         <img src={insta} alt="Not Found"></img>
                     </div>
                     <div className="footer__rigth--lower">2020 Parkeando</div>
                 </div>
            </footer>
           
        )
    }
}
export default Footer;