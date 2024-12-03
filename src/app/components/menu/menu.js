import './menu.scss';
import goSvg from '../img/go.svg';
import gameSvg from '../img/menu_game.svg';
import aboutSvg from '../img/menu_about.svg';
import productSvg from '../img/menu_product.svg';
import journalSvg from '../img/menu_journal.svg';
import { useDispatch, useSelector } from 'react-redux';
import { togglePopup } from '../../../actions.js';
import { useNavigate } from 'react-router-dom';

const Menu = () => {
    const navigate = useNavigate();    
    const dispatch = useDispatch();
    const isOpen = useSelector((state) => state.pop_up);    

    const handleClick = (route) => {
      navigate(route);
      dispatch(togglePopup());
    };
    const gameClick = () => {
        window.location.href = process.env.REACT_APP_GAME;
    }
    return(
        <div className={`row ${isOpen ? 'show' : 'hide'}`} id="menu">
            <div className="col-sm-12">
                <div className="menu">
                    <div className="game" onClick={() => gameClick()}>
                        <img src={gameSvg} alt="#" />
                        <div className="text">
                            <h2>Игра</h2>
                            <p>Призы ждут тебя!</p>
                            <img src={goSvg} alt="#" />
                        </div>
                    </div>
                    <div className="about" onClick={() => handleClick('/about')}>
                        <img src={aboutSvg} alt="#" />
                        <div className="text">
                            <h2>О бренде</h2>
                            <p>Узнай историю Jadé</p>
                            <img src={goSvg} alt="#" />
                        </div>
                    </div>
                    <div className="product" onClick={() => handleClick('/product')}>
                        <img src={productSvg} alt="#" />
                        <div className="text">
                            <h2>Продукция</h2>
                            <p>Выбири свой вкус и стиль</p>
                            <img src={goSvg} alt="#" />
                        </div>
                    </div>
                    <div className="journal" onClick={() => handleClick('/news')}>
                        <img src={journalSvg} alt="#" />
                        <div className="text">
                            <h2>Лента</h2>
                            <p>Вдохновись миром бренда</p>
                            <img src={goSvg} alt="#" />
                        </div>
                    </div>
                    <button onClick={() => handleClick('/feedback')}>обратная связь</button>
                </div>
            </div>
        </div>            
    )
}

export default Menu;