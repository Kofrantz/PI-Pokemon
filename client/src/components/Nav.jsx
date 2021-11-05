import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router'
import { Link } from "react-router-dom";
import { getPokemonByName } from "../reducer/actions";
import PikaBossSvg from './pikaBossSVG';
import pikaBossLogo from '../multimedia/pikaboss.png'
import './styles/Nav.css';

export default function Nav(){
    const [input, setInput] = useState('')
    const history = useHistory()

    function handleChange(e){
        setInput(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        history.replace('/home/'+input)
    }

    return (
        <div className='nav'>
            <Link exact to='/home'>
                <div className='titleHome'>
                    <img src={pikaBossLogo} className='pikaBossSvg'/>
                    <div className='titleH'>PikaBoss</div>
                </div>
            </Link>
            <form className='searchBar' onSubmit={handleSubmit}>
                <input type='text' placeholder='Buscar Pokemon...'
                value={input} onChange={handleChange}/>
                <button type='submit'>Buscar</button>
            </form>
            <div className='create'>
            <Link exact to='/create'>
                <button className='createBtn'>+ Crear Pokemon</button>
            </Link>
            </div>
        </div>
    )
}