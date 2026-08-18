import { Link } from 'react-router-dom'

function Sobre(){

    return(
        <div>
            <h1>Página Home</h1>
            <p>Bem vindos ao meu site</p>
            <Link to="/"> ir para pagina Home </Link>
        </div>
    );
}

export default Sobre;