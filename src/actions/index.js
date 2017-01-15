import CONSTANTS from './constants';

export function openFalconDoors(payload) {
    return {
        type: CONSTANTS.OPEN_FALCON_DOORS,
        pageY: payload
    }
};

export function closeFalconDoors(payload) {
    return {
        type: CONSTANTS.CLOSE_FALCON_DOORS,
        pageY: payload
    }
};

