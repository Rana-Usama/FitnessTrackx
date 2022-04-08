import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';

//components
import Screen from './../components/Screen';
import BottomTab from '../components/common/BottomTab';

//config
import Colors from '../config/Colors';

function PointsScreen(props) {

    const controlsBox = [
        {
            id: '0',
            title: 'The headyes',
            imageSource: require('../../assets/images/p1.jpg')
        },
        {
            id: '1',
            title: 'The headyes',
            imageSource: require('../../assets/images/p2.jpg')
        },
        {
            id: '2',
            title: 'The headyes',
            imageSource: require('../../assets/images/p2.jpg')
        },
        {
            id: '3',
            title: 'The headyes',
            imageSource: require('../../assets/images/p1.jpg')
        }
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

            <Text style={{ marginTop: RFPercentage(-5), color: Colors.primary, fontSize: RFPercentage(3.2), fontWeight: 'bold' }} >
                The User Points
            </Text>

            <View style={{ marginTop: RFPercentage(3), width: '100%', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }} >
                <FlatList
                    data={controlsBox}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={controlsBox => controlsBox.id.toString()}
                    numColumns={2}
                    renderItem={({ item }) =>

                        <View style={{ marginHorizontal: RFPercentage(0.5), marginTop: RFPercentage(1), width: RFPercentage(25), height: RFPercentage(28), backgroundColor: Colors.white, borderColor: Colors.primary, borderWidth: RFPercentage(0.1), borderRadius: RFPercentage(2), justifyContent: 'flex-start', alignItems: 'center' }} >
                            <Text style={{ marginTop: RFPercentage(2), color: Colors.black, fontSize: RFPercentage(1.9) }} >
                                {item.title}
                            </Text>
                            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: RFPercentage(2), borderBottomColor: Colors.grey, borderWidth: RFPercentage(0.1), width: '100%' }} />
                            <TouchableOpacity activeOpacity={0.8} style={{ width: '100%', height: RFPercentage(18) }} >
                                <Image style={{ width: '100%', height: '100%' }} source={item.imageSource} />
                            </TouchableOpacity>
                            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: RFPercentage(0), borderBottomColor: Colors.grey, borderWidth: RFPercentage(0.1), width: '100%' }} />
                            <Text style={{ marginTop: RFPercentage(0.5), color: Colors.black, fontSize: RFPercentage(1.9) }} >
                                1K+ Ratings
                            </Text>
                        </View>
                    }
                />
                <View style={{ marginBottom: RFPercentage(40) }} />
            </View>

            {/* Bottom Tab */}
            <BottomTab props={props} />
        </Screen>
    );
}

export default PointsScreen;