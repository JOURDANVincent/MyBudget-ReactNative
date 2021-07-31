import React, { useState, useEffect, useRef } from 'react';

import { StyleSheet, View, ScrollView, Text, TextInput, TouchableOpacity, Button, Platform, Image,  } from 'react-native'
import { useForm, Controller } from "react-hook-form";

import {Picker} from '@react-native-picker/picker';
import moment from "moment";


function ExpenseScreen( props ){

    // constantes props et nav
    const { navigation, json, setJson } = props;

    // constantes formulaire
    const { control, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const actualDate= moment().format("DD/MM/YYYY");

    const iFirstname = useRef(null);
    const iLastname = useRef(null);
    const iAmount = useRef(null);
    const iDate = useRef(null);
    const iCategory = useRef(null);
    const iComment = useRef(null);


    return (
        
        <ScrollView>
            <View style={ styles.container }>

                <Text style={{ width: '100%', color: '#aa1010', fontSize: 22, fontWeight: 'bold', paddingLeft: 5, marginBottom: 10, textAlign: 'left'}}>Nouvelle dépense</Text>
                
                <View style={styles.viewBox}>
                    <Text style={styles.txt}>Prénom</Text>
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                ref={iFirstname}
                                style={styles.input}
                                onBlur={onBlur}
                                onChangeText={value => onChange(value)}
                                value={value}
                                returnKeyType="next" // bouton suivant
                                onSubmitEditing={() => {
                                    iLastname.current.focus();
                                }}
                                placeholder="prénom.."
                            />
                        )}
                        name="firstName"
                        rules={{ required: true }}
                        defaultValue=""
                    />
                    {errors.firstName && <Text>This is required.</Text>}
                </View>

                <View style={styles.viewBox}>
                    <Text style={styles.txt}>Nom</Text>
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                ref={iLastname}
                                style={styles.input}
                                onBlur={onBlur}
                                onChangeText={value => onChange(value)}
                                value={value}
                                returnKeyType="next" // bouton suivant
                                onSubmitEditing={() => {
                                    iAmount.current.focus();
                                }}
                                placeholder="nom.."
                            />
                        )}
                        name="lastName"
                        rules={{ required: true }}
                        defaultValue=""
                    />
                    {errors.lastName && <Text>This is required.</Text>}
                </View>

                <View style={styles.viewBox}>
                    <Text style={styles.txt}>Montant</Text>
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                ref={iAmount}
                                style={styles.input}
                                onBlur={onBlur}
                                onChangeText={value => onChange(value)}
                                value={value}
                                returnKeyType="next" // bouton suivant
                                onSubmitEditing={() => {
                                    iDate.current.focus();
                                }}
                                placeholder="montant.."
                            />
                        )}
                        name="amount"
                        rules={{ required: true }}
                        defaultValue=""
                    />
                    {errors.amount && <Text>This is required.</Text>}
                </View>
                
                <View style={styles.viewBox}>
                    <Text style={styles.txt}>Date</Text>
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                ref={iDate}
                                style={styles.input}
                                onBlur={onBlur}
                                onChangeText={value => onChange(value)}
                                value={value}
                                returnKeyType="next" // bouton suivant
                                onSubmitEditing={() => {
                                    iCategory.current.focus();
                                }}
                                placeholder="date.."
                                keyboardType='numeric'
                            />
                        )}
                        name="date"
                        rules={{ required: true }}
                        defaultValue={actualDate}
                    />
                    {errors.amount && <Text>This is required.</Text>}
                </View>
                
                <View style={styles.viewBox}>
                    <Text style={styles.txt}>Catégories</Text>
                    <View style={{width: '100%', }}>
                        <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, category } }) => (
                                <Picker
                                    ref={iCategory}
                                    style={{ color: '#000'}}
                                    selectedValue={category}
                                    returnKeyType="submit" // bouton suivant
                                    // onSubmitEditing={() => {
                                    //     iLastname.current.focus();
                                    // }}
                                    onValueChange={(itemValue, itemIndex) => onChange(itemValue) 
                                }>
                                    <Picker.Item label="catégories.." value="" />
                                    <Picker.Item label="alimentaires" value="1" />
                                    <Picker.Item label="factures" value="2" />
                                    <Picker.Item label="transport" value="3" />
                                    <Picker.Item label="logement" value="4" />
                                    <Picker.Item label="santé" value="5" />
                                    <Picker.Item label="divertissement" value="6" />
                                    <Picker.Item label="vacances" value="7" />
                                    <Picker.Item label="shoppoing" value="8" />
                                    <Picker.Item label="autre revenu" value="9" />
                                </Picker>
                            )}
                            name="category"
                            rules={{ required: true }}
                            defaultValue=""
                        />
                    </View>
                    {errors.category && <Text>This is required.</Text>} 
                </View>

                <View style={[styles.viewBox, {minHeight: 100 }]}>
                    <Text style={styles.txt}>Commentaire</Text>
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                ref={iComment}
                                style={[styles.input, { height: 80, textAlignVertical: 'top' }]}
                                onBlur={onBlur}
                                onChangeText={value => onChange(value)}
                                value={value}
                                multiline={true}
                                numberOfLines={3}
                                placeholder="commentaire.."
                            />
                        )}
                        name="comment"
                        rules={{  }}
                        defaultValue=""
                    />
                    {errors.comment && <Text>This is required.</Text>}
                </View>
                

                <TouchableOpacity
                    style={{ backgroundColor: '#aa1010dd', borderColor: 'red', borderWidth: 1, marginVertical: 20, paddingVertical: 5, paddingHorizontal: 35, borderRadius: 10, elevation: 5}}
                    onPress={handleSubmit(onSubmit)}
                >
                    <Text style={{ color: '#fff', fontSize: 20 }}>Ajouter revenu</Text>
                </TouchableOpacity>

            </View>
        </ScrollView>
    )

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
        height: 90, 
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


export default ExpenseScreen;