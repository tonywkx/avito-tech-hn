import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {reducer} from './reducer'

export  const storeRedux = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));