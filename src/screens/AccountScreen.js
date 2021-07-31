import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, View, Text, FlatList, TouchableOpacity, Image } from 'react-native';

import moment from 'moment';

function AccountScreen( props ){

    const { navigation, json, setJson, user, accountData, incomeData, expenseData, balance, lastOperation } = props;

    const [ sortData, setSortData ] = useState([]);
    const [ desc, setDesc ] = useState(true);


    useEffect(() => { // fonction avant le rendu image

        setSortData(accountData); // récupère les données complètes triées par date...

    }, []);

    const sortAccountBy = (sortBy)=> { // Effectue un tri sur le tableau par rapport à "search"

        console.log(sortBy)
        let newSortData = [];

        if (sortBy === 'accountData'){
            newSortData = accountData;
        }

        else if (sortBy === 'incomeData'){
            newSortData = incomeData;
        }

        else if (sortBy === 'expenseData'){
            newSortData = expenseData;
        }

        // tri tableau par date
        if (desc === true) {
            newSortData.sort(function compare(a, b) {
                if (a.date < b.date)
                   return -1;
                if (a.date > b.date )
                   return 1;
                return 0;
            });
        } else {
            newSortData.sort(function compare(a, b) {
                if (a.date > b.date)
                   return -1;
                if (a.date < b.date )
                   return 1;
                return 0;
            });
        }

        desc === true ?  setDesc(false) : setDesc(true); // inversement du tri par date
        
        setSortData(newSortData);
    }

    const renderItem = ({ item }) => (

        <View style={{ flexDirection: 'row', minHeight: 50, backgroundColor: '#fff', borderRadius: 10, elevation: 3, paddingVertical: 8, marginHorizontal: 10, marginBottom: 8}}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',}}>
                <Image
                    style={{ height: 20, width: 20, resizeMode: 'contain',}}
                    source={require('../../assets/icon/fork.png')}
                />
            </View>
            <View style={{ flex: 4}}>
                <Text style={{ flex: 3, color: '#333', fontWeight: 'bold', fontSize: 16, }}>{ item.category }</Text>
                <Text style={{ flex: 1, color: '#222', fontSize: 12}}>{ moment(item.date).format('DD/MM/YYYY') }</Text>
            </View>
            <View style={{ flex: 2, alignSelf: 'center', paddingRight: 15}}>
                { item.amount < 0 && 
                <Text style={{ color: '#aa1010', fontSize: 16, fontWeight: 'bold', textAlignVertical: 'center', textAlign: 'right' }}>{ item.amount +" €" }</Text>
                }
                { item.amount >= 0 && 
                <Text style={{ color: '#10aa10', fontSize: 16, fontWeight: 'bold', textAlignVertical: 'center', textAlign: 'right' }}>{ "+" + item.amount +" €" }</Text>
                }
            </View>
        </View>
    )

    return (
        
        <SafeAreaView style={ styles.container }>

            <View 
                style={{ minHeight: 130, width: '100%', backgroundColor: '#aa1010', paddingHorizontal: 15, paddingVertical: 5, marginBottom: 20, elevation: 5}}
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
                        style={{ backgroundColor: '#994040', borderRadius: 20, paddingHorizontal: 15, paddingVertical: 5, alignSelf: 'center', elevation: 3}}
                        onPress={() => sortAccountBy('accountData') }
                    >
                        <Text style={{ color: 'white', fontSize: 20, textAlignVertical: 'center' }}>tout</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ backgroundColor: '#994040', borderRadius: 20, paddingHorizontal: 15, paddingVertical: 5, alignSelf: 'center', elevation: 3}}
                        onPress={() => sortAccountBy('incomeData') }
                    >
                        <Text style={{ color: 'white', fontSize: 20, textAlignVertical: 'center' }}>revenus</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ backgroundColor: '#994040', borderRadius: 20, paddingHorizontal: 15, paddingVertical: 5, alignSelf: 'center', elevation: 3}}
                        onPress={() => sortAccountBy('expenseData') }
                    >
                        <Text style={{ color: 'white', fontSize: 20, textAlignVertical: 'center' }}>dépenses</Text>
                    </TouchableOpacity>

                </View>
            </View>
            
            <FlatList
                style={{ flex: 1, marginBottom: 0}}
                data={sortData}
                renderItem={renderItem}
                keyExtractor={(item) => item.date}
            /> 

        </SafeAreaView>
    )

}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        // paddingVertical: 25,
        justifyContent: 'center',
    },

    
});


export default AccountScreen;