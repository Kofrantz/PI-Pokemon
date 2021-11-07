import notFound from '../multimedia/notFound.png';
import './styles/NotFound.css'

export default function NotFound() {
    return(
        <div className="notfound" >
            <h1>Ups, no encontramos resultados</h1>
            <div className="notfoundimg">
                <img src={notFound}/>
            </div>
        </div>
    )
}