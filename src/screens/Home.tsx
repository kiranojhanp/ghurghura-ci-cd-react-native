import {Text, View, Button} from 'react-native';
import {SCREENS} from '../common/constants';

import Ionicons from 'react-native-vector-icons/Ionicons';

function Home({navigation}: any) {
  return (
    <View className="flex-1 items-center justify-center">
      <Text>Home Screen</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate(SCREENS.PROFILE)}
      />
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate(SCREENS.SETTINGS)}
      />

      <Ionicons name="newspaper" size={30} color="tomato" />
    </View>
  );
}

export default Home;
