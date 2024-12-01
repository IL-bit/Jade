import './feedback.scss';
import userSvg from '../img/feedback_user.svg';
import emaliSvg from '../img/feedback_email.svg';
import textSvg from '../img/feedback_text.svg';
import Header from '../header/header';
import { SENDFORM } from '../../../middleware';
import { useDispatch, useSelector } from 'react-redux';

import React, { useEffect, useRef, useState } from 'react';

const Feedback = () => {
    const textareaRef = useRef(null);
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const Form = state.form;
    const maxRows = 4; 
    const handleInput = () => {
        const textarea = textareaRef.current;
        if (textarea) {
          textarea.style.height = 'auto';
          const lineHeight = parseInt(getComputedStyle(textarea).lineHeight);
          const maxHeight = lineHeight * maxRows;
          textarea.style.height = `${Math.min(textarea.scrollHeight, maxHeight)}px`;
        }
      };
    useEffect(() => {
        handleInput();
    }, []);
    const isFormValid = formData.name && formData.email && formData.message;
    const handleSubmit = (e) => {
        e.preventDefault();         
        dispatch(SENDFORM(formData));
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };
    const handleExit = () => {
        dispatch({ type: "RESETFORM" }); 
    };

    return(
        <div className="container-fluid">
            <Header />
            <div className="row" id="feedback">
                <div className="col-sm-12">  
                    {Form ? (
                        <>
                            <h1>Ваше сообщение<br/>успешно отправлено</h1>  
                            <button className="exit" onClick={handleExit}>Закрыть</button>                      
                        </>
                    ) : (
                        <>
                            <h2>Обратная связь</h2>
                            <p>Вы можете поделиться с нами<br/>предложениями и пожеланиями</p>
                            <form onSubmit={handleSubmit}>
                                <div className="name">
                                    <img src={userSvg} alt="#" style={{ opacity: formData.name ? 1 : 0.4 }}/>
                                    <input 
                                        type="text" 
                                        placeholder="Имя" 
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div className="email">
                                    <img src={emaliSvg} alt="#" style={{ opacity: formData.email ? 1 : 0.4 }}/>
                                    <input 
                                        type="email" 
                                        placeholder="Электронная почта" 
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                                <div className="text">
                                    <img src={textSvg} alt="#" style={{ opacity: formData.message ? 1 : 0.4 }}/>
                                    <textarea
                                        ref={textareaRef}
                                        onInput={(e) => {
                                            setFormData({ ...formData, message: e.target.value });
                                            handleInput();
                                        }}
                                        placeholder="Ваш текст"
                                        value={formData.message}
                                    />
                                </div>
                                <button style={{ opacity: isFormValid ? 1 : 0.4 }} disabled={!isFormValid}>
                                    отправить
                                </button>
                            </form>                            
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Feedback;