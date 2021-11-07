import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { createPokemon } from "../reducer/actions";
import './styles/Creation.css'

export default function Creation (){
    const dispatch = useDispatch()
    const history = useHistory()
    const {types} = useSelector((state) => state)
    const [input, setInput] = useState({
        name: '',
        image: null,
        hp: '',
        attack: '',
        defense: '',
        speed: '',
        height: '',
        weight: ''
    }) 
    const [typeState, setTypeState] = useState([])
    const [ preview, setPreview] = useState()

    useEffect(() => {
        if (!input.image) {
            setPreview(undefined)
            return
        }
        const objectUrl = URL.createObjectURL(input.image)
        setPreview(objectUrl)
    }, [input])

    function handleSubmit(e){
        e.preventDefault();
        const {name, image, hp, attack, defense, speed, height, weight} = input
        if(!name || !typeState.length || !image || !hp || !attack || !defense || !speed || !height || !weight){
            return alert("Hay campos sin completar")
        } 
        const newPoke = {
            name,  hp: parseInt(hp), 
            image: preview,
            attack: parseInt(attack), 
            defense: parseInt(defense), 
            speed: parseInt(speed), 
            height: parseInt(height), 
            weight: parseInt(weight),
            types: typeState,
        }
        dispatch(createPokemon(newPoke, history))
    }
    
    function handleChange(e){
        setInput({...input, [e.target.id]: e.target.value})
    }

    function handleTypesChange(e){
        if(typeState.find(x => x === e.target.value)) {
            setTypeState(typeState.filter(x => x !== e.target.value)) 
        }else{
            if(typeState.length === 2) return
            setTypeState([...typeState, e.target.value])
        }
    }
    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setInput({...input, image: undefined})
            return
        }
        setInput({...input, image: e.target.files[0]})
    }
    
    return (
        <div className='creation'>
            <button onClick={() => {history.goBack()}}>Volver</button>
            <form onSubmit={handleSubmit} className='creationForm'>
                <div className='inputImg'>
                    <h2>Apariencia</h2>
                    {preview ? <img src={preview}/> : <div className='uploadimg'><p>No hay imagen</p></div>}
                    <input type='file' id='image' onChange={onSelectFile}/>                    
                </div>

                <div className='skillsAndTypes'>
                    <div className='inputSkills'>
                        <h2>Habilidades</h2>
                        <input value={input.name} id='name' className='input' type='text' placeholder='Nombre' onChange={handleChange} autocomplete='on'/>
                        <input value={input.attack} id='attack' className='input' type='text' placeholder='Ataque' onChange={handleChange} autocomplete='on'/>
                        <input value={input.defense} id='defense' className='input' type='text' placeholder='Defensa' onChange={handleChange} autocomplete='on'/>
                        <input value={input.speed} id='speed' className='input' type='text' placeholder='Velocidad' onChange={handleChange} autocomplete='on'/>
                        <input value={input.hp} id='hp' className='input' type='text' placeholder='HP' onChange={handleChange} autocomplete='on'/>
                        <input value={input.height} id='height' className='input' type='text' placeholder='Altura' onChange={handleChange} autocomplete='on'/>
                        <input value={input.weight} id='weight' className='input' type='text' placeholder='Peso' onChange={handleChange} autocomplete='on'/>
                    </div>
                    <div className='inputTypes'>
                        <h2>Tipo</h2>
                        <label for='Tipo'>Elegir tipos </label>
                        <select name='Tipo' value={'-Tipo-'} onChange={handleTypesChange}>
                            <option value='-Tipo-' disabled>-Tipo-</option>
                            {types.map(t => !typeState.find(x => x === t) ? <option value={t}>{t}</option> : null)}
                        </select>
                        <div className='typesSelGroup'>
                        {typeState.map(t => 
                            <div className='typeSel'>
                                <button type="button" value={t} onClick={handleTypesChange}>X</button>
                                <img className='typeImgCreate' src={`typesLogos/${t}.png`}/>
                                {t}
                            </div>)}
                        </div>
                    </div>
                </div>

                <div className='CreateFinish'>
                    <button className='CreateFinishBtn' type='submit'>Create</button>
                </div>
            </form>
            <svg style={{position: 'absolute', height: 0, width: 0}}>
                <filter id="blue-glow">
                    <feFlood result="flood" flood-color="blue" flood-opacity="1"></feFlood>
                    <feComposite in="flood" result="mask" in2="SourceGraphic" operator="in"></feComposite>
                    <feMorphology in="mask" result="dilated" operator="dilate" radius="2"></feMorphology>
                    <feGaussianBlur in="dilated" result="blurred" stdDeviation="5"></feGaussianBlur>
                    <feMerge>
                        <feMergeNode in="blurred"></feMergeNode>
                        <feMergeNode in="SourceGraphic"></feMergeNode>
                    </feMerge>
                </filter>
            </svg>
        </div>
    )
}

