import { useState } from "react";
import style from "./CallBack.module.css";

const CallBack = (props) => {
    const [formData, setFormData] = useState({
        phone: '',
        comment: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        props.setUserData({
            ...formData,
            [name]: value, // Обновляем состояние, переданное из родителя
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.handleSubmit(e); // Вызов родительского обработчика отправки
        props.handelclick(); // Закрытие попапа
    };

    return (
        <>
            <div className={style.callBack_background}></div>
            <div className={style.callBack}>
                <p className={style.error}>{props.setFormMessage}</p>
                <div onClick={props.handelclick} className={style.btnClose}>
                    <img src="close.svg" alt="close" />
                </div>
                <div className={style.callBack__img}>
                    <img src="CallBack_1.webp" alt="background" />
                </div>
                <div className={style.callBack__content}>
                    <div className={style.callBackContent__title}>
                        Обратный звонок
                    </div>
                    <div className={style.callBackContent__text}>
                        Заполните форму ниже, и наш специалист свяжется с вами в ближайшее время.
                    </div>
                    <form className={style.callBack__form} onSubmit={handleSubmit}>
                        <div className={style.callBack__input}>
                            <label htmlFor="tel">
                                <strong>Телефон</strong>
                                <span>*</span>{" "}
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                id="tel"
                                placeholder="+375 (99) 999-99-99"
                                required
                                value={formData.phone}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className={style.callBack__input}>
                            <label htmlFor="text">
                                <strong>Комментарий</strong>
                            </label>
                            <textarea
                                name="comment"
                                id="text"
                                placeholder="Ваш комментарий"
                                className={style.commentInput}
                                value={formData.comment}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className={style.callBack__checkbox}>
                            <label className={style.customCheckbox}>
                                <input
                                    type="checkbox"
                                    className={style.checkboxInput}
                                    required
                                />
                                <span className={style.checkboxSlider}></span>
                                Согласие на обработку персональных данных
                            </label>
                        </div>
                        <button
                            className={style.submit}
                            type="submit"
                        >
                            Отправить
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default CallBack;