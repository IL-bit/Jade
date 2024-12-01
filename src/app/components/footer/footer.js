import './footer.scss';
import { useNavigate } from 'react-router-dom';
import emailSvg from '../img/footer_email.svg';
import bfSvg from '../img/footer_bf.svg';

const Footer = () => {
    const navigate = useNavigate();

    const handleClick = (route) => {
      navigate(route);
    };
    return (
        <div className="row" id="footer">
            <div className="col-sm-12">
                <div className="feedback">
                    <a href="mailto:brand@i-tob.ru">brand@i-tob.ru</a>
                    <p>Вопросы, предложения,<br/>дополнительная информация.</p>
                </div>
                <img src={emailSvg} alt="#" className="email"/>                
                <button onClick={() => handleClick('/feedback')}>обратная связь</button>
                <img src={bfSvg} alt="#" className="bf"/>
                <ul>
                    <li>© 2024 Сайт «Jadé»</li>
                    <li><a href="https://drive.google.com/file/d/1F20ykiO63hCRgtLrnCOaypjyxAfm5f6V/view?usp=drive_link">Правила использования сайта</a></li>
                    <li><a href="https://drive.google.com/file/d/1hIxnWV_0M52duCKVe1aJbxwVkemOQw1w/view?usp=drive_link">Политика в отношении обработки<br/>персональных данных</a></li>
                    <li><a href="https://drive.google.com/file/d/1eJgtaQivi629qw9iy3902goacH9_M46M/view?usp=drive_link">Положение о конфиденциальности</a></li>
                    <li><a href="https://drive.google.com/file/d/1pvEvf6az5VYSScmuU4PvlxgS9K3tO1LP/view?usp=drive_link">Риски, связанные со здоровьем</a></li>
                    <li><a href="https://drive.google.com/file/d/1ZuCf1AIz44OwVWBQj9sUZdwhPTFsc1fF/view?usp=drive_link">Вопросы и ответы</a></li>
                </ul>
            </div>
        </div> 
    )
}

export default Footer;