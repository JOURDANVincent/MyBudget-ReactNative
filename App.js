import React, { useState, useEffect, useLayoutEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { StatusBar } from 'react-native'

import TabNavigator from './src/navigations/TabNaviagtor'
import jsonData from './src/db/data.json'

 
export default function Budget() {

    const [ user, setUser ] = useState(null);
    const [ accountData, setAccountData ] = useState([]);
    const [ incomeData, setIncomeData ] = useState([]);
    const [ expenseData, setExpenseData ] = useState([]);
    const [ lastFiveData, setLastFiveData ] = useState([]);
    const [ lastOperation, setLastOperation ] = useState([]);
    const [ balance, setBalance ] = useState(0);

    // récupère la liste utilisateur
    const userList = jsonData.map(item => item.user);

    // Choix utilisateur par défaut
    (user == null) ? setUser('Mayer Franklin') : ''; 


    useLayoutEffect(() => { // fonction avant le rendu imag

        var totalIncome = totalExpense = 0;

        
        
        const income = jsonData.find(element => element.user == user).incomes
        income.forEach(element => {
                element.amount = parseInt((element.amount).replace(/[^0-9]/g, '')) / 100;
                totalIncome += element.amount;
            });

        const expense = jsonData.find(element => element.user == user).expenses
        expense.forEach(element => {
                element.amount = - parseInt((element.amount).replace(/[^0-9]/g, ''))/ 100;
                totalExpense += element.amount;
            });

        // calcul du solde
        const total = totalIncome + totalExpense;

        // tableau income & expense
        const data = [ ...income, ...expense ];

        // console.log(data)

        // tri tableau par date
        data.sort(function compare(a, b) {
          if (a.date > b.date)
             return -1;
          if (a.date < b.date )
             return 1;
          return 0;
        });

        // 5 derniers événements
        let last = data.slice(Math.max(data.length - 6, 0));

        // derniere operation
        const userLastOperation = last.shift();

        setBalance(Math.round(total)); // calcul du solde
        setAccountData(data); // tableau d'affichage du compte
        setIncomeData(income); // tableau d'affichage du compte
        setExpenseData(expense); // tableau d'affichage du compte
        setLastFiveData(last); // 5 dernièrs enregistrement
        setLastOperation(userLastOperation); // 5 dernièrs enregistrement

    }, [user]);


    return (
        
        <NavigationContainer>
            <StatusBar
                backgroundColor="#aa1010"
            />
            <TabNavigator user={user} userList={userList} setUser={setUser} balance={balance} accountData={accountData} incomeData={incomeData} expenseData={expenseData} lastFiveData={lastFiveData} lastOperation={lastOperation} />
        </NavigationContainer>

    );
}
 