import React from 'react';

import Header from '../components/Header';
import Descripcion from '../components/Descripcion';
import Caracteristicas from '../components/Carateristicas';
import Cara2 from '../components/Cara2';
import Footer from '../components/Footer';
import Opiniones from '../components/Opiniones';



class Home extends React.Component {
    render() {
        return (
           <React.Fragment>
               <Header />
               <Descripcion />
               <Caracteristicas />
               <Cara2 />
               <Opiniones />
               <Footer />
            </React.Fragment>
        )
    }
}

export default Home;