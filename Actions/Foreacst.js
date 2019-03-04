import ForecastSource from '../ForecastSource';
import SET_FORECAST from './Types';

const reductor = (state, action) => {
    switch(action.type) {
        case SET_FORECAST:
            return ForecastSource.getForecastForCity(state);
    }

    return state;
};

export default reductor;