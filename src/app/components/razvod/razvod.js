import './razvod.scss';

const Razvod = () => {
    return(
        <div className="container-fluid" id="razvod">
            <div className="row">
                <div className="col-sm-12">
                    <div className="slogan">
                        <h1>Играй,</h1>
                        <h3>выигрывай</h3>
                        <h2>призы</h2>
                    </div>
                    <button className="tg">Перейти в Telegramm-Bot</button>
                    <button className="site">перейти на сайт</button>
                </div>
            </div>
        </div>
    )
}

export default Razvod;