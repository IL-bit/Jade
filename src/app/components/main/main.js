import './main.scss';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import downPng from '../img/main_down.png';
import sigSvg from '../img/main_sigars.svg';
import Header from '../header/header';
import Footer from '../footer/footer';

const Main = () => {
    const navigate = useNavigate();

    const handleMoreClick = () => {
        window.scrollTo({ top: window.scrollY + 80 * window.innerHeight / 100, behavior: 'smooth' });
    };
    
    const handleClick = (route) => {
        navigate(route);
    };
    const gameClick = () => {
        window.location.href = process.env.REACT_APP_GAME;
    }
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return(
        <div className="container-fluid">
            <Header />
            <div className="row" id="main">
                <div className="col-sm-12">
                    <section id="first">
                        <div className="slogan">
                            <h1>Играй,</h1>
                            <h3>выигрывай</h3>
                            <h2>призы</h2>
                        </div>
                        <button className="begin" onClick={() => gameClick()}>начать</button>
                        <button className="down" onClick={handleMoreClick}><img src={downPng} alt="#" /></button>
                    </section>
                    <section id="second">
                        <div className="txt">
                            <h3>Арома</h3>
                            <h2>Новинки</h2>
                            <p>Открой для себя новые вкусы</p>
                        </div>
                        <img src={sigSvg} alt="#" />
                        <button onClick={() => handleClick('/product')}>перейти</button>
                    </section>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Main;