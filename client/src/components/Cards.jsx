import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { changePage } from '../reducer/actions';
import Filter from './Filter';
import Loading from './Loading';
import Order from './Order';
import NotFound from './NotFound';
import './styles/Cards.css';
import { useEffect, useState } from 'react';
import { CreateBtn, SearchBar } from './Nav';

export default function Cards(){
    const {pokemons,page,order,types,filters,menu} = useSelector((state) => state)
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
        !pokemons.length ? <Loading/> : <div className="cardsAndFilterContainer">
            <div className="footerFix"/>
            <div className={!menu ? "filterAndOrderContainer" : "filterAndOrderContainerDeployed"}>
                <CreateBtn class='movil'/>
                <SearchBar class='movil'/>
                <Order/>
                <Filter/>
            </div>
            <div className="cardsContainer">
                <div className='cards'>
                    {!pokeGroup.length ? <NotFound/> : pokeGroup.map(p => 
                        <NavLink to={`/home/${p.id}`} key={p.id}>
                            <div className='card'>
                                <span className='name'>{capitalize(p.name)}</span>
                                {p.image ? <img className='cardImg' src={p.image}/> : <p style={{fontSize: '48px'}}>?</p>}
                                <div className='types'>
                                    {p.types?.map(t => {
                                        return (
                                            <div key={t} className='type'>
                                                <img className='typeImg' src={`typesLogos/${t}.png`}/>
                                                <p >{capitalize(t)}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </NavLink>
                    )}
                </div>
                
                {!pokeGroup.length ? null : <div className='pages'>
                    <button onClick={() => {handlePage(page-1)}}>{'<'}</button>
                        {newOrdArray(Math.ceil(filtered.length/12)).map(p => 
                            <button onClick={() => {handlePage(p)}}>{p}</button>)}
                    <button onClick={() => {handlePage(page+1)}}>{'>'}</button>
                </div>}
            </div>
        </div>
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
    if(filters.originFilter !== 'All') pokeGroup = pokeGroup.filter(x => x.origin === filters.originFilter)
    return pokeGroup
}

function newOrdArray(n){
    let arr = []
    for(var i = 1; i <= n; i++){
        arr.push(i)
    }
    return arr
}

const capitalize = (str) => str[0].toUpperCase()+str.slice(1) 