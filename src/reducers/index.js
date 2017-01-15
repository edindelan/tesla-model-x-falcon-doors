const defaultState = {
    frame: 41,
    pageY: 0
}

export default (state = defaultState, action) => {
    switch (action.type){
        case 'OPEN_FALCON_DOORS':
            if(state.frame < 41 && action.pageY % 2 === 0){
                return {
                    ...state,
                    frame: state.frame + 1,
                    pageY: action.pageY
                };
            }
            return state;
        case 'CLOSE_FALCON_DOORS':
            if(state.frame > 1 && action.pageY % 2 === 0){
                return {
                    ...state,
                    frame: state.frame - 1,
                    pageY: action.pageY
                };
                return state;
            }
            return state;
        default:
            return state;
    }
}