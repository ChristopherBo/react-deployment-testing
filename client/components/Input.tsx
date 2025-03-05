import {TextInput} from 'react-native-paper';
import React, {useState} from 'react';
import {View} from "react-native";
import {Colors} from "@/constants/Colors";

const Input = (props: { placeholder: string; status: string; }) => {
    const {
        placeholder,
        status
    } = props;

    const styles = {
        statusRing: {
            border: "solid 2px",
            borderColor: "#666",
            borderRadius: 7,
        },
        input: {
            borderBottom: "none",
            borderRadius: 5,
        }
    }

    const [input, setInput] = useState('');
    return (
        <View style={styles.statusRing}>
            <TextInput
                underlineColor={"transparent"}
                activeUnderlineColor={"transparent"}
                style={styles.input}
                placeholder={placeholder}
                value={input}
                onChangeText={input => setInput(input)}
            />
        </View>
    )
}

export default Input;