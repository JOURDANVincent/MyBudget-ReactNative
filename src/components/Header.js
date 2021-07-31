import React from 'react';
import { StyleSheet, SafeAreaView, View, Text, Image, Pressable, TouchableOpacity } from 'react-native';

import moment from 'moment';

const Header = ( props ) => {

    const { scene, navigation, route, user, balance, lastOperation } = props;
    // console.log(lastOperation.date)

    let name = scene.route.name;
    let title = scene.descriptor.options.title;

    return (


        ( name === 'Income' || name === 'Expense') ? (
        
            <SafeAreaView 
                style={{ height: 60, width: '100%', backgroundColor: '#aa1010', alignItems: 'center', paddingLeft: 15, paddingVertical: 10, elevation: 5, paddingBottom: 3}}
            >   
                <View style={{flexDirection: 'row', alignItems: 'center', }}>
                    <TouchableOpacity
                        style={{ flex: 1}}
                        onPress={() => navigation.goBack()}
                    >
                        <Image
                            style={{ height: 35, width: 35, resizeMode: 'contain',  }}
                            source={require('../../assets/icon/arrowBackWhite.png')}
                        />
                    </TouchableOpacity>
                    <Text style={{ flex: 5, fontSize: 20, fontWeight: 'bold', color: '#fff', paddingLeft: 0}}>{ title }</Text>
                </View>

            </SafeAreaView>

        ) : (

            <SafeAreaView 
                style={{ minHeight: 130, width: '100%', backgroundColor: '#aa1010', paddingHorizontal: 15, paddingVertical: 5, elevation: 5}}
            >
                <View style={{ flex: 1, flexDirection: 'row', }}>
                    <View style={{ flex: 3, justifyContent: 'center', }}>
                        <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#fff', textAlignVertical: 'center'}}>{ balance + " €" }</Text>
                        <Text style={{ fontSize: 12, color: '#fff', textAlignVertical: 'center'}}>{ moment(lastOperation).format( 'DD/MM/YYYY' ) + ' - ' + moment(lastOperation).format( 'HH:MM' ) }</Text>
                    </View>
                    <Text style={{ flex: 3, textAlign: 'right', fontSize: 20, color: '#fff', paddingTop: 5 }}>{user}</Text>
                </View>

                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
                    <TouchableOpacity
                        style={{ flexDirection: 'row', backgroundColor: '#994040', borderRadius: 20, paddingHorizontal: 15, paddingVertical: 5, marginHorizontal: 10, alignSelf: 'center', elevation: 3}}
                        onPress={() =>{ navigation.navigate('Income')} }
                    >   
                        <Image
                            style={{ height: 25, width: 25, resizeMode: 'contain'}}
                            source={require('../../assets/icon/addWhite.png')}
                        />
                        <Text style={{ color: 'white', fontSize: 20,  paddingLeft: 10 }}>revenu</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ flexDirection: 'row', backgroundColor: '#994040', borderRadius: 20, paddingHorizontal: 15, paddingVertical: 5, marginHorizontal: 10, alignSelf: 'center', elevation: 3}}
                        onPress={() =>{ navigation.navigate('Expense')} }
                    >   
                        <Image
                            style={{ height: 25, width: 25, resizeMode: 'contain'}}
                            source={require('../../assets/icon/addWhite.png')}
                        />
                        <Text style={{ color: 'white', fontSize: 20,  paddingLeft: 10 }}>dépense</Text>
                    </TouchableOpacity>

                </View>
            </SafeAreaView>
        )
    )

}

const styles = StyleSheet.create({

    container: { 
        flexDirection: 'row',
        width: '100%', 
        backgroundColor: '#203040',
        borderBottomColor: "#555", 
        borderBottomWidth: 1, 
        padding: 12,
        marginBottom: 8,
        elevation: 5
    }

});


export default Header;