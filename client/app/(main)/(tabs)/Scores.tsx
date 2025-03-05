import {View, Text, StyleSheet} from "react-native";
import useStore from "@/useStore";
import GradientButton from "@/components/GradientButton";
import Toast from 'react-native-toast-message';


const Scores = () => {

    const showSuccessToast = () => {
        Toast.show({
            type: 'success',
            text1: 'Success!',
            text2: 'Your action was completed successfully',
            // Additional props
            autoHide: true,
            onShow: () => console.log('Toast shown'),
            onHide: () => console.log('Toast hidden'),
        });
    };

    const count = useStore((state) => state.count);
    const increase = useStore((state) => state.increase);
    const decrease = useStore((state) => state.decrease);
    const reset = useStore((state) => state.reset);

    const incrementAndShowToast = () => {
        showSuccessToast();
        increase();
    }

    return (
        <View className='text-white flex flex-col items-center p-6'>
            <Text className={"text-white font-montserrat-bold text-2xl"}>Scores: {count}</Text>
            <Text className='text-white text-left py-3'>Update the scores above using Zustand State Management hooks.</Text>
            <View className={'flex flex-row'}>
                <GradientButton onPress={decrease}> Decrement </GradientButton>
                <GradientButton onPress={incrementAndShowToast}> Increment </GradientButton>
            </View>
            <GradientButton onPress={reset}> Reset </GradientButton>

        </View>
    )
}

export default Scores;