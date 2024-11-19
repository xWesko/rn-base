import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { useTheme } from '@/theme';
import { useAuth } from '@/hooks';
import { authStack, privateStack } from '@/navigation';

import { Loading } from '@/screens';

const Stack = createStackNavigator();

const renderScreens = (stack) => 
  stack.map(({ component, name, options }) => (
    <Stack.Screen 
      component={component}
      key={name}
      name={name}
      options={options}
    />
  ));

function ApplicationNavigator() {
  const { navigationTheme, variant } = useTheme();
  const { loading, token } = useAuth();

  if (loading) {
    return <Loading />;
  }

  const selectedStack = token ? privateStack : authStack;

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer theme={navigationTheme}>
          <Stack.Navigator key={variant} screenOptions={{ headerShown: false }}>
            {renderScreens(selectedStack)}
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
export default ApplicationNavigator;
