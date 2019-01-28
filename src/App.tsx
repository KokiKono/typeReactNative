import React from 'react';
import { Provider } from 'react-redux';
import { createAppStore } from './store';
import AppWidthNavigationState from './navigation/ReduxNavigation';
import {PersistGate} from 'redux-persist/integration/react';
class App extends React.Component {

  render() {
    const { store, persistor } = createAppStore();
    return(
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppWidthNavigationState />
        </PersistGate>
      </Provider>
    )
  }
}

export default App;