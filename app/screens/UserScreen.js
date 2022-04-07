import React from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, ScrollView } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

//components
import Screen from './../components/Screen';
import BottomTab from '../components/common/BottomTab';

//config
import Colors from '../config/Colors';

function UserScreen(props) {

    const data = [
        {
            title: 'Health Track'
        },
        {
            title: 'Weight Track'
        },
        {
            title: 'Activity'
        },
        {
            title: 'Change Profile'
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

            <View style={{ marginTop: RFPercentage(-6), width: '90%', justifyContent: 'center', alignItems: 'center' }}  >
                <TouchableOpacity activeOpacity={0.8} >
                    <Image style={{ width: RFPercentage(15), height: RFPercentage(15) }} source={require('../../assets/images/profile.png')} />
                </TouchableOpacity>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: RFPercentage(2) }} >
                    <Text style={{ color: Colors.black, fontSize: RFPercentage(2.4), fontWeight: 'bold' }} >
                        Emilia Jhonson
                    </Text>
                </View>
            </View>

            {/* content */}
            <ScrollView style={{ flex: 1, width: '100%' }} >
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>

                    <View style={{ marginTop: RFPercentage(5), borderRadius: RFPercentage(1.5), width: RFPercentage(48), height: RFPercentage(32), borderColor: Colors.grey, borderWidth: RFPercentage(0.1) }} >
                        {data.map((item, i) => (
                            <View key={i} style={{ width: '100%' }} >
                                <View style={{ alignSelf: 'center', marginTop: RFPercentage(3), width: '90%', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }} >
                                    <Text style={{ color: Colors.black, fontSize: RFPercentage(2.2), fontWeight: '500' }} >
                                        {item.title}
                                    </Text>
                                    <TouchableOpacity activeOpacity={0.4} style={{ position: 'absolute', right: 0 }} >
                                        <MaterialIcons name="navigate-next" style={{ fontSize: RFPercentage(3) }} color={Colors.black} />
                                    </TouchableOpacity>
                                </View>
                                {i == 3 ?
                                    null
                                    :
                                    <View style={{ backgroundColor: Colors.grey, height: RFPercentage(0.1), width: '100%', marginTop: RFPercentage(2) }} />
                                }
                            </View>
                        ))}
                    </View>

                </View>
            </ScrollView>

            {/* Bottom Tab */}
            <BottomTab porps={props} />
        </Screen>
    );
}

export default UserScreen;