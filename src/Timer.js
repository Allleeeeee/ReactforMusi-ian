import React, { useState, useEffect } from 'react';
import "./timer.css";

const withCountdown = (WrappedComponent) => {  // withCountdown оборачивает компонент CountdownTimer и добавляет
    //логику обратного отсчета времени. Декоратор принимает компонент WrappedComponent и возвращает новый 
    //компонент Countdown, который отображает обратный отсчет времени.

  const Countdown = () => {
    const [countdown, setCountdown] = useState('');

    useEffect(() => {
      const targetDate = new Date('2023-12-31'); 

      const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate - now;

        // Вычисляем оставшееся время в днях, часах, минутах и секундах
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Форматируем вывод времени
        const countdownText = `${days}:${hours}:${minutes}:${seconds}`;

        setCountdown(countdownText);

        // Если достигнута целевая дата, останавливаем таймер
        if (distance < 0) {
          clearInterval(interval);
          setCountdown('Время истекло');
        }
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }, []);

    return <WrappedComponent countdown={countdown} />;
  };

  return Countdown;
};

const Timer = ({ countdown }) => {
  return (
    <div id="clock">
      <p class="text">До релиза осталось:</p>
      <p class="time1">{countdown}</p>
    </div>
  );
};

const EnhancedCountdownTimer = withCountdown(Timer); 
export default EnhancedCountdownTimer;
