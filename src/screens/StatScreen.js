import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, View, Text, TouchableOpacity, Image, Dimensions } from 'react-native';
import { VictoryBar, VictoryChart, VictoryTheme } from "victory-native";
import moment from 'moment';


function StatScreen( props ){

    const { navigation, user, incomeData, expenseData, balance, lastOperation } = props;

    const screenWidth = Dimensions.get("window").width;   
    
    const data = [
        { quarter: 1, earnings: 13000 },
        { quarter: 2, earnings: 16500 },
        { quarter: 3, earnings: 14250 },
        { quarter: 4, earnings: 19000 }
      ];

    return (
        
        <View style={ styles.container }>

            <View 
                style={{ position: 'absolute', top: 0, minHeight: 130, width: '100%', backgroundColor: '#aa1010', paddingHorizontal: 15, paddingVertical: 5, elevation: 5}}
            >
                <View style={{ flex: 1, flexDirection: 'row', }}>
                    <View style={{ flex: 3, justifyContent: 'center', }}>
                        <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#fff', textAlignVertical: 'center'}}>{ balance + " €" }</Text>
                        <Text style={{ fontSize: 12, color: '#fff', textAlignVertical: 'center'}}>{ moment(lastOperation).format( 'DD/MM/YYYY' ) + ' - ' + moment(lastOperation).format( 'HH:MM' ) }</Text>
                    </View>
                    <Text style={{ flex: 3, textAlign: 'right', fontSize: 20, color: '#fff', paddingTop: 5 }}>{user}</Text>
                </View>

                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around'}}>
                    <TouchableOpacity
                        style={{ backgroundColor: '#994040', borderRadius: 20, paddingHorizontal: 20, paddingVertical: 5, alignSelf: 'center', elevation: 3}}
                        onPress={() =>{ alert('filter revenu') } }
                    >
                        <Text style={{ color: 'white', fontSize: 20, textAlignVertical: 'center' }}>tout</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ backgroundColor: '#994040', borderRadius: 20, paddingHorizontal: 20, paddingVertical: 5, alignSelf: 'center', elevation: 3}}
                        onPress={() =>{ alert('filter revenu') } }
                    >
                        <Text style={{ color: 'white', fontSize: 20, textAlignVertical: 'center' }}>revenus</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ backgroundColor: '#994040', borderRadius: 20, paddingHorizontal: 20, paddingVertical: 5, alignSelf: 'center', elevation: 3}}
                        onPress={() =>{alert('filter dépense')} }
                    >
                        <Text style={{ color: 'white', fontSize: 20, textAlignVertical: 'center' }}>dépenses</Text>
                    </TouchableOpacity>

                </View>
            </View>

            <VictoryChart width={350} theme={VictoryTheme.material}>
                <VictoryBar data={data} x="quarter" y="earnings" />
            </VictoryChart>

        </View>
    )

}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        // width: '100%',
        // backgroundColor: '#aa5050',
        justifyContent: 'center',
        // alignSelf: 'center'
    },

    
});


export default StatScreen;