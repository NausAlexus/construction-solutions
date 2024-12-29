"use client";
import Footer from "@/components/Footer/Footer.jsx";
import Header from "../components/Header/Header.jsx";
import Main from "../components/Main/Main.jsx";
import { useState } from "react";

export default function Home() {
    // Данные о пользователе
    const [userData, setUserData] = useState({
        phone: '',
        comment: '',
    });

    const [formMessage, setFormMessage] = useState(null);
    const [callBack, setCallBack] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:5000/send-data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                console.log('Данные успешно отправлены в Telegram');
                setFormMessage('Ваша заявка принята!');

                // Закрываем попап и перезагружаем страницу
                setTimeout(() => {
                    closeForm();
                    window.location.reload();
                }, 3000);
            } else {
                console.error('Ошибка при отправке данных:', data.error);
                setFormMessage('Ошибка при отправке данных. Пожалуйста, попробуйте снова.');
            }
        })
        .catch(error => {
            console.error('Ошибка:', error);
            setFormMessage('Произошла ошибка. Пожалуйста, повторите попытку позже.');
        });
    };

    // Открытие попап
    const handelclick = () => {
        setCallBack(true);
    };

    return (
        <>
            <Header setUserData={setUserData} handleSubmit={handleSubmit} formMessage={formMessage} setCallBack={setCallBack} handelclick={handelclick} callBack={callBack} />
            <Main handelclick={handelclick} setUserData={setUserData} handleSubmit={handleSubmit} formMessage={formMessage}/>
            <Footer />
        </>
    );
}