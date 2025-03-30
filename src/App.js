import './App.css';
import Header from './Header';
import Instruments from './Instruments';
import Search1 from './Search1';
import Logo from './Logo';
import Par from './par';
import Footer from './Footer';
import ConcertList from './ConcertList';
import Timer from './Timer';
import Foto from './Foto';
import { Provider } from 'react-redux';
import store from './redux/store';
import FAQ from './FAQ';
import Player from './Player';

function App() {
  return (
    <div className="App">
       <Header/>
       <Logo/>
       <Provider store={store}>
             <Foto />
       </Provider>,
       <Logo/>
       <Search1/>
       <Timer/>
       <Logo/>
       <Instruments/>
       <Par/>
       <Logo/>
       <Player/>
       <ConcertList/>
       <Logo/>
       <FAQ/>
       <Footer/>
    </div>
  );
}

export default App;
