import './product.scss';
import Header from '../header/header';
import Footer from '../footer/footer';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Product = () => {
    const navigate = useNavigate();
    const handleClick = (route) => {
        navigate(route);
    };
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return(
        <div className="container-fluid">
            <Header />
            <div className="row" id="product">
                <div className="col-sm-12">
                    <p>Открой для себя<br/>новые вкусы</p>
                    <div className="rouge">
                        <h2>la rouge</h2>
                        <p>Капсула с арбузным вкусом</p>
                    </div>
                    <div className="clipse">
                        <h2>les clipse</h2>
                        <p>Капсула с ягодным вкусом</p>
                    </div>
                    <div className="rose">
                        <h2>la rose</h2>
                        <p>Французский стиль</p>
                    </div>
                    <div className="bleue">
                        <h2>la bleue</h2>
                        <p>Французский стиль</p>
                    </div>
                    <button onClick={() => handleClick('/about')}>узнать jadé ближе</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Product;