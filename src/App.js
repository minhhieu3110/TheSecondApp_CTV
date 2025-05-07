if (__DEV__) {
  require('./../ReactotronConfig');
}
import React from 'react';
import {PortalProvider} from '@gorhom/portal';
import {SafeAreaView} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import RootStack from 'navigation/RootStack';
import Toast from 'react-native-toast-message';
import {Provider} from 'react-redux';
import store from 'redux/store';
import {persistor} from 'redux/store';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <SafeAreaView style={{flex: 1}}>
            <PortalProvider>
              <RootStack />
              <Toast visibilityTime={3000} />
            </PortalProvider>
          </SafeAreaView>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
