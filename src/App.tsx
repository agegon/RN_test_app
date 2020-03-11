import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { SafeAreaView, StatusBar } from 'react-native';

import Home from './containers/Home';
import rootReducer from './store/reducers';
import rootSaga from './store/sagas';

import styles from './App.style';

const sagaMiddleware = createSagaMiddleware();

const enhancer =
  process.env.NODE_ENV === 'development'
    ? composeWithDevTools({})(applyMiddleware(sagaMiddleware))
    : applyMiddleware(sagaMiddleware);

const store = createStore(rootReducer, enhancer);
sagaMiddleware.run(rootSaga);

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Home />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
