'use client';
import React, { useState, useEffect, useRef } from 'react';
import style from './Slider.module.css';

// Начальные слайды
const primarySlides = [
    {
        title: "Создадим ваш идеальный дом в установленные сроки и с 10-летней гарантией",
        text: "Без головной боли и отклонений от сметы строительства"
    },
    {
        title: "Мы создаем надежные и современные дома для вашего уютного проживания",
        text: "В своей работе мы применяем современные технологии и специализированное строительное оборудование"
    },
    {
        title: "В нашей команде работают квалифицированные сотрудники с опытом работы от 5 лет",
        text: "Мы оперативно выполняем весь спектр строительных работ"
    }
];



const Slider = ({ currentSlide, setCurrentSlide, handelclick }) => {
    const slidesRef = useRef(null);
    const [isMouseDown, setIsMouseDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [isTouching, setIsTouching] = useState(false);
    const [slides, setSlides] = useState(primarySlides);

    // Новые элементы для экранов шириной менее 1024 пикселей
    const additionalSlides = [
        <div className={style.container__slide}>
            <div className={style.itemGrid1}>
                <p className={style.details__item__text}>Оформление рассрочки по ставке от 15% годовых</p>
                <button onClick={handelclick} className={style.details__btn}>Подробнее<img src="up-right.svg" alt="UpRight" className={style.details__btn__img}/></button>
            </div>
            <div className={style.itemGrid2}>
                <div className={style.itemGrid__bg}>
                    <p className={style.itemGrid__house}>Барнхаусы</p>
                </div>
            </div>
        </div>,
        <div className={style.container__slide}>
            <div className={style.itemGrid3}>
                <div className={style.itemGrid__bg}>
                    <p className={style.itemGrid__house}>Таунхаусы</p>
                </div>
            </div>
            <div className={style.itemGrid4}>
                <p className={style.details__item__text}>Скидка до 5% при полной предоплате за проект</p>
                <button onClick={handelclick} className={style.details__btn}>Подробнее<img src="up-right.svg" alt="UpRight" className={style.details__btn__img}/></button>
            </div>
        </div>,
        <div className={style.container__slide}>
            <div className={style.itemGrid1}>
                <p className={style.details__item__text}>Оформление рассрочки по ставке от 15% годовых</p>
                <button onClick={handelclick} className={style.details__btn}>Подробнее<img src="up-right.svg" alt="UpRight" className={style.details__btn__img}/></button>
            </div>
            <div className={style.itemGrid2}>
                <div className={style.itemGrid__bg}>
                    <p className={style.itemGrid__house}>Барнхаусы</p>
                </div>
            </div>
        </div>
    ];

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1025) {
                const updatedSlides = primarySlides.map((slide, index) => ({
                    ...slide,
                    additionalContent: additionalSlides[index]
                }));
                setSlides(updatedSlides);
            } else {
                setSlides(primarySlides);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    };

    const handleMouseDown = (e) => {
        setIsMouseDown(true);
        setStartX(e.clientX);
    };

    const handleMouseUp = (e) => {
        if (!isMouseDown) return;
        const endX = e.clientX;
        const distance = startX - endX;

        if (distance > 50) {
            nextSlide();
        } else if (distance < -50) {
            prevSlide();
        }
        setIsMouseDown(false);
    };

    // Обработка касаний
    const handleTouchStart = (e) => {
        setIsTouching(true);
        setStartX(e.touches[0].clientX);
    };

    const handleTouchEnd = (e) => {
        if (!isTouching) return;
        const endX = e.changedTouches[0].clientX;
        const distance = startX - endX;

        if (distance > 50) {
            nextSlide();
        } else if (distance < -50) {
            prevSlide();
        }
        setIsTouching(false);
    };

    return (
        <div
            className={style.slider}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={() => setIsMouseDown(false)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            <div
                className={style.slides}
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                ref={slidesRef}
            >
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`${style.slide} ${currentSlide === index ? style.active : ''}`}
                    >
                        <h2 className={style.title}>{slide.title}</h2>
                        <p className={style.text}>{slide.text}</p>
                        {/* Теперь кнопка статичная */}
                        <button onClick={handelclick} className={`${style.priceButton} ${style.fixedButton}`}>
                            Узнать стоимость
                        </button>
                        {/* Отображаем дополнительный контент под кнопкой */}
                        {slide.additionalContent && (
                            <div className={style.additionalContent}>
                                {slide.additionalContent}
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <div className={style.dots}>
                {slides.map((_, index) => (
                    <div
                        key={index}
                        className={`${style.dot} ${currentSlide === index ? style.activeDot : ''}`}
                        onClick={() => setCurrentSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Slider;