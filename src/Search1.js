import React, { useState } from 'react';
import { connect, Provider } from 'react-redux';
import { legacy_createStore as createStore} from 'redux';
import { setSearchTerm } from './redux/actions';
import './search.css';
const Search = ({ searchTerm, images, setSearchTerm }) => {
  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredImages = images.filter((image) =>
    image.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const [hoveredImage, setHoveredImage] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredImage(index);
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
  };

  return (
    <div id="second">
      <p className="article">Discography</p>
      <div className="search-form">
        <img style={{ width: 45 }} src={"img/search.png"} />
        <i className="fa fa-times"></i>
        <span className="slens"> <i className="fa fa-search"></i> </span>
        <input
          type="text"
          id="s"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Введите название картинки"
        />
        <span className="sclose"><img style={{ width: 50 }} src={"img/cancel.png"} /><i className="fa fa-times"></i></span>
      </div>
      <div className="search-form-main">
        {filteredImages.map((image, index) => (
          <a href={image.href} key={index}>
            <img
              src={image.url}
              alt={image.name}
              style={{
                width: "350px",
                transform: hoveredImage === index ? "scale(1.2)" : "scale(1)",
              }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              title={hoveredImage === index ? image.name : ""}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

const initialState = {
  searchTerm: '',
  images: [
    { name: 'Лунное сияние', url: "img/alb1.png", href: "https://youtu.be/K1GeGG-HHZY?si=P4EDzublhq8Rgwwx" },
    { name: 'Звездный вальс', url: "img/alb2.png", href: "https://youtu.be/K1GeGG-HHZY?si=P4EDzublhq8Rgwwx" },
    { name: 'Рассветные лучи', url: "img/alb3.png", href: "https://youtu.be/K1GeGG-HHZY?si=P4EDzublhq8Rgwwx" },
    { name: 'Мелодия дождя', url: "img/alb4.png", href: "https://youtu.be/K1GeGG-HHZY?si=P4EDzublhq8Rgwwx" },
    { name: 'Путешествие во сне', url: "img/alb5.png", href: "https://youtu.be/K1GeGG-HHZY?si=P4EDzublhq8Rgwwx" },
    { name: 'Танец бабочек', url: "img/alb6.png", href: "https://youtu.be/K1GeGG-HHZY?si=P4EDzublhq8Rgwwx" },
    { name: 'Песня ветра', url: "img/alb7.png", href: "https://youtu.be/K1GeGG-HHZY?si=P4EDzublhq8Rgwwx" },
    { name: 'Морская гармония', url: "img/alb8.png", href: "https://youtu.be/K1GeGG-HHZY?si=P4EDzublhq8Rgwwx" },
    { name: 'Волшебный закат', url: "img/alb9.png", href: "https://youtu.be/K1GeGG-HHZY?si=P4EDzublhq8Rgwwx" },
    { name: 'Призрачные звуки', url: "img/alb10.png", href: "https://youtu.be/K1GeGG-HHZY?si=P4EDzublhq8Rgwwx" },
    { name: 'Сказочный мотив', url: "img/alb11.png", href: "https://youtu.be/K1GeGG-HHZY?si=P4EDzublhq8Rgwwx" },
    { name: 'Ритм сердца', url: "img/alb12.png", href: "https://youtu.be/K1GeGG-HHZY?si=P4EDzublhq8Rgwwx" },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SEARCH_TERM':
      return {
        ...state,
        searchTerm: action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm,
    images: state.images,
  };
};

const mapDispatchToProps = {
  setSearchTerm,
};

const ConnectedSearch = connect(mapStateToProps, mapDispatchToProps)(Search);

const Search1 = () => {
  return (
    <Provider store={store}>
      <ConnectedSearch />
    </Provider>
  );
};

export default Search1;
