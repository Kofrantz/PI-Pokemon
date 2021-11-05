import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { changeFilter } from "../reducer/actions"

export default function Filter(){
    const {types, filters} = useSelector((state) => state)
    const dispatch = useDispatch()
    const [typeFilter, setTypeFilter] = useState(filters.typeFilter)

    useEffect(() => {
        dispatch(changeFilter({...filters, typeFilter}))
    }, [typeFilter])

    function handleTypesChange(e){
        if(typeFilter.find(x => x === e.target.value)) {
            setTypeFilter(typeFilter.filter(x => x !== e.target.value)) 
        }else{
            setTypeFilter([...typeFilter, e.target.value])
        }
    }
    return(

        <div className="filters">
            <label for='filtrar'>Filtrar </label>
            <select name='filtrar' value={'-Tipo-'} onChange={handleTypesChange}>
                <option value='-Tipo-' disabled>-Tipo-</option>
                {types.map(t => !typeFilter.find(x => x === t) ? <option value={t}>{t}</option> : null)}
            </select>
            {typeFilter.map(t => <button type="button" value={t} onClick={handleTypesChange}>{t}</button>)}
        </div>
    )
}