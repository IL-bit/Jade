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
                    <a href="#">brand@i-tob.ru</a>
                    <p>Вопросы, предложения,<br/>дополнительная информация.</p>
                </div>
                <img src={emailSvg} alt="#" className="email"/>                
                <button onClick={() => handleClick('/feedback')}>обратная связь</button>
                <img src={bfSvg} alt="#" className="bf"/>
                <ul>
                    <li>© 2024 Сайт «Jadé»</li>
                    <li><a href="https://disk.deluxe-interactive.com/s/YjZkMesnSQtNQBZ?path=%2FJade">Правила использования сайта</a></li>
                    <li><a href="https://disk.deluxe-interactive.com/s/YjZkMesnSQtNQBZ?path=%2FJade">Политика в отношении обработки<br/>персональных данных</a></li>
                    <li><a href="https://disk.deluxe-interactive.com/s/YjZkMesnSQtNQBZ?path=%2FJade">Положение о конфидециальности</a></li>
                    <li><a href="https://disk.deluxe-interactive.com/s/YjZkMesnSQtNQBZ?path=%2FJade">Риски, связанные со здоровьем</a></li>
                    <li><a href="https://disk.deluxe-interactive.com/s/YjZkMesnSQtNQBZ?path=%2FJade">Вопросы и ответы</a></li>
                </ul>
            </div>
        </div> 
    )
}

export default Footer;