import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { changeFilter } from "../reducer/actions"
import './styles/Filter.css'

export default function Filter(){
    const {types, filters} = useSelector((state) => state)
    const dispatch = useDispatch()
    const [typeFilter, setTypeFilter] = useState(filters.typeFilter)
    const [originFilter, setOriginFilter] = useState(filters.originFilter)

    useEffect(() => {
        dispatch(changeFilter({...filters, typeFilter}))
    }, [typeFilter])

    useEffect(() => {
        dispatch(changeFilter({...filters, originFilter}))
    }, [originFilter])

    function handleTypesChange(e){
        if(typeFilter.find(x => x === e.target.value)) {
            setTypeFilter(typeFilter.filter(x => x !== e.target.value)) 
        }else{
            setTypeFilter([...typeFilter, e.target.value])
        }
    }
    function handleOriginChange(e){
        setOriginFilter(e.target.checked ? e.target.value : 'All') 
    }
    return(

        <div className="filters">
            <h3>Filtrar</h3>
            <label>
                <input type="checkbox"
                className="check"
                value='My'
                checked={originFilter === 'My'}
                onChange={handleOriginChange}/>
                Solo Mis Pokemons
            </label>
            <label>
                <input type="checkbox"
                className="check"
                value='Original'
                checked={originFilter === 'Original'}
                onChange={handleOriginChange}/>
                Solo los Originales
            </label>
            <div className="filtrarTipo">
                <label for='filtrarTipo'>Tipo </label>
                <select name='filtrarTipo' value={'-Tipo-'} onChange={handleTypesChange}>
                    <option value='-Tipo-' disabled>-Tipo-</option>
                    {types.map(t => !typeFilter.find(x => x === t) ? <option value={t}>{t}</option> : null)}
                </select>
            </div>
            <div className="typeFilList">
                {typeFilter.map(t => <button type="button" className='typeFil' value={t} onClick={handleTypesChange}>{t}</button>)}
            </div>
        </div>
    )
}