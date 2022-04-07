import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

//config
import Colors from '../../config/Colors';

function BottomTab({ props }) {

    return (
        <View style={{ borderColor: Colors.grey, borderWidth: RFPercentage(0.1), borderTopLeftRadius: RFPercentage(3), borderTopRightRadius: RFPercentage(3), flexDirection: 'row', alignItems: 'center', position: 'absolute', justifyContent: 'center', bottom: 0, width: "100%", height: RFPercentage(7), backgroundColor: Colors.white }}>
            <View style={{ width: "80%", flexDirection: "row", alignItems: 'center', justifyContent: 'space-between', }} >

                <TouchableOpacity activeOpacity={0.8} style={{ justifyContent: 'center', alignItems: 'center' }} >
                    {/* <Image style={{ width: RFPercentage(3.4), height: RFPercentage(3.4) }} source={require('../../../assets/images/cal.png')} /> */}
                    <FontAwesome5 name="file-powerpoint" style={{ marginTop: RFPercentage(0.5), fontSize: RFPercentage(3) }} color={Colors.black} />
                    <Text style={{ marginTop: RFPercentage(0.3), color: Colors.black, fontSize: RFPercentage(1.9) }}>
                        Points
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.8} style={{ justifyContent: 'center', alignItems: 'center' }} >
                    {/* <Image style={{ width: RFPercentage(3.4), height: RFPercentage(3.4) }} source={require('../../../assets/images/mes.png')} /> */}
                    <MaterialCommunityIcons name="facebook-workplace" style={{ marginTop: RFPercentage(0.5), fontSize: RFPercentage(3) }} color={Colors.black} />
                    <Text style={{ color: Colors.black, fontSize: RFPercentage(1.9) }}>
                        Workout
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.8} style={{ justifyContent: 'center', alignItems: 'center' }} >
                    {/* <Image style={{ width: RFPercentage(3.4), height: RFPercentage(3.4) }} source={require('../../../assets/images/home.png')} /> */}
                    <AntDesign name="home" style={{ marginTop: RFPercentage(0.5), fontSize: RFPercentage(3) }} color={Colors.black} />
                    <Text style={{ color: Colors.black, fontSize: RFPercentage(1.9) }}>
                        Home
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.8} style={{ justifyContent: 'center', alignItems: 'center' }} >
                    {/* <Image style={{ width: RFPercentage(3.4), height: RFPercentage(3.4) }} source={require('../../../assets/images/pet.png')} /> */}
                    <FontAwesome5 name="user-circle" style={{ marginTop: RFPercentage(0.5), fontSize: RFPercentage(3) }} color={Colors.black} />
                    <Text style={{ color: Colors.black, fontSize: RFPercentage(1.9) }}>
                        User
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.8} style={{ justifyContent: 'center', alignItems: 'center' }} >
                    {/* <Image style={{ width: RFPercentage(3.4), height: RFPercentage(3.4) }} source={require('../../../assets/images/acc.png')} /> */}
                    <AntDesign name="setting" style={{ marginTop: RFPercentage(0.5), fontSize: RFPercentage(3) }} color={Colors.black} />
                    <Text>
                        Setting
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default BottomTab;