import React from 'react';
import Header from '../components/Header'


function Burguer(props) {
    return(
        <div className="burguer">
        <Header />
        <button  type ="button" onClick={props.clickcerrar} className="burguer-button"></button>
        </div>
            
        )
    
}
export default Burguer;