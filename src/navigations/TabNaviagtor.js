import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeDrawerNavigator from '../navigations/HomeDrawerNavigator';
import AccountScreen from '../screens/AccountScreen';
import StatScreen from '../screens/StatScreen';

import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';


const Tab = createBottomTabNavigator();


const TabNavigator = ( props, { route } ) => { 

    const { user, setUser, userList, accountData, incomeData, expenseData, balance, lastFiveData, lastOperation } = props;

    // console.log(ro/ute)

    return (

        <Tab.Navigator
            tabBarOptions={
                { 
                activeBackgroundColor: '#aa1010',
                inactiveBackgroundColor: '#881010',
                activeTintColor: 'white',
                inactiveTintColor: '#fff',
                labelPosition: 'below-icon', 
                labelStyle: {fontSize: 12},
                tabStyle: { borderTopColor: '#aa1010', borderTopWidth: 1},
                keyboardHidesTabBar: true,
                }
            }  
        >
            <Tab.Screen 
                name="HomeStack" 
                options={{ 
                    title: 'Accueil',
                    tabBarIcon: ({ route}) => <Ionicons name={'home'} size={28} color={'white'} />
                }}
            >
                {props => <HomeDrawerNavigator {...props} user={user} setUser={setUser} userList={userList} balance={balance} accountData={accountData} lastFiveData={lastFiveData} lastOperation={lastOperation}  />}
            </Tab.Screen>
            <Tab.Screen 
                name="Account"
                options={{ 
                    title: 'Compte',
                    tabBarIcon: ({ route}) => <Ionicons name={'bank-outline'} size={28} color={'white'} />
                }}  
            >
                {props => <AccountScreen {...props} user={user} accountData={accountData} incomeData={incomeData} expenseData={expenseData} balance={balance} lastOperation={lastOperation} />}
            </Tab.Screen>
            <Tab.Screen 
                name="Stat"  
                options={{ 
                    title: 'Statistiques',
                    tabBarIcon: ({ route}) => <Ionicons name={'chart-areaspline'} size={28} color={'white'} />
                }}
            >
                {props => <StatScreen {...props} user={user} accountData={accountData} balance={balance} />}
            </Tab.Screen>
        </Tab.Navigator>

    );
};

export default TabNavigator