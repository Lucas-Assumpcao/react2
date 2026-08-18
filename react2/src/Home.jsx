import { Link } from 'react-router-dom'

function Home(){

    return(
        <div>
            <h1>Página Home</h1>
            <p>Bem vindos ao meu site</p>
            <Link to="/Sobre"> ir para pagina sobre </Link>
        </div>
    );
}

export default Home;