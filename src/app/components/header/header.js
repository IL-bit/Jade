import './header.scss';
import logoSvg from '../img/logo.svg';

const Header = () => {
    return (
        <div className="row" id="header">
            <div className="col-sm-12">
                <img src={logoSvg} alt="Jade" />
                <button className="burger"></button>
            </div>
        </div>
    )
}

export default Header;