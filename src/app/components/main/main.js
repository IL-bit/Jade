import './main.scss';
import downPng from '../img/main_down.png';
import sigSvg from '../img/main_sigars.svg';
import Header from '../header/header';
import Footer from '../footer/footer';

const Main = () => {
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
                        <button className="begin">начать</button>
                        <button className="down"><img src={downPng} alt="#" /></button>
                    </section>
                    <section id="second">
                        <div className="txt">
                            <h3>Арома</h3>
                            <h2>Новинки</h2>
                            <p>Открой для себя новые вкусы</p>
                        </div>
                        <img src={sigSvg} alt="#" />
                        <button>перейти</button>
                    </section>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Main;