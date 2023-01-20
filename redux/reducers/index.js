import { combineReducers } from 'redux';

//other reducers
import InvoiceReducer from './InvoiceReducer';

export default combineReducers({
    Invoice: InvoiceReducer,
});