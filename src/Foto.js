import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateImage } from './redux/actions';
import './foto.css';

function Foto() {
  const dispatch = useDispatch();
  const imageUrl = useSelector((state) => state.imageUrl);

  const handleImageClick = (newImageUrl) => {
    dispatch(updateImage(newImageUrl));
  };

  return (
    <div className="choise_of_number">
      <img className="glavn" src={imageUrl} id="f0" />
      <div className="vtorichn">
        <img src="./img/photo_1.jpg" onClick={() => handleImageClick('./img/photo_1.jpg')} />
        <img src="./img/photo_2.jpg" onClick={() => handleImageClick('./img/photo_2.jpg')} />
        <img src="./img/photo_3.jpg" onClick={() => handleImageClick('./img/photo_3.jpg')} />
        <img src="./img/photo_0.jpg" onClick={() => handleImageClick('./img/photo_0.jpg')} />
      </div>
    </div>
  );
}

export default Foto;
