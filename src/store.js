import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-sage';
import { createLogger } from 'redux-logger';
import rootSaga from './_redux/_saga/fetchDataSaga';
import rootReducer from './_redux/reducers/fetchDataReducer';

const loggerMiddleware = createLogger();
const sagaMiddleware = createSagaMiddleware();

sagaMiddleware.run(rootSaga);

export const store = createStore(
    rootReducer,
    applyMiddleware(
        sagaMiddleware,
        loggerMiddleware
    )
)