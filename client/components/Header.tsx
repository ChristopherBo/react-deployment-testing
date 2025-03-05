import {View, Text, StyleSheet, Image} from "react-native";
import {IconSymbol} from "@/components/ui/IconSymbol";

const Header = (props: { notifications: any; }) => {
    const {
        notifications
    } = props;

    return (
        <View style={styles.header}>
            <Image source={require("@/assets/images/ContraxTransparent.png")} style={styles.logo}/>
            <IconSymbol style={styles.notification} size={35} name={"bell.fill"} color={"#00aaff"}/>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        height: 150,
        paddingTop: 50,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        // Shadow for iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        // Shadow for Android
        elevation: 5,
        position: "relative"
    },
    logo: {
        width: 100,
        height: 100,
    },
    notification: {
        position: 'absolute',
        right: 0,
    }
})

export default Header;