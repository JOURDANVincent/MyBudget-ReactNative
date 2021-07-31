import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, StatusBar, ScrollView, View, DrawerItemList, Text, Image } from 'react-native';
import { useForm, Controller } from "react-hook-form";

import {Picker} from '@react-native-picker/picker';

import HomeStackNavigator from '../navigations/HomeStackNavigator';


const Drawer = createDrawerNavigator();

const HomeDrawerNaviagator = ( props ) => {

    const { json, setJson, user, setUser, userList, accountData, balance, lastFiveData, lastOperation } = props

    // constantes formulaire
    const { control, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    let newUser = user;

    const updateUser = ( newUser) => {
        console.log(newUser)
        setUser(newUser);
    }

    return (

        <Drawer.Navigator 
            initialRouteName="HomeStack"
            drawerType={'slide'}
            drawerStyle={{backgroundColor: '#fff', borderRightColor: '#aa1010', borderRightWidth: 1}}
            drawerContent={(props) => {

                return (

                    <View 
                        {...props} setUser={setUser}
                        style={{ flex: 1, alignItems: 'center', paddingHorizontal: 15, paddingVertical: 100}}>
                        <Image
                            style={{ flex: 1, height: 180, resizeMode: 'contain'}}
                            source={require('../../assets/icon/userRed.png')}
                        />
                        <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#aa1010', marginVertical: 20, }}>{user}</Text>
                        <View style={styles.viewBox}>
                            <Text style={styles.txt}>Changer utilisateur</Text>
                            <View style={{width: '100%', }}>
                                <Controller
                                    control={control}
                                    render={({ field: { onChange, onBlur, newUser } }) => (
                                        <Picker
                                            // ref={iCategory}
                                            style={{ color: '#000'}}
                                            selectedValue={newUser}
                                            returnKeyType="submit" // bouton suivant
                                            // onSubmitEditing={() => {
                                            //     setUser(newUser);
                                            // }}
                                            onValueChange={(itemValue, itemIndex) => updateUser(userList[itemValue - 1]) 
                                        }>
                                            <Picker.Item label="utilisateur.." value="" />
                                            <Picker.Item label="Mayer Franklin" value="1" />
                                            <Picker.Item label="Ross Hess" value="2" />
                                            <Picker.Item label="rente" value="3" />
                                            <Picker.Item label="pension alimentaire" value="4" />
                                            <Picker.Item label="allocation chômage" value="5" />
                                            <Picker.Item label="prestations sociales" value="6" />
                                            <Picker.Item label="revenu foncier" value="7" />
                                            <Picker.Item label="revenu exceptionnel" value="8" />
                                            <Picker.Item label="autre revenu" value="9" />
                                        </Picker>
                                    )}
                                    name="category"
                                    rules={{ required: true }}
                                />
                            </View>
                            {errors.category && <Text style={{ color: 'red', }}>* champ requis..</Text>} 
                        </View>
                    </View>
                
                );
            }}
        >
            <Drawer.Screen name="HomeStack" >
                {props => <HomeStackNavigator {...props} user={user} json={json} balance={balance} lastFiveData={lastFiveData} lastOperation={lastOperation} />}
            </Drawer.Screen>
        </Drawer.Navigator>

    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        paddingTop: 15,
        paddingHorizontal: 10,
    },

    viewBox: { 
        flex: 1, 
        width: '100%', 
        backgroundColor: '#fff', 
        borderRadius: 10, 
        elevation: 3, 
        paddingVertical: 10, 
        paddingHorizontal: 15, 
        marginBottom: 5
    },

    txt: { 
        width: '100%', 
        fontSize: 18, 
        fontWeight: 'bold',
        color: '#444', 
        paddingLeft: 5, 
        textAlign: 'left', 
    },

    input: { 
        height: 40, 
        borderBottomColor: '#8885', 
        borderBottomWidth: 1, 
        textAlignVertical: 'center' 
    },

    
});


export default HomeDrawerNaviagator;