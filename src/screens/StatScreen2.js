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

    const { navigation, incomeData, expenseData, balance, lastOperation} = props;

    useEffect(() => { // fonction avant le rendu image

    
    }, []);


    // each value represents a goal ring in Progress chart
    const barData = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43]
          }
        ]
      };
      

    const chartConfig = {
        backgroundGradientFrom: "red",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "white",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
    };

    return (
        
        <View style={ styles.container }>

            <BarChart
                style={{ backgroundColor: '#101010bb'}}
                data={barData}
                width={screenWidth}
                height={220}
                yAxisLabel="$"
                chartConfig={chartConfig}
                verticalLabelRotation={30}
            />

        </View>
    )

}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        // width: '100%',
        justifyContent: 'center',
    },

    
});


export default StatScreen;