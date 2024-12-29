"use client";
import { useState } from "react";
import style from "./Header.module.css";
import CallBack from "../Main/CallBack/CallBack";

const Header = (props) => {
    
    return (
        <header className={style.header}>
            <div className={style.header__content}>
                <div className={style.logo}>
                    <img src="Logo.svg" alt="Logo" />
                    <div>
                        <div className={style.logo__title}>
                            Строительные решения
                        </div>
                        <div className={style.logo__title2}>
                            строительная компания
                        </div>
                    </div>
                </div>
                <div className={style.headerInfo}>
                    <div className={style.headerInfo__address}>
                        <div className={style.address__title}>Адрес офиса:</div>
                        <div className={style.address__text}>
                            <div>РБ, г. Минск,</div>
                            <div>ул. Ленина, 1</div>
                        </div>
                    </div>
                    <div className={style.headerInfo__tele}>
                        <div className={style.tele__title}>
                            +375 99 999 99 99
                        </div>
                        <div className={style.tele__text}>
                            <div>пн – пт: с 09:00 до 18:00</div>
                            <div>сб – вс: с 10:00 до 16:00</div>
                        </div>
                    </div>
                    <div
                        onClick={props.handelclick}
                        className={style.headerInfo__callback}
                    >
                        Заказать звонок
                    </div>
                </div>
                {props.callBack && (
                    <CallBack
                        handleSubmit={props.handleSubmit}
                        setFormMessage={props.formMessage}
                        handelclick={() => props.setCallBack(false)}
                        setUserData={props.setUserData}
                    />
                )}
                <div className={style.headerInfo__phone}>
                    <img
                        onClick={props.handelclick}
                        src="phone.svg"
                        alt="Phone Icon"
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;
