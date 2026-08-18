
import './App.css';
import minhaFoto from './assets/hero.png';

function App() {
  return (
    <div>
    <h1>Boa noite </h1>
    <p>Soma: {2+2}</p>
    <img src={minhaFoto} alt="foto" width={150} height={150 } />
    <img src="/favicon.svg" alt="site" width={150} height={150} />

    </div>
    );
}

export default App
