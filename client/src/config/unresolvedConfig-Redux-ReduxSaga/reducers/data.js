// import axios from 'axios';
import {Types} from '../actions/data';
import * as api from '../api/data';

// create initial state for reducers
const INIT_STATE = {
    food: api.getData()
}

// reducer function to transform state
export default function data(state = INIT_STATE, action) {
    switch(action.type) {
        case Types.GET_DATA_SUCCESS: {
            // console.log("redux -> ", action.payload.data.food)
            return Object.assign({}, state, {
                food: action.payload.data.food
            })
        }
        default: return state;
    }
}