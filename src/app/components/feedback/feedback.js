import React, { useEffect, useRef } from 'react';
import './feedback.scss';
import userSvg from '../img/feedback_user.svg';
import emaliSvg from '../img/feedback_email.svg';
import textSvg from '../img/feedback_text.svg';
import Header from '../header/header';

const Feedback = () => {
    const textareaRef = useRef(null);
    const maxRows = 4; 

    const handleInput = () => {
        const textarea = textareaRef.current;
        textarea.style.height = 'auto'; 
        const lineHeight = parseInt(getComputedStyle(textarea).lineHeight);
        const maxHeight = lineHeight * maxRows; 
        textarea.style.height = `${Math.min(textarea.scrollHeight, maxHeight)}px`;
    };

    useEffect(() => {
        handleInput();
    }, []);

    return(
        <div className="container-fluid">
            <Header />
            <div className="row" id="feedback">
                <div className="col-sm-12">
                    <h2>Обратная связь</h2>
                    <p>Вы можете поделиться с нами<br/>предложениями и пожеланиями</p>
                    <form action="#">
                        <div className="name">
                            <img src={userSvg} alt="#"/>
                            <input type="text" placeholder="Имя"/>
                        </div>
                        <div className="email">
                            <img src={emaliSvg} alt="#"/>
                            <input type="email" placeholder="Электронная почта"/>
                        </div>
                        <div className="text">
                            <img src={textSvg} alt="#"/>
                            <textarea
                                ref={textareaRef}
                                onInput={handleInput}
                                placeholder="Ваш текст"
                            />
                        </div>
                        <button>отправить</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Feedback;