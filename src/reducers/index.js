import { combineReducers } from 'redux';
import GifsReducer from './gifs';
import ModalReducer from './modal';
import AuthReducer from './auth';
import { reducer as FormReducer } from 'redux-form';

const rootReducer = combineReducers({
  gifs: GifsReducer,
  modal: ModalReducer,
  form: FormReducer,
  auth: AuthReducer
});

export default rootReducer;
