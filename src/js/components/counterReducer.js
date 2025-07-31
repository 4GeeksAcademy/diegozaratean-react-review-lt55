export function counterReducer(state, action){
    switch(action.type){
        case 'increment':
            return {count: state.count + 1, message: 'cambiaste'}
        case 'decrement':
            return {count: state.count - 1, message: 'ahora eres menor'}
        default:
            return new Error('no se enconro la accion')

    }

}