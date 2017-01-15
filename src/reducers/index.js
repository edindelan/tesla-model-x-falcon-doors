const defaultState = {
    frame: 0,
    pageY: 0
}

export default (state = defaultState, action) => {
    switch (action.type){
        case 'OPEN_FALCON_DOORS':
            console.log('OPENING');
            if(state.frame < 40 && action.pageY % 4 === 0){
                return {
                    ...state,
                    frame: state.frame + 1,
                    pageY: action.pageY
                };
            }
            return state;
        case 'CLOSE_FALCON_DOORS':
            console.log('CLOSING');
            if(state.frame > 0 && action.pageY % 4 === 0){
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