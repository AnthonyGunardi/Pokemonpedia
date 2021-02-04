import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import pokemonReducer from './reducers/pokemonReducer'
import teamReducer from './reducers/teamReducer'

const rootReducer = combineReducers({
  pokemon: pokemonReducer,
  team: teamReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store