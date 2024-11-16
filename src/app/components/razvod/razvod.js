import './razvod.scss';
import { useNavigate } from 'react-router-dom';

const Razvod = () => {
    const navigate = useNavigate();

    const handleClick = (route) => {
      navigate(route);
    };
    return(
        <div className="container-fluid">
            <div className="row" id="razvod">
                <div className="col-sm-12">
                    <div className="slogan">
                        <h1>Играй,</h1>
                        <h3>выигрывай</h3>
                        <h2>призы</h2>
                    </div>
                    <button className="tg">Перейти в Telegramm-Bot</button>
                    <button className="site" onClick={() => handleClick('/discl')}>перейти на сайт</button>
                </div>
            </div>
        </div>
    )
}

export default Razvod;