import React from 'react';
import './cons.css'
const ConcertList = () => {
  const concertData = [
    { city: "Брест", date: " 2023-11-15" },
    { city: "Минск", date: " 2023-10-20" },
    { city: "Барановичи", date: "2023-12-25" },
    { city: "Гомель", date: "2023-12-21" },
    { city: "Сморгонь", date: "2023-12-05" },
    { city: "Слуцк", date: "2023-11-14" },
    { city: "Браслав", date: "2023-12-03" },
  ];
  return (
    <div id='maincon' class="maincon">
         <p class="article">Concert</p>
      {concertData.map((concert, index) => (
        <div className="concert-block">
          <h1>Город: {concert.city}</h1>
          <h2>Дата: {concert.date}</h2>
          <button>Купить билеты</button>
        </div>
      ))}
    </div>
  );
};

export default ConcertList;
