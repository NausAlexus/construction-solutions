import style from './Details.module.css';

const Details = (props) => {
    return ( 
        <div className={style.details}>
            <div className={style.itemGrid1}>
                <p className={style.details__item__text}>Оформление рассрочки по ставке от 15% годовых</p>
                <button onClick={props.handelclick} className={style.details__btn}>Подробнее<img src="up-right.svg" alt="UpRight" className={style.details__btn__img}/></button>
            </div>
            <div className={style.itemGrid2}>
                <div className={style.itemGrid__bg}>
                    <p className={style.itemGrid__house}>Барнхаусы</p>
                </div>
            </div>
            <div className={style.itemGrid3}>
                <div className={style.itemGrid__bg}>
                    <p className={style.itemGrid__house}>Таунхаусы</p>
                </div>
            </div>
            <div className={style.itemGrid4}>
                <p className={style.details__item__text}>Скидка до 5% при полной предоплате за проект</p>
                <button onClick={props.handelclick} className={style.details__btn}>Подробнее<img src="up-right.svg" alt="UpRight" className={style.details__btn__img}/></button>
            </div>
        </div>
    );
}
 
export default Details;