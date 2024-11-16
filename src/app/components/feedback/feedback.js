import React, { useEffect, useRef, useState } from 'react';
import './feedback.scss';
import userSvg from '../img/feedback_user.svg';
import emaliSvg from '../img/feedback_email.svg';
import textSvg from '../img/feedback_text.svg';
import Header from '../header/header';

const Feedback = () => {
    const textareaRef = useRef(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
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
    const isFormValid = name && email && message;

    return(
        <div className="container-fluid">
            <Header />
            <div className="row" id="feedback">
                <div className="col-sm-12">
                    <h2>Обратная связь</h2>
                    <p>Вы можете поделиться с нами<br/>предложениями и пожеланиями</p>
                    <form action="#">
                        <div className="name">
                            <img src={userSvg} alt="#" style={{ opacity: name ? 1 : 0.4 }}/>
                            <input 
                                type="text" 
                                placeholder="Имя" 
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="email">
                            <img src={emaliSvg} alt="#" style={{ opacity: email ? 1 : 0.4 }}/>
                            <input 
                                type="email" 
                                placeholder="Электронная почта" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="text">
                            <img src={textSvg} alt="#" style={{ opacity: message ? 1 : 0.4 }}/>
                            <textarea
                                ref={textareaRef}
                                onInput={(e) => {
                                    setMessage(e.target.value);
                                    handleInput();
                                }}
                                placeholder="Ваш текст"
                            />
                        </div>
                        <button style={{ opacity: isFormValid ? 1 : 0.4 }} disabled={!isFormValid}>
                            отправить
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Feedback;