import './about.scss';
import Header from '../header/header';
import Footer from '../footer/footer';
import React, { useEffect } from 'react';
const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return(
        <div className="container-fluid">
            <Header />
            <div className="row" id="about">
                <div className="col-sm-12">
                    <h3>Jadé вдохновляет женщин<br/>проявлять свое истинное Я</h3>
                    <h1>Вдохновлен<br/>французским<br/>стилем</h1>
                    <p className="first">Бренд, вдохновленный французским<br/>стилем, понимает, какими женщины<br/>являются сейчас и какими они хотят<br/>быть завтра. Jadé позволяет мне чувствовать себя увереннее, я могу<br/>самостоятельно решать как вести<br/>себя и как выглядеть.</p>
                    <div className="img"></div>
                    <h2>Будь собой.<br/>Будь настоящей.</h2>
                    <p className="second">Мы верим в то, что ты имеешь<br/>право быть самой собой и<br/>принимаем тебя такой, какая ты<br/>есть. Мы помогаем женщинам жить<br/>той жизнью, какой они хотят, а не<br/>следовать навязанным<br/>стереотипам патриархального<br/>общества.</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About;