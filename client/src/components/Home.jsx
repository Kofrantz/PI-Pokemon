import Nav from "./Nav";
import Cards from "./Cards";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getPokemons, getTypes } from "../reducer/actions";
import PikaBossSvg2 from "./pikaBossSVG2";

export default function Home(){
    const pokemons = useSelector((state) => state.pokemons)
    const [aboutInv, setAboutInv] = useState(false)
    const dispatch = useDispatch()
    
    function changeAbout(e){
        setAboutInv(e)
    }
    useEffect(() => {
        if(!pokemons.length)dispatch(getPokemons())
        setTimeout(() => changeAbout(true), 10000)
    }, [])

    return (
        <div className='home'>
            <Nav/>
            <Cards/>
            {aboutInv && <PikaBossSvg2 changeAbout={changeAbout} aboutInv={aboutInv}/>}
        </div>
    )
}