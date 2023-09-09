import React from 'react';
import { Link } from 'react-router-dom';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Tilty from 'react-tilty';


const BannerThree = () => {
    return (
            <div className="banner banner-style-3">
            <div className="container">
                <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="banner-content">
                        <br></br>
                        <AnimationOnScroll  animateIn="slideInUp" duration={1} animateOnce={true} delay={200}>
                            <h1 className="title">PRIME-MOTORS</h1>
                        </AnimationOnScroll>
                        <AnimationOnScroll  animateIn="slideInUp" duration={1} animateOnce={true} delay={200}>
                        <div className="btn-group">
                            <a href="#" className="axil-btn btn-fill-primary btn-large">Mira nuestros ultimos veihiculos</a>
                            <Link to={process.env.PUBLIC_URL + "/about-us"} className="about-btn">Conoce mas de nosotros</Link>
                        </div>
                        </AnimationOnScroll>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="banner-thumbnail">
                    <div className="large-thumb">
                        <AnimationOnScroll  animateIn="slideInUp" duration={1} animateOnce={true} delay={200}>
                            <Tilty perspective={2000} reset={false}>
                                <img src={process.env.PUBLIC_URL + "/images/banner/banner-thumb-6.png"} alt="Shape" />
                            </Tilty>
                        </AnimationOnScroll>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <ul className="list-unstyled shape-group-20">
                <li className="shape shape-1">
                <img src={process.env.PUBLIC_URL + "/images/others/bubble-32.png"} alt="Bubble" />
                </li>
                <li className="shape shape-2">
                <img src={process.env.PUBLIC_URL + "/images/others/bubble-33.png"} alt="Bubble" />
                </li>
                <li className="shape shape-4">
                <img src={process.env.PUBLIC_URL + "/images/others/bubble-14.png"} alt="Bubble" />
                </li>
                <li className="shape shape-5">
                <img src={process.env.PUBLIC_URL + "/images/others/bubble-4.png"} alt="Bubble" />
                </li>
                <li className="shape shape-6">
                <img src={process.env.PUBLIC_URL + "/images/others/bubble-30.png"} alt="Bubble" />
                </li>
                <li className="shape shape-7">
                <img src={process.env.PUBLIC_URL + "/images/others/bubble-31.png"} alt="Bubble" />
                </li>
                <li className="shape shape-8 marque-images" />
            </ul>
        </div>

    )
}

export default BannerThree;
