import './header.scss';
import { useDispatch, useSelector } from 'react-redux';
import { togglePopup } from '../../../actions.js';
import Menu from '../menu/menu.js';
import logoSvg from '../img/logo.svg';

const Header = () => {
    const isOpen = useSelector((state) => state.pop_up);
    const dispatch = useDispatch();

    const handleToggle = () => {
        dispatch(togglePopup());
    };
    return (
        <>
            <div className="row" id="header">
                <div className="col-sm-12">
                    <img src={logoSvg} alt="Jade" />
                    <button className={`burger ${isOpen ? 'bg2' : 'bg1'}`} onClick={handleToggle}></button>
                </div>
            </div>
            <Menu />        
        </>
    )
}

export default Header;