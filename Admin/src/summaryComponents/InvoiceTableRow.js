import React, { Fragment } from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const borderColor = '#71706E'
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        borderBottomColor: '#71706E',
        borderBottomWidth: 1,
        alignItems: 'center',
        height: 30,
        fontStyle: 'bold',
        textAlign: 'center',
    },
    passengerName: {
        width: '35%',
        textAlign: 'center',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        height: 30,
        paddingTop: '10px',
    },
    flight: {
        width: '25%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        textAlign: 'center',
        paddingTop: '10px',
        height: 30,
    },

    fareType: {
        width: '15%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        textAlign: 'center',
        paddingTop: '10px',
        height: 30,
    },
    addOnServices: {
        width: '25%',
        textAlign: 'center',
        paddingTop: '10px',
        height: 30,
    },
});

const InvoiceTableRow = ({ items }) => {
    const rows = items.passengers.map((item, index) =>
        <View style={styles.row} key={index}>
            <Text style={styles.passengerName}>{item.name}</Text>
            <Text style={styles.flight}>{items.flightNo}</Text>
            <Text style={styles.fareType}>Basic</Text>
            <Text style={styles.addOnServices}></Text>
        </View>
    )
    return (<Fragment>{rows}</Fragment>)
};

export default InvoiceTableRow