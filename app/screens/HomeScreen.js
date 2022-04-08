import React from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, ScrollView } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';

//components
import Screen from './../components/Screen';
import BottomTab from '../components/common/BottomTab';

//config
import Colors from '../config/Colors';

function HomeScreen(props) {
    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: Colors.white }}>

            <View style={{ width: '100%', height: RFPercentage(32), justifyContent: 'flex-start', alignItems: 'center', backgroundColor: Colors.primary }} >
                {/* Logo */}
                <Image style={{ marginTop: RFPercentage(-2), width: RFPercentage(30), height: RFPercentage(25) }} source={require('../../assets/images/logo.png')} />
                <View style={{ width: '100%', height: RFPercentage(9), position: 'absolute', bottom: 0, backgroundColor: Colors.white, borderTopLeftRadius: RFPercentage(5) }} />
            </View>

            <Text style={{ marginTop: RFPercentage(-5), color: Colors.primary, fontSize: RFPercentage(3.2), fontWeight: 'bold' }} >
                Home
            </Text>

            <TouchableOpacity onPress={() => props.navigation.navigate("WorkoutScreen")} activeOpacity={0.8} style={{ marginTop: RFPercentage(6), justifyContent: 'center', alignItems: 'center', width: RFPercentage(32), height: RFPercentage(15.5), backgroundColor: Colors.secondary, borderRadius: RFPercentage(2.2) }} >
                <Text style={{ color: Colors.white, fontSize: RFPercentage(2.2) }} >
                    Add New Workouts
                </Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={{ marginTop: RFPercentage(5), justifyContent: 'center', alignItems: 'center', width: RFPercentage(32), height: RFPercentage(15.5), backgroundColor: Colors.secondary, borderRadius: RFPercentage(2.2) }} >
                <Text style={{ color: Colors.white, fontSize: RFPercentage(2.2), textAlign: 'center' }} >
                    Add new charities for workout contribution
                </Text>
            </TouchableOpacity>

            {/* Bottom Tab */}
            <BottomTab props={props} />

        </Screen>
    );
}

export default HomeScreen; 