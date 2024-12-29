import style from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={style.footer__background}>
            <div className={style.footer}>
                <div className={style.footer__logo}>
                    <div className={style.logo__content}>
                        <img src="Logo.svg" alt="Logo" />
                        <div>
                            <div className={style.logoContentText__title}>
                                Строительные решения
                            </div>
                            <div className={style.logoContentText__title2}>
                                строительная компания
                            </div>
                        </div>
                    </div>
                    <div className={style.logoContent__text}>
                        © 2024 ООО “Строительные решения”
                    </div>
                </div>
                <div className={style.footer__address}>
                    <div className={style.footerAddress__title}>
                        Адрес офиса
                    </div>
                    <div className={style.address}>РБ, г. Минск, ул. Ленина, 1</div>
                    <div className={style.footerAddress__time}>
                        <div className={style.timeOne}>пн – пт: с 09:00 до 18:00</div>
                        <div>сб – вс: с 10:00 до 16:00</div>
                    </div>
                </div>
                <div className={style.footer__contact}>
                    <div>
                        ООО “Строительные решения” <br></br>Юридический адрес:{" "}
                        <br></br>РБ, г. Минск, ул. Ленина, 1<br></br>УНП:
                        111111111
                    </div>
                    <div className={style.footer__webSite}>
                        Разработка сайта:{" "}
                        <a href="https://web-space.by/">Web-space.by</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
