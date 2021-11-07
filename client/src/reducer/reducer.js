import {GET_DETAILS, 
    GET_POKEMONS, 
    GET_TYPES, 
    CLEAR_DETAILS,
    GET_POKEMON_BY_NAME, 
    CHANGE_PAGE, 
    CHANGE_FILTER, 
    CHANGE_ORDER,
    CREATE_POKEMON,
    ABOUT_MSG,
    MENU} from "./actions"

const initialState = {
    pokemons: [],
    details: {},
    types: [],
    page: 1,
    filters: {typeFilter: [], originFilter: 'All'},
    order: 'A - Z',
    aboutMsg: true, 
    menu: false
}

function rootReducer(state=initialState, action){
    switch(action.type){
        case GET_POKEMONS:
            return {
                ...state, 
                pokemons: action.payload
            }
        case GET_DETAILS:
            return {
                ...state, 
                details: action.payload
            }
        case GET_POKEMON_BY_NAME:
            return {
                ...state, 
                details: action.payload
            }
        case GET_TYPES:
            return {
                ...state, 
                types: action.payload
            }
        case CLEAR_DETAILS:
            return {
                ...state, 
                details: {}
            }
        case CHANGE_PAGE:
            return {
                ...state, 
                page: action.payload
            }
        case CHANGE_FILTER:
            return {
                ...state, 
                filters: action.payload,
                page: 1
            }
        case CHANGE_ORDER:
            return {
                ...state, 
                order: action.payload,
            }
        case CREATE_POKEMON:
            return {
                ...state, 
                pokemons: [...state.pokemons, action.payload]
            }
        case ABOUT_MSG:
            return {
                ...state, 
                aboutMsg: false
            }
        case MENU:
            return {
                ...state, 
                menu: !state.menu
            }
        default:
            return state
    }
}
export default rootReducer;