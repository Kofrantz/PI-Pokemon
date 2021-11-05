import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { changePage } from '../reducer/actions';
import Filter from './Filter';
import Loading from './Loading';
import Order from './Order';
import './styles/Cards.css';

export default function Cards(){
    const {pokemons,page,order,types,filters} = useSelector((state) => state)
    const dispatch = useDispatch()
    
    const ordered = orderMachine(order, pokemons, types)
    const filtered = filterMachine(filters, ordered)    
    const pokeGroup = filtered.slice((page-1)*12, page*12)

    function handlePage(pag){
        if (page === pag) return;
        if (pag > Math.ceil(filtered.length/12) || pag < 1) return;
        dispatch(changePage(pag))
    }
    return(
        !pokemons.length ? <Loading/> : <>
            <Filter/>
            <Order/>
            
            <div className='cards'>
                {pokeGroup.map(p => 
                    <NavLink to={`/home/${p.id}`} key={p.id}>
                        <div className='card'>
                            <span className='name'>{p.name}</span>
                            {p.image ? <img className='cardImg' src={p.image}/> : <p style={{fontSize: '48px'}}>?</p>}
                            <div className='types'>
                                {p.types?.map(t => {
                                    return (
                                        <div key={t} className='type'>
                                            <img className='typeImg' src={`typesLogos/${t}.png`}/>
                                            <p >{t}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </NavLink>
                )}
            </div>
            
            <div className='pages'>
                <button onClick={() => {handlePage(page-1)}}>{'<'}</button>
                {newOrdArray(Math.ceil(filtered.length/12)).map(p => 
                    <button onClick={() => {handlePage(p)}}>{p}</button>)}
                <button onClick={() => {handlePage(page+1)}}>{'>'}</button>
            </div>
        </>
    )
}

function orderMachine(order, pokemons, types){
    switch(order){
        case 'A - Z': 
        return pokemons.sort((a,b) => a.name.localeCompare(b.name))

        case 'Z - A': 
        return pokemons.sort((a,b) => b.name.localeCompare(a.name))

        case 'Mas fuerte': 
        return pokemons.sort((a,b) => b.attack-a.attack)

        case 'Mas defensivo': 
        return pokemons.sort((a,b) => b.defense-a.defense)
        
        case 'Mas rapido': 
        return pokemons.sort((a,b) => b.speed-a.speed)
        
        default: return pokemons
    }
}

function filterMachine(filters, pokemons){
    let pokeGroup = pokemons
    filters.typeFilter.forEach(element => {
        pokeGroup = pokeGroup.filter(p => 
            p.types?.map(t => t).find(x => x === element))
    })
    return pokeGroup
}

function newOrdArray(n){
    let arr = []
    for(var i = 1; i <= n; i++){
        arr.push(i)
    }
    return arr
}