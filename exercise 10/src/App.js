import Main from './components/Main';
import './App.css';
import Navigation from './components/Navigation';
import Player from './components/Players';
import Footer from './components/Footer';
function App(){
    return(
        <div className='App'>
            <Navigation/>
            <Main></Main>
            <Footer/>
        </div>
    );
}
export default App;


