import React from 'react';

import Header from '../components/Header';

class Contactos extends React.Component {
    render() {
        return(
            <React.Fragment>
                <Header />
                <div className="main__contactos">
								<h1> Formulario de contactos</h1>
                    <div className="main__contactos__c">
												<div className="container form__backg">
													<form className="form">
														<div class="row mt-5 justify-content-center">
															<div class="col-5">
																<label>Nombre *</label>
																<input type="text" class="form-control" ></input>
															</div>
															<div class="col-5">
																<label>Correo Electronico *</label>
																<input type="text" class="form-control" ></input>
															</div>
														</div>
														<div class="row mt-5 justify-content-center">
															<div class="col-5">
																<label>Teléfono *</label>
																<input type="text" class="form-control" ></input>
															</div>
															<div class="col-5">
																<label>Compañia</label>
																<input type="text" class="form-control" ></input>
															</div>
														</div>
														<div class=" mt-5 form-group col-10 offset-1">
															<label for="exampleFormControlTextarea1">Mensaje *</label>
															<textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
															<p>Todas las casillas marcadas con * son obligatorias</p>
														</div>
													</form>
													<div className="PrevButton__enviar">
													<button className="Enviar__button">Enviar</button>
													</div>
												</div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Contactos;