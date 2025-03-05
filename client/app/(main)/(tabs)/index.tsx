import {View, Text} from 'react-native';
import "../../../global.css";
import {useFonts} from "expo-font";
import Input from "@/components/Input";



const league = () => {
    const [fontsLoaded] = useFonts({
        'Montserrat': require('@expo-google-fonts/montserrat/Montserrat_400Regular.ttf'),
        'MontserratBold': require('@expo-google-fonts/montserrat/Montserrat_700Bold.ttf'),
        // Add more weights/styles as needed
    });

  return (
      <View className={"p-5"}>
          <Text className={"text-white"}>
              Enter Your Information
          </Text>
          <Input placeholder={'Test Placeholder'} status={''}/>
      </View>
  );
}

export default league;
