import './discl.scss';
import { useNavigate } from 'react-router-dom';
const Discl = () => {    
    const navigate = useNavigate();

    const handleClick = (route) => {
      navigate(route);
    };
    return (
        <div className="container-fluid">
            <div className="row" id="discl">
                <div className="col-sm-12">
                    <h2>Доступ на веб-сайт разрешен только гражданам РФ старше 18 лет, являющимся потребителями табака.</h2>
                    <p>Я подтверждаю, что мне есть 18 лет и я являюсь потребителем табака.</p>
                    <div className="buttons">
                        <button onClick={() => handleClick('/')}>нет</button>
                        <button onClick={() => handleClick('/main')}>да</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Discl;