import './news.scss';
import Header from '../header/header';
import Footer from '../footer/footer';
import backSvg from '../img/news_back.svg';
import nextSvg from '../img/news_next.svg';
import { useEffect } from 'react';
import { changePage, nextPage, prevPage } from '../../../actions.js';
import { FETCHDATAREQUEST } from '../../../middleware.js';
import { useDispatch, useSelector } from 'react-redux';

const News = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    const offset = state.value;

    const handleButtonClick = (newValue) => {
        dispatch(changePage(newValue));
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    const handleButtonBack = () => {
        dispatch(prevPage());
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    const handleButtonNext = () => {
        dispatch(nextPage());
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    useEffect(() => {
        if (!state[`dataList_${offset}`] || state[`dataList_${offset}`].length === 0) {
            dispatch(FETCHDATAREQUEST(offset)); 
        } 
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [offset, state, dispatch]);

    return(
        <div className="container-fluid">
            <Header />
            <div className="row" id="news">
                <div className="col-sm-12">
                    <div className="bg"></div>
                        <div className="card_1">
                            <p className="data">{state[`dataList_${offset}`]?.[0]?.date}</p>
                            <h3>{state[`dataList_${offset}`]?.[0]?.header1}</h3>
                            <img src={`data:image/png;base64, ${state[`dataList_${offset}`]?.[0]?.img}`} alt="Перезагрузите страницу" />
                            <p className="text1">{state[`dataList_${offset}`]?.[0]?.text1}</p>
                            <h2>{state[`dataList_${offset}`]?.[0]?.header2}</h2>
                            <p className="text2">{state[`dataList_${offset}`]?.[0]?.text2}</p>
                        </div>
                        <div className="card_2">
                            <p className="data">{state[`dataList_${offset}`]?.[1]?.date}</p>
                            <h3>{state[`dataList_${offset}`]?.[1]?.header1}</h3>
                            <img src={`data:image/png;base64, ${state[`dataList_${offset}`]?.[1]?.img}`} alt="Перезагрузите страницу" />
                            <h2>{state[`dataList_${offset}`]?.[1]?.header2}</h2>
                            <p className="text1">{state[`dataList_${offset}`]?.[1]?.text1}</p>
                            <p className="text2">{state[`dataList_${offset}`]?.[1]?.text2}</p>
                        </div>
                        <div className="card_3">
                            <p className="data">{state[`dataList_${offset}`]?.[2]?.date}</p>
                            <h3>{state[`dataList_${offset}`]?.[2]?.header1}</h3>
                            <img src={`data:image/png;base64, ${state[`dataList_${offset}`]?.[2]?.img}`} alt="Перезагрузите страницу" />
                            <p className="text1">{state[`dataList_${offset}`]?.[2]?.text1}</p>
                            <h2>{state[`dataList_${offset}`]?.[2]?.header2}</h2>
                            <p className="text2">{state[`dataList_${offset}`]?.[2]?.text2}</p>
                        </div>                     
                    <div className="buttons">
                        <button onClick={() => handleButtonBack()} className="back"><img src={backSvg} alt="#" /></button>
                        {Array.from({ length: 5 }, (_, index) => (
                            <button 
                                key={index + 1} 
                                className={state.value === index + 1 ? 'selected' : ''} 
                                onClick={() => handleButtonClick(index + 1)}
                            >
                                {index + 1}
                            </button>
                        ))}
                        <button onClick={() => handleButtonNext()} className="next"><img src={nextSvg} alt="#" /></button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
} 

export default News;