import { DISHES } from '../shared/dishes';
import {COMMENTS} from '../shared/comments';
import {LEADERS} from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotion';

export const initialState ={
    dishes : DISHES,
    selectedDish:null,
    Comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS
};

export const Reducer = (state = initialState, action) => {
    return state;
}