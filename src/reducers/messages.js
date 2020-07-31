import { ADD_MESSAGE, DELETE_MESSAGE } from '../constant'
import shortid from 'shortid'
import findIndex from 'lodash'


const messages = (state = [],action = {}) => {
    switch(action.type){
        case ADD_MESSAGE:
            return [
                ...state,
                {
                    id: shortid.generate(),
                    type: action.message.type,
                    text: action.message.text
                }
            ]
        case DELETE_MESSAGE:
            const index = findIndex(state, {id: action.id})
            if(index.__index__ >= 0){
                return[
                    ...state.slice(0, index.__index__),
                    ...state.slice(index.__index__ + 1)
                ]
            }
            return state
        default:
            return state
    }
}

export default messages