import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, View, Text, TouchableOpacity, Image, Dimensions } from 'react-native';
const screenWidth = Dimensions.get("window").width;

import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";

import moment from 'moment';


function StatScreen( props ){

    const { navigation, user, incomeData, expenseData, balance, lastOperation } = props;

    const catList = ["Salaire et assimilé", "Revenu financier", "Rente", "Pension alimentaire", "Allocation chômage", "Prestations sociales", "Revenu foncier", "Revenu exceptionnel", "Autre revenu"]; // tableau de catégories
    var catTable = [];

    const getTotal = (data) => {

        return data;
    }

    function filterByCat(obj){
        if (obj.category == catList[0]){
            return obj.category;
        } else {
            return false;
        }
    }

    useEffect(() => { // fonction avant le rendu image

        console.log(incomeData);

        // let x = incomeData.filter(filterByCat)
        // console.log(catTable[0]);


        // catList.forEach( item => {
        //     let catData = incomeData.filter( element=> element.category === item);
        //     catTable.push(catData);
        // })

        // console.log(catTable)

    }, []);


    // each value represents a goal ring in Progress chart
    const chartData = {
        labels: ["Salaire et assimilé", "Revenu financier", "Rente", "Pension alimentaire", "Allocation chômage", "Prestations sociales", "Revenu foncier", "Revenu exceptionnel", "Autre revenu"],
        datasets: [
            {
            data: [
                1,2,3,4,5,6,7,8,9
            ]
            }
        ]
    };

    const bezierConfig = {
        backgroundColor: "#500",
        backgroundGradientFrom: "#ff6060",
        backgroundGradientTo: "white",
        decimalPlaces: 1, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255,255,255, ${opacity})`,
        style: {
            borderRadius: 1,
            fontSize: 30
        },
        propsForDots: {
            r: "5",
            strokeWidth: "1",
            stroke: "white"
        },
        propsForVerticalLabels: {
            fontSize: 16
        },
        propsForHorizontalLabels: {
            fontSize: 16,
        }
    };

    return (
        
        <View style={ styles.container }>

            <View 
                style={{ minHeight: 130, width: '100%', backgroundColor: '#aa1010', paddingHorizontal: 15, paddingVertical: 5, elevation: 5}}
            >
                <View style={{ flex: 1, flexDirection: 'row', }}>
                    <View style={{ flex: 3, justifyContent: 'center', }}>
                        <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#fff', textAlignVertical: 'center'}}>{ balance + " €" }</Text>
                        <Text style={{ fontSize: 12, color: '#fff', textAlignVertical: 'center'}}>{ moment(lastOperation.date).format( 'DD/MM/YYYY' ) + ' - ' + moment(lastOperation.date).format( 'HH:MM' ) }</Text>
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

            <ScrollView horizontal={true}>

                <View style={{}}>
                    <LineChart
                        data={chartData}
                        width={Dimensions.get("window").width } // from react-native
                        height={250}
                        yAxisLabel="€"
                        yAxisSuffix=""
                        yAxisInterval={1} // optional, defaults to 1
                        xAxisInterval={1} // optional, defaults to 1
                        chartConfig={bezierConfig}
                        bezier
                        style={{
                            // marginTop: 15,
                            // borderRadius: 5,
                            // paddingHorizontal: 10,
                        }}
                        verticalLabelRotation={20}
                        
                    />
                </View>
                
            </ScrollView>
        </View>
    )

}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        // width: '100%',
        backgroundColor: '#eee',
        justifyContent: 'center',
        // alignSelf: 'center'
    },

    
});


export default StatScreen;