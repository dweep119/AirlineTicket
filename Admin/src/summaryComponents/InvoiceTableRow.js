import React, { Fragment } from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const borderColor = '#90e5fc'
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        borderBottomColor: '#bff0fd',
        borderBottomWidth: 1,
        alignItems: 'center',
        height: 85,
        fontStyle: 'bold',
        textAlign: 'center',
    },
    passengerName: {
        width: '35%',
        textAlign: 'center',
        borderRightColor: borderColor,
        height: 85,
        borderRightWidth: 1,
        // paddingLeft: 8,
    },
    flight: {
        width: '25%',
        borderRightColor: borderColor,
        height: 85,
        borderRightWidth: 1,
        textAlign: 'left',
        paddingLeft: 5,
        fontSize: 9,
        paddingTop: 4
    },

    fareType: {
        width: '15%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        textAlign: 'center',
        height: 85,
        // paddingRight: 8,
    },
    addOnServices: {
        width: '25%',
        // borderRightColor: borderColor,
        // borderRightWidth: 1,
        textAlign: 'center',
        // paddingRight: 8,
    },
});

const InvoiceTableRow = ({ items }) => {
    console.log('items: ', items);
    const rows = items.map((item, index) =>
        <View style={styles.row} key={index}>
            <Text style={styles.passengerName}>{item.passengers}</Text>
            <Text style={styles.flight}>{item.flightNo}</Text>
            <Text style={styles.fareType}>Basic</Text>
            <Text style={styles.addOnServices}>abcd</Text>
        </View>
    )
    return (<Fragment>{rows}</Fragment>)
};

export default InvoiceTableRow