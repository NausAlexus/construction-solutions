'use client';
import style from './MyMap.module.css';
import React from 'react';
import { YMaps, Map as YandexMap, Placemark } from 'react-yandex-maps';

const MyMap = () => {
    const mapState = {
        center: [53.902287, 27.561824],
        zoom: 10,
    };

    const apiKey = 'YOUR_API_KEY';

    return (
        <div className={style.map__container}>
            <YMaps query={{ apikey: apiKey }}>
                <YandexMap state={mapState} className={style.yandex__map}>
                    <Placemark
                        geometry={[53.902287, 27.561824]}
                        properties={{
                            balloonContent: 'Минск',
                        }}
                    />
                </YandexMap>
            </YMaps>
        </div>
    );
};

export default MyMap;