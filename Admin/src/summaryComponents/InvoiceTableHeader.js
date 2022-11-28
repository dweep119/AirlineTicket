import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const borderColor = '#71706E'
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderBottomColor: '#71706E',
        backgroundColor: '#000000',
        borderBottomWidth: 1,
        alignItems:'center',
        height: 24,
        textAlign: 'center',
        fontStyle: 'bold',
        flexGrow: 1,
        color: '#FFFFFF',
    },
    passengerName: {
        width: '35%',
        textAlign: 'center',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        // paddingLeft: 8,
    },
    flight: {
        width: '25%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        textAlign: 'center',
        // paddingRight: 8,
    },
    fareType: {
        width: '15%',
        textAlign: 'center',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        // paddingRight: 8,
    },
    addOnServices: {
        width: '25%',
        textAlign: 'center',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        // paddingRight: 8,
    },

});

const InvoiceTableHeader = () => (
    <View style={styles.container}>
        <Text style={styles.passengerName}>Passenger Name</Text>
        <Text style={styles.flight}>Flight</Text>
        <Text style={styles.fareType}>Fare Type</Text>
        <Text style={styles.addOnServices}>Add-On Services</Text>

    </View>
);

export default InvoiceTableHeader