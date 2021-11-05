import pikaImg from '../multimedia/pikachuConfused.png'

export default function NotFound() {
    return(
        <div className="notfound">
            <h1>Ups, no encontramos ese pokemon</h1>
            <img src={pikaImg}/>
        </div>
    )
}