import './footer.scss';
import emailSvg from '../img/footer_email.svg';
import bfSvg from '../img/footer_bf.svg';

const Footer = () => {
    return (
        <div className="row" id="footer">
            <div className="col-sm-12">
                <div className="feedback">
                    <a href="#">brand@i-tob.ru</a>
                    <p>Вопросы, предложения,<br/>дополнительная информация.</p>
                </div>
                <img src={emailSvg} alt="#" className="email"/>                
                <button>обратная связь</button>
                <img src={bfSvg} alt="#" className="bf"/>
                <ul>
                    <li>© 2024 Сайт «Jadé»</li>
                    <li><a href="#">Правила использования сайта</a></li>
                    <li><a href="#">Политика в отношении обработки<br/>персональных данных</a></li>
                    <li><a href="#">Положение о конфидециальности</a></li>
                    <li><a href="#">Риски, связанные со здоровьем</a></li>
                    <li><a href="#">Вопросы и ответы</a></li>
                </ul>
            </div>
        </div> 
    )
}

export default Footer;