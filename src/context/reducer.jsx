function Reducer(state,action) {
    switch (action.type) {
       case 'REMOVE':
        if(state.balance - action.payload.amount<0){
          return state
        }
        case 'ADD':
        case 'REMOVE':
          const newState = {...state,history:[...state.history,
            { amount: action.payload.amount,
            date: action.payload.date,
            time: action.payload.time,
          type:action.type}]};
          localStorage.setItem('appState',JSON.stringify(newState))
          return newState
  
        case 'CLEAR':
          return {history:[],balance:0}
        case 'SET_STATES':
          return action.state
        case 'UPDATE_BALANCE':
            return {
                ...state,
                balance: action.balance
            };
        
        default:
          return state;
      }
  
}

export default Reducer;