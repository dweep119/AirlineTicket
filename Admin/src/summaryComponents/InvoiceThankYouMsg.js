import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
const styles = StyleSheet.create({

    titleContainer: {
        flexDirection: 'column',
        marginTop: 12,
    },
    reportTitle: {
        fontSize: 12,
        textAlign: 'center',
        textTransform: 'uppercase',
        marginTop: 10,

    },
    specificationItems: {
        flexDirection: 'column',
        marginTop: 5,
        marginLeft: 15,
        fontSize: 9,
    },
    specificationTitle: {
        borderBottom: 1,
        fontSize: 11,
    },
    specificationTitle2: {
        borderBottom: 1,
        marginTop: 5,
        fontSize: 11,
    },
});
const InvoiceThankYouMsg = ({invoice}) => (
    <View style={styles.titleContainer}>
        <Text style={styles.reportTitle}>Thank you for Business!</Text>
    </View>
);

export default InvoiceThankYouMsg