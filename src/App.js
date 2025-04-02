import {PortalProvider} from '@gorhom/portal';
import MainStack from 'navigation/RootStack';
import {SafeAreaView} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1}}>
        <MainStack />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
export default App;
