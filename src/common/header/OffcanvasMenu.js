import React from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas'
import { FaInstagram, FaWhatsapp, FaPhone } from "react-icons/fa";


const OffcanvasMenu = ({offcanvasShow, offcanvasHide}) => {
    return (
        <Offcanvas show={offcanvasShow} onHide={offcanvasHide} placement="end" className="header-offcanvasmenu">
            <Offcanvas.Header closeButton></Offcanvas.Header>
            <Offcanvas.Body>
                <div className="row ">
                    <div className="col-md-7 col-md-6">
                        <div className="contact-info-wrap">
                            <div className="contact-inner   ">
                                <address className="address">
                                    <span className="title">Donde puedes encontrarnos:</span>
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d495.7888789502134!2d-75.56987880615719!3d6.222656154357676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sco!4v1694219437031!5m2!1sen!2sco" width="200" height="200" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
                                    <p>Centro Automotriz Local 1. Prime Motors. Medellin, Colombia</p> 
                                </address>
                                <address className="address">
                                    <span className="title">¡Convierte tu sueño de tener el auto o moto de tus sueños en una realidad! Nuestras líneas de contacto son el camino directo hacia la asesoría experta que necesitas para tomar la mejor decisión en tu próxima compra de vehículo. ¡No esperes más, estamos aquí para ayudarte a rodar con estilo! 🚗🏍️✨</span>
                                    <a href="📲 3146919952" className="tel"><FaPhone /> 📲 3146919952</a>
                                </address>
                            </div>
                            <div className="contact-inner">
                                <h5 className="title">Encuentranos en:</h5>
                                <div className="contact-social-share">
                                    <ul className="social-share list-unstyled">
                                        <li>
                                            <a href="https://www.instagram.com/primemotorscompraventa/"><FaInstagram /></a>
                                        </li>     
                                        <li>
                                            <a href="https://api.whatsapp.com/send/?phone=573146919952&text&type=phone_number&app_absent=0"><FaWhatsapp /></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Offcanvas.Body>
        </Offcanvas>
    )
}

export default OffcanvasMenu;
