import React from 'react';
import { Provider } from 'react-redux';
import { persistor, store } from '../../redux/store/store';
import { PersistGate } from 'redux-persist/integration/react';

const Providers = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null}
       persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default Providers;
