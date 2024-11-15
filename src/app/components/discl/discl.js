import './discl.scss';

const Discl = () => {    
    return (
        <div className="container-fluid" id="discl">
            <div className="row">
                <div className="col-sm-12">
                    <h2>Доступ на веб-сайт разрешен<br/>только гражданам РФ старше 18 лет,<br/>являющимся потребителями табака.</h2>
                    <p>Я подтверждаю, что мне есть 18 лет<br/>и я являюсь потребителем табака.</p>
                    <div className="buttons">
                        <button>нет</button>
                        <button>да</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Discl;