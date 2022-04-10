import React, { useState } from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, ScrollView, KeyboardAvoidingView } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';

//components
import Screen from './../components/Screen';
import BottomTab from '../components/common/BottomTab';

//config
import Colors from '../config/Colors';
import InputField from './../components/common/InputField';
import MyAppButton from './../components/common/MyAppButton';
import UserScreen from './UserScreen';

function HealthTrackScreen(props) {

    const [inputField, SetInputField] = useState([
        {
            placeholder: "Blood Pressure(mm Hg)",
            value: "",
        },
        {
            placeholder: "Running (mins)",
            value: "",
        },
        {
            placeholder: "Exersice(mins)",
            value: "",
        },
        {
            placeholder: "Heart Rate(BPM)",
            value: "",
        },
        {
            placeholder: "Blood Oxygen(%)",
            value: "",
        },
    ]);

    const handleChange = (text, i) => {
        let tempfeilds = [...inputField];
        tempfeilds[i].value = text;
        SetInputField(tempfeilds);

    };

    return (

        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: Colors.white }}>

            <View style={{ width: '100%', height: RFPercentage(32), justifyContent: 'flex-start', alignItems: 'center', backgroundColor: Colors.primary }} >
                {/* Logo */}
                <Image style={{ marginTop: RFPercentage(-2), width: RFPercentage(30), height: RFPercentage(25) }} source={require('../../assets/images/logo.png')} />
                <TouchableOpacity onPress={() => props.navigation.navigate("UserScreen")} activeOpacity={0.4} style={{ position: 'absolute', left: RFPercentage(3.5), top: RFPercentage(6.5) }} >
                    <Ionicons name="chevron-back" style={{ fontSize: RFPercentage(3) }} color={Colors.white} />
                </TouchableOpacity>
                <View style={{ width: '100%', height: RFPercentage(9), position: 'absolute', bottom: 0, backgroundColor: Colors.white, borderTopLeftRadius: RFPercentage(5) }} />
            </View>

            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
                <ScrollView style={{ flex: 1, width: '100%', marginTop: RFPercentage(-5) }} >
                    <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>


                        {/* Input field */}
                        <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                            {inputField.map((item, i) => (
                                <View key={i} style={{ marginTop: i == 0 ? RFPercentage(2) : RFPercentage(1.8) }} >
                                    <InputField
                                        placeholder={item.placeholder}
                                        placeholderColor={Colors.black}
                                        height={RFPercentage(6.8)}
                                        // leftIconName={item.iconName}
                                        backgroundColor={Colors.lightGrey}
                                        // onTouchStart={() => setGreenBorder(true)}
                                        // onTouchEnd={() => setGreenBorder(false)}
                                        borderWidth={RFPercentage(0.2)}
                                        borderColor={Colors.grey}
                                        secure={item.secure}
                                        borderRadius={RFPercentage(1.4)}
                                        color={Colors.black}
                                        fontSize={RFPercentage(2)}
                                        handleFeild={(text) => handleChange(text, i)}
                                        value={item.value}
                                        width={"95%"}
                                    />
                                </View>
                            ))}
                        </View>

                        {/* Button */}
                        <View style={{ width: "100%", alignItems: "center", marginTop: RFPercentage(4) }}>
                            <MyAppButton
                                title="Submit"
                                padding={RFPercentage(1.8)}
                                backgroundColor={Colors.secondary}
                                color={Colors.white}
                                bold={false}
                                borderRadius={RFPercentage(1.5)}
                                width={"42%"}
                            />
                        </View>

                    </View>
                </ScrollView>
            </KeyboardAvoidingView>

            {/* Bottom Tab */}
            <BottomTab props={props} />
        </Screen >

    );
}

export default HealthTrackScreen; 