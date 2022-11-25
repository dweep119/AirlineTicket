import React, {Fragment} from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const borderColor = '#90e5fc'
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        borderBottomColor: '#bff0fd',
        borderBottomWidth: 1,
        alignItems: 'center',
        height: 80,
        fontStyle: 'bold',
        color: 'white'
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

const InvoiceTableBlankSpace = ({rowsCount}) => {
    const blankRows = Array(rowsCount).fill(0)
    const rows = blankRows.map( (x, i) => 
        <View style={styles.row} key={`BR${i}`}>
        <Text style={styles.passengerName}>-</Text>
        <Text style={styles.flight}>-</Text>  
        <Text style={styles.fareType}>-</Text>
        <Text style={styles.addOnServices}>-</Text>
        </View>
    )
    return (<Fragment>{rows}</Fragment> )
};
  
export default InvoiceTableBlankSpace