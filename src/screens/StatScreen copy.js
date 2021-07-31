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

    // console.log(incomeData);

    const barIncomeData = {
        labels: [
            "Salaire et assimilé", 
            "Revenu financier", 
            "Rente", 
            "Pension alimentaire", 
            "Allocation chômage", 
            "Prestations sociales", 
            "Revenu foncier", 
            "Revenu exceptionnel", 
            "Autre revenu"
        ], // optional
        datasets: [
            {
              data: []
            }
          ]
    }

    const barExpenseData = {
        labels: [
            "Nourriture", 
            "Factures", 
            "Transport", 
            "Logement", 
            "Santé", 
            "Divertissement", 
            "Vacances", 
            "Shopping", 
            "Autre"
        ], // optional
        datasets: [
            {
              data: []
            }
          ]
    }
        

    barIncomeData.labels.forEach((item, index) => { // calcul du total par catégorie
        barIncomeData.datasets[0].data[index] = incomeData.map(item => {
            if (item.category === barIncomeData.labels[index]){
                return item.amount
            } else {
                return 0
            }
        }).reduce((sum, value) => sum + value);
        console.log(barIncomeData.datasets[0].data[index]);
    })

    // console.log(barIncomeData)

    // barExpenseData.labels.forEach((item, index) => { // calcul du total par catégorie
    //     barExpenseData[index].amount = expenseData.map(item => {
    //         if (item.category === barExpenseData[index].name){
    //             return item.amount
    //         } else {
    //             return 0
    //         }
    //     }).reduce((sum, value) => sum + value);
    //     // console.log(barExpenseData[index])
    // })


    const barConfig = {
        backgroundGradientFrom: "#000",
        backgroundGradientFromOpacity: 0.5,
        backgroundGradientTo: "#000",
        backgroundGradientToOpacity: 1,
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: {
            // borderRadius: 1,
            // fontSize: 30,
            color: 'black'
        },
        decimalPlaces: 2,
        // strokeWidth: 5, // optional, default 3
        // barPercentage: 1,
        useShadowColorFromDataset: false, // optional
        
      };

      

    return (
        
        <View style={ styles.container }>

            <View 
                style={{ position: 'absolute', top: 0, minHeight: 130, width: '100%', backgroundColor: '#aa1010', paddingHorizontal: 15, paddingVertical: 5, elevation: 5}}
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

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
                <BarChart
                    style={{ paddingVertical: 40}}
                    data={barIncomeData}
                    width={screenWidth *1.5}
                    height={500}
                    yAxisLabel="€"
                    chartConfig={barConfig}
                    verticalLabelRotation={20}
                    fromZero={true}
                    showBarTops={true}
                    showValuesOnTopOfBars={true}
                />


                <View>
                    <Text>Legend :</Text>
                </View>
            </ScrollView>

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