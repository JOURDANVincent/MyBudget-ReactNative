import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Header from '../components/Header';
import HomeScreen from '../screens/HomeScreen';
import IncomeScreen from '../screens/IncomeScreen';
import ExpenseScreen from '../screens/ExpenseScreen';


const Stack = createStackNavigator();


const HomeStackNavigator = ( props ) => {

    const { json, setJson, user, accountData, balance, lastFiveData, lastOperation } = props

    return (

        <Stack.Navigator
            initialRouteName="Home"
        >

            <Stack.Screen
                name="Home"
                options={{ 
                    header: (props) => <Header {...props} user={user} balance={balance} lastOperation={lastOperation} />,
                    title: 'Accueil'
                }}
            >
                {props => <HomeScreen {...props} json={json} lastFiveData={lastFiveData} lastOperation={lastOperation}/>}
            </Stack.Screen>

            <Stack.Screen 
                name="Income" 
                options={{ 
                    header: (props) => <Header {...props} user={user} lastOperation={lastOperation}/>,
                    title: 'Revenus'
                }}
            >
                {props => <IncomeScreen {...props} lastFiveData={lastFiveData} accountData={accountData} />}
            </Stack.Screen>
            <Stack.Screen 
                name="Expense" 
                options={{ 
                    header: (props) => <Header {...props} user={user} lastOperation={lastOperation}/>,
                    title: 'Dépenses'
                }}
            >
                {props => <ExpenseScreen {...props} lastFiveData={lastFiveData} accountData={accountData} />}
            </Stack.Screen>
        
        </Stack.Navigator>

    );
};

export default HomeStackNavigator;
