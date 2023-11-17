import {Text, View, Button} from 'react-native';
import { SCREENS } from '../common/constants';

function Home({navigation}: any) {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text>Home Screen</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate(SCREENS.PROFILE)}
      />
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate(SCREENS.SETTINGS)}
      />
    </View>
  );
}

export default Home;
