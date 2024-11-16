import './menu.scss';
import goSvg from '../img/go.svg';
import gameSvg from '../img/menu_game.svg';
import aboutSvg from '../img/menu_about.svg';
import productSvg from '../img/menu_product.svg';
import journalSvg from '../img/menu_journal.svg';

const Menu = () => {
    return(
        <div className="container-fluid">
            <div className="row" id="menu">
                <div className="col-sm-12">
                    <div className="menu">
                        <div className="game">
                            <img src={gameSvg} alt="#" />
                            <div className="text">
                                <h2>Игра</h2>
                                <p>Призы ждут тебя!</p>
                                <img src={goSvg} alt="#" />
                            </div>
                        </div>
                        <div className="about">
                            <img src={aboutSvg} alt="#" />
                            <div className="text">
                                <h2>О бренде</h2>
                                <p>Узнай историю Jadé</p>
                                <img src={goSvg} alt="#" />
                            </div>
                        </div>
                        <div className="product">
                            <img src={productSvg} alt="#" />
                            <div className="text">
                                <h2>Продукция</h2>
                                <p>Выбири свой вкус и стиль</p>
                                <img src={goSvg} alt="#" />
                            </div>
                        </div>
                        <div className="journal">
                            <img src={journalSvg} alt="#" />
                            <div className="text">
                                <h2>Лента</h2>
                                <p>Вдохновись миром бренда</p>
                                <img src={goSvg} alt="#" />
                            </div>
                        </div>
                        <button>обратная связь</button>
                    </div>
                </div>
            </div>            
        </div>
    )
}

export default Menu;