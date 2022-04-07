import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';

//components
import Screen from './../components/Screen';
import BottomTab from '../components/common/BottomTab';

//config
import Colors from '../config/Colors';

function WorkoutScreen(props) {

    const buttons = [
        {
            title: 'Offered Workout'
        },
        {
            title: 'Private Workout'
        },
        {
            title: 'Add Workout'
        },
    ]

    const workoutListData = [
        {
            title: '- Power Lift'
        },
        {
            title: '- Dead Lift'
        },
        {
            title: '- Hang Clean'
        },
        {
            title: '- Military Press'
        },
        {
            title: '- Leg Press'
        },
        {
            title: '- Squat'
        },
        {
            title: '- Bench MAX'
        },
        {
            title: '- Squat MAX'
        },
        {
            title: '- Stair Stepper'
        },
    ]

    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: Colors.white }}>

            <View style={{ width: '100%', height: RFPercentage(32), justifyContent: 'flex-start', alignItems: 'center', backgroundColor: Colors.primary }} >
                {/* Logo */}
                <Image style={{ marginTop: RFPercentage(-2), width: RFPercentage(30), height: RFPercentage(25) }} source={require('../../assets/images/logo.png')} />
                <TouchableOpacity activeOpacity={0.4} style={{ position: 'absolute', left: RFPercentage(3.5), top: RFPercentage(6.5) }} >
                    <Ionicons name="chevron-back" style={{ fontSize: RFPercentage(3) }} color={Colors.white} />
                </TouchableOpacity>
                <View style={{ width: '100%', height: RFPercentage(9), position: 'absolute', bottom: 0, backgroundColor: Colors.white, borderTopLeftRadius: RFPercentage(5) }} />
            </View>

            <View style={{ width: '90%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }} >
                {buttons.map((item, i) => (
                    <TouchableOpacity key={i} activeOpacity={0.8} style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.secondary, width: RFPercentage(16), height: RFPercentage(7.5), borderRadius: RFPercentage(1.6) }} >
                        <Text style={{ color: Colors.white, fontSize: RFPercentage(1.9) }} >
                            {item.title}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            <Text style={{ marginTop: RFPercentage(4), color: Colors.primary, fontSize: RFPercentage(3.2), fontWeight: 'bold' }} >
                List of workouts
            </Text>

            <ScrollView style={{ flex: 1, width: '100%' }} >
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>

                    <View style={{ marginTop: RFPercentage(5), width: '80%', justifyContent: 'center', alignItems: 'flex-start' }} >

                        {workoutListData.map((item, i) => (
                            <Text key={i} style={{ marginTop: i == 0 ? RFPercentage(-1) : RFPercentage(3), color: Colors.black, fontSize: RFPercentage(2.1) }} >
                                {item.title}
                            </Text>
                        ))}
                    </View>

                </View>
                <View style={{ marginBottom: RFPercentage(14) }} />
            </ScrollView>

            {/* Bottom tab */}
            <BottomTab props={props} />
        </Screen>
    );
}

export default WorkoutScreen;