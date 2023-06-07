import Main from './components/Main';
import './App.css';
import Navigation from './components/Navigation';
import Player from './components/Players';
import Footer from './components/Footer';
import { ThemeProvider } from './components/ThemeContext';
function App(){
    return(
        <div className='App'>
            <Navigation/>
            <Main/>
            <Footer/>
            
        </div>
    );
}
export default App;


