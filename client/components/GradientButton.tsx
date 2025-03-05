import {Button} from "react-native-paper";
import PropTypes from "prop-types";
import {StyleSheet} from "react-native";
import {LinearGradient} from "expo-linear-gradient";

const GradientButton = (props: { onPress: any; children: any; }) => {
    const {
        onPress,
        children,
    } = props;

    return (
        <LinearGradient
            colors={["#00aaff", "#3d63ff", "#7525ff", "#e57cff"]}
            start={{ x: 0, y: 0 }} // Left
            end={{ x: 1, y: 0 }} // Right
            style={style.border}
        >
            <Button labelStyle={style.label} textColor={"white"} onPress={onPress} style={style.button}>
                {children}
            </Button>
        </LinearGradient>
    )
}

const style = StyleSheet.create({
    button: {
        backgroundColor: '#0c0c0c',
        fontFamily: 'Montserrat',
        fontSize: 18,
        fontWeight: 'medium',
        borderRadius: 50,
    },
    border: {
        width: 150,
        padding: 3,
        borderRadius: 50,
        margin: 10,
    },
    label: {
        fontFamily: 'Montserrat',
        fontWeight: 'medium',
    }
});

GradientButton.propTypes = {
    onPress: PropTypes.func,
    children: PropTypes.string
};

export default GradientButton;

