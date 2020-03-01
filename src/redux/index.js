import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

const store =
  process.env.REACT_APP_MODE === 'dev'
    ? createStore(
        rootReducer,
        compose(
          applyMiddleware(thunk),
          window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
        )
      )
    : createStore(rootReducer, compose(applyMiddleware(thunk)));

export default store;
