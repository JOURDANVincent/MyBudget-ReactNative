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

    console.log(incomeData);

    const pieIncomeData = [
        {name: "Salaire et assimilé", amount: 0, color: 'red'}, 
        {name: "Revenu financier", amount: 0, color: 'orange'}, 
        {name: "Rente", amount: 0, color: 'yellow'}, 
        {name: "Pension alimentaire", amount: 0, color: 'green'}, 
        {name: "Allocation chômage", amount: 0, color: 'turquoise'}, 
        {name: "Prestations sociales", amount: 0, color: 'blue'}, 
        {name: "Revenu foncier", amount: 0, color: 'violet'}, 
        {name: "Revenu exceptionnel", amount: 0, color: 'brown'}, 
        {name: "Autre revenu", amount: 0, color: 'black'}
    ]; // tableau de catégories

    const pieExpenseData = [
        {name: "Nourriture", amount: 0, color: 'red'}, 
        {name: "Factures", amount: 0, color: 'red'}, 
        {name: "Transport", amount: 0, color: 'red'}, 
        {name: "Logement", amount: 0, color: 'red'}, 
        {name: "Santé", amount: 0, color: 'red'}, 
        {name: "Divertissement", amount: 0, color: 'red'}, 
        {name: "Vacances", amount: 0, color: 'red'}, 
        {name: "Shopping", amount: 0, color: 'red'}, 
        {name: "Autre", amount: 0, color: 'red'}
    ]; // tableau de catégories


    pieIncomeData.forEach((item, index) => { // calcul du total par catégorie
        pieIncomeData[index].amount = incomeData.map(item => {
            if (item.category === pieIncomeData[index].name){
                return item.amount
            } else {
                return 0
            }
        }).reduce((sum, value) => sum + value);
        console.log(pieIncomeData[index]);
    })

    // console.log(pieIncomeData)

    pieExpenseData.forEach((item, index) => { // calcul du total par catégorie
        pieExpenseData[index].amount = expenseData.map(item => {
            if (item.category === pieExpenseData[index].name){
                return item.amount
            } else {
                return 0
            }
        }).reduce((sum, value) => sum + value);
        // console.log(pieExpenseData[index])
    })


    const pieConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false, // optional
        
      };

    const pieData = [
        {
          name: pieIncomeData[0].cat,
          amount: 21500000,
          color: "blue",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
        {
            name: pieIncomeData[1].cat,
            amount: 21500000,
            color: "green",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: pieIncomeData[2].cat,
            amount: 21500000,
            color: "yellow",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: pieIncomeData[3].cat,
            amount: 21500000,
            color: "violet",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: pieIncomeData[4].cat,
            amount: 21500000,
            color: "orange",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: pieIncomeData[5].cat,
            amount: 21500000,
            color: "red",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: pieIncomeData[6].cat,
            amount: 21500000,
            color: "turquoise",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: pieIncomeData[7].cat,
            amount: 21500000,
            color: "brown",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: pieIncomeData[8].cat,
            amount: 21500000,
            color: "grey",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        
      ];
      

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

            <View>
                <PieChart
                    style={{ backgroundColor: 'white' , alignItems: 'center', }}
                    data={pieIncomeData}
                    width={screenWidth}
                    height={320}
                    chartConfig={pieConfig}
                    accessor={"amount"}
                    backgroundColor={"transparent"}
                    paddingLeft={"15"}
                    center={[80, 10]}
                    hasLegend={false}
                />
                <View>
                    <Text>Legend :</Text>
                </View>
            </View>

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