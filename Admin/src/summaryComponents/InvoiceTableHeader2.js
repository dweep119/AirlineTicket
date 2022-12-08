import React from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const borderColor = '#71706E'
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderBottomColor: '#71706E',
        backgroundColor: '#000000',
        borderBottomWidth: 1,
        alignItems: 'center',
        height: 20,
        textAlign: 'center',
        fontStyle: 'bold',
        flexGrow: 1,
        color: '#FFFFFF',
    },
    travelDate: {
        width: '15%',
        textAlign: 'center',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        fontSize: 10,
        // paddingLeft: 8,
    },
    flightNo: {
        width: '14%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        textAlign: 'center',
        fontSize: 10,
        // paddingRight: 8,
    },
    from: {
        width: '13%',
        textAlign: 'center',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        fontSize: 10,
        // paddingRight: 8,
    },
    to: {
        width: '13%',
        textAlign: 'center',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        fontSize: 10,
        // paddingRight: 8,
    },
    depTime: {
        width: '10%',
        textAlign: 'center',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        fontSize: 10,
        // paddingRight: 8,
    },
    arrTime: {
        width: '10%',
        textAlign: 'center',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        fontSize: 10,
        // paddingRight: 8,
    },
    airline: {
        width: '10%',
        textAlign: 'center',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        fontSize: 10,
        // paddingRight: 8,
    },
    tourCode: {
        width: '15%',
        textAlign: 'center',
        fontSize: 10,
        // borderRightColor: borderColor,
        // borderRightWidth: 1,
        // paddingRight: 8,
    },
  
  });

  const InvoiceTableHeader2 = () => (
    <View style={styles.container}>
        <Text style={styles.travelDate}>TRAVEL DATE</Text>
        <Text style={styles.flightNo}>FLIGHT NO.</Text>  
        <Text style={styles.from}>FROM</Text>
        <Text style={styles.to}>TO</Text>
        <Text style={styles.depTime}>DEP TIME</Text>
        <Text style={styles.arrTime}>ARR TIME</Text>
        <Text style={styles.airline}>AIRLINE</Text>
        <Text style={styles.tourCode}>TOURCODE</Text>
    </View>
  );
  
  export default InvoiceTableHeader2