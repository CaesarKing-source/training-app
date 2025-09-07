import { Stack } from 'expo-router';
import 'react-native-reanimated';

export default function RootLayout() {
  return (
    // <SafeAreaProvider>
    //   <SafeAreaView>
        
    //   </SafeAreaView>
    // </SafeAreaProvider>
    <Stack>
      <Stack.Screen name='index' options={{ headerShown: false}} />
      <Stack.Screen name='notification' options={{ title: 'Notification'}} />
    </Stack>
  );
}
