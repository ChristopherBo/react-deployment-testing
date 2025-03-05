import {View, Text, StyleSheet} from "react-native";
// import {IconSymbol} from "@/components/ui/IconSymbol";
import {ToastConfig} from "react-native-toast-message";
import {LinearGradient} from "expo-linear-gradient";

const toastConfig: ToastConfig = {
    success: ({text1, text2}) => (
        <LinearGradient
            colors={["#00aaff", "#3d63ff", "#7525ff", "#e57cff"]}
            start={{ x: 0, y: 0 }} // Left
            end={{ x: 1, y: 0 }} // Right
            style={styles.border}
        >
            <View style={styles.container}>
                {/*<IconSymbol style={styles.icon} name={icon} color={"#c3c3c3"}></IconSymbol>*/}
                <Text style={{ fontSize: 16, color: 'white', fontWeight: 'bold' }}>{text1}</Text>
                {text2 && <Text style={{ fontSize: 14, color: 'white' }}>{text2}</Text>}
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    border: {
        width: "100%",
        padding: 3,
        borderRadius: 10,
        margin: 10,
    },
    container: {
        backgroundColor: '#1a1a1a',
        borderRadius:8,
        height:75,
        padding: 5,
    }
})

export default toastConfig;