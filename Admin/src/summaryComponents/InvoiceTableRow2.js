import React, { Fragment } from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const borderColor = '#71706E'
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        borderBottomColor: '#71706E',
        borderBottomWidth: 1,
        alignItems: 'center',
        height: 20,
        fontStyle: 'bold',
        textAlign: 'center',
    },
    travelDate: {
        width: '15%',
        textAlign: 'center',
        borderRightColor: borderColor,
        height: 20,
        borderRightWidth: 1,
        // paddingLeft: 8,
    },
    flightNo: {
        width: '14%',
        borderRightColor: borderColor,
        height: 20,
        borderRightWidth: 1,
        textAlign: 'center',
    },

    from: {
        width: '13%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        textAlign: 'center',
        height: 20,
    },
    to: {
        width: '13%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        textAlign: 'center',
        height: 20,
        // paddingRight: 8,
    },
    depTime: {
        width: '10%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        textAlign: 'center',
        height: 20,
        // paddingRight: 8,
    },
    arrTime: {
        width: '10%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        textAlign: 'center',
        height: 20,
        // paddingRight: 8,
    },
    airline: {
        width: '10%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        textAlign: 'center',
        height: 20,
        // paddingRight: 8,
    },
    tourCode: {
        width: '15%',
        // borderRightColor: borderColor,
        // borderRightWidth: 1,
        textAlign: 'center',
        height: 20,
        // paddingRight: 8,
    },

});

const InvoiceTableRow2 = ({ item }) => {
    console.log('item: InvioceTableRow2', item);
    return (
        <View style={styles.row}>
            <Text style={styles.travelDate}>{item?.depDate}</Text>
            <Text style={styles.flightNo}>{item?.flightNo}</Text>
            <Text style={styles.from}>{item?.from}</Text>
            <Text style={styles.to}>{item?.to}</Text>
            <Text style={styles.depTime}>{item?.depTime}</Text>
            <Text style={styles.arrTime}>{item?.arrTime}</Text>
            <Text style={styles.airline}>{item?.customer_airline}</Text>
            <Text style={styles.tourCode}>NIL</Text>
        </View>
    );
};

export default InvoiceTableRow2