import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getDetails, clearDetails, getPokemonByName } from "../reducer/actions"
import Loading from "./Loading"
import Nav from "./Nav"
import NotFound from "./NotFound"

export default function Details(props){
    const d = useSelector((state) => state.details)
    const dispatch = useDispatch()
    
    useEffect(() => {
        if(parseInt(props.id) || props.id.length > 20){
            dispatch(getDetails(props.id))
        }else{
            dispatch(getPokemonByName(props.id))
        }
        return () => {dispatch(clearDetails())}
    }, [])

    return(<>
        {console.log(d)}
        {!Object.keys(d).length ? <Loading/> : 
        d.name === 'Error' ? <NotFound/> :
        <div className="Details">
            <h1>{d.id}</h1>
            <h1>{d.name}</h1>
            <img src={d.image} />
            {d.types?.map(t => <p key={d.id}>{t}</p>)}
            <p>HP: {d.hp}</p>
            <p>Attack: {d.attack}</p>
            <p>Defense: {d.defense}</p>
            <p>Speed: {d.speed}</p>
            <p>Height: {d.height}</p>
            <p>Weight: {d.weight}</p>
        </div>}
        </>
    )
}
