import { CombinedState, combineReducers, Reducer } from 'redux'
import carReducer from './car/carReducer'

type rootReducerType = Reducer<CombinedState<{
  car: CarState;
}>, CarActionTypes>

const rootReducer = combineReducers({
  car: carReducer
})

export default rootReducer
