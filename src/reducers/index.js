import { combineReducers } from 'redux';
import GifsReducer from './gifs';
import ModalReducer from './modal';
import { reducer as FormReducer } from 'redux-form';

const rootReducer = combineReducers({
  gifs: GifsReducer,
  modal: ModalReducer,
  form: FormReducer
});

export default rootReducer;
