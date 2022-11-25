import React from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const borderColor = '#90e5fc'
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderBottomColor: '#bff0fd',
        backgroundColor: '#bff0fd',
        borderBottomWidth: 1,
        alignItems: 'center',
        height: 24,
        textAlign: 'center',
        fontStyle: 'bold',
        flexGrow: 1,
    },
    travelDate: {
        width: '20%',
        textAlign: 'center',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        // paddingLeft: 8,
    },
    flightNo: {
        width: '10%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        textAlign: 'center',
        // paddingRight: 8,
    },
    from: {
        width: '10%',
        textAlign: 'center',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        // paddingRight: 8,
    },
    to: {
        width: '10%',
        textAlign: 'center',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        // paddingRight: 8,
    },
    depTime: {
        width: '10%',
        textAlign: 'center',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        // paddingRight: 8,
    },
    arrTime: {
        width: '10%',
        textAlign: 'center',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        // paddingRight: 8,
    },
    airline: {
        width: '10%',
        textAlign: 'center',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        // paddingRight: 8,
    },
    tourCode: {
        width: '10%',
        textAlign: 'center',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        // paddingRight: 8,
    },
  
  });

  const InvoiceTableHeader2 = () => (
    <View style={styles.container}>
        <Text style={styles.passengerName}>TRAVEL DATE</Text>
        <Text style={styles.flight}>FLIGHT NO.</Text>  
        <Text style={styles.fareType}>FROM/TERMINAL</Text>
        <Text style={styles.addOnServices}>Add-On Services</Text>

    </View>
  );
  
  export default InvoiceTableHeader2