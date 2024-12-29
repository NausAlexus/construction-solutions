import { useState } from "react";
import style from "./Form.module.css";
import { InputMask } from '@react-input/mask';

const Form = ({ setUserData, handleSubmit, formMessage }) => {
    const [formData, setFormData] = useState({
        phone: '',
        comment: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        // Обновляем userData в родительском компоненте
        setUserData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        handleSubmit(e); // Вызов обработчика отправки из родителя
    };

    return (
        <>
            <div className={style.form}>
                <div className={style.form__img}>
                    <img src="Form_1.webp" alt="Form" />
                    <p className={style.error}>{formMessage}</p>

                </div>
                <div className={style.form__content}>
                    <div className={style.fromContent__title}>Остались вопросы?</div>
                    <div className={style.fromContent__text}>Заполните форму ниже, и наш специалист свяжется с вами в ближайшее время.</div>
                    <form
                        className={style.fromContent}
                        onSubmit={onSubmit}
                    >
                        <div className={style.fromContent__input}>
                            <label htmlFor="tel">Телефон<span>*</span></label>
                            <InputMask
                                name="phone"
                                type="tel"
                                mask="+375(__)-___-__-__" 
                                replacement={{ _: /\d/ }}
                                className="form-input form-user-tel"
                                placeholder="+375(XX)-XXX-XX-XX"
                                title="Enter your phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className={`${style.fromContent__input} ${style.commentInput}`}>
                            <label htmlFor="comment">Комментарий</label>
                            <textarea
                                name="comment"
                                id="comment"
                                placeholder="Ваш комментарий"
                                className={style.commentInput}
                                value={formData.comment}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className={style.fromContent__checkbox}>
                            <label className={style.customCheckbox}>
                                <input
                                    type="checkbox"
                                    className={style.checkboxInput}
                                    required
                                />
                                <span className={style.checkboxSlider}></span>
                                Согласие на обработку персональных данных
                            </label>
                            <button className={style.submit} type="submit">
                                Отправить
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Form;