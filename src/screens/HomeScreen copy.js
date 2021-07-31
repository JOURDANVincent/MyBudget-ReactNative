import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, View, Text, FlatList, TouchableOpacity } from 'react-native';

import moment from "moment";

function HomeScreen( props ){

    const { navigation, json, setJson, lastFiveData, lastOperation } = props;

    // console.log(lastFiveData)


    const renderItem = ({ item }) => (
        
        <View style={{ flexDirection: 'row', minHeight: 50, backgroundColor: '#fff', borderRadius: 10, elevation: 3, paddingHorizontal: 15, paddingVertical: 8, marginHorizontal: 10, marginBottom: 8}}>
            <View style={{ flex: 4}}>
                <Text style={{ flex: 3, color: '#333', fontWeight: 'bold', fontSize: 16, }}>{ item.category }</Text>
                <Text style={{ flex: 1, color: '#222'}}>{ moment(item.date).format('DD/MM/YYYY') }</Text>
            </View>
            <View style={{ flex: 2, alignSelf: 'center'}}>
                { item.amount < 0 ? 
                <Text style={{ color: '#aa1010', fontSize: 16, fontWeight: 'bold', textAlignVertical: 'center', textAlign: 'right' }}>{ item.amount +" €" }</Text>
                :
                <Text style={{ color: '#10aa10', fontSize: 16, fontWeight: 'bold', textAlignVertical: 'center', textAlign: 'right' }}>{ "+" + item.amount +" €" }</Text>
                }
            </View>
        </View>
    
    )
    

    return (
        
        <SafeAreaView style={ styles.container }>

            <Text style={{ color: '#aa1010', fontSize: 18, fontWeight: 'bold', paddingLeft: 15, marginBottom: 10}}>Dernières opérations</Text>

            <FlatList
                style={{ minheight: '80%', marign: 15, }}
                data={lastFiveData}
                renderItem={renderItem}
                keyExtractor={(item) => item.date}
            />

        </SafeAreaView>
    )

}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        // backgroundColor: '#FFF3F3',
        paddingTop: 25,
        justifyContent: 'center',
    },

    
});


export default HomeScreen;