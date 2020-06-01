import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from '../pages/Home';
import Contactos from '../pages/Contactos';

function App() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/home" component={Home} />
                <Route exact path="/contactos" component={Contactos}/>
                <Route/>
            </Switch>
        </BrowserRouter>
    )
}

export default App;