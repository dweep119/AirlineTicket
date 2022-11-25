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
        <Text style={styles.specificationTitle}>
            Base Fare +  Fuel Surcharge
        </Text>
        <Text style={styles.specificationItems}>
            <li>Base Fare (89%):  36250.0</li>
        </Text>
        <Text style={styles.specificationItems}>
            <li>                  :  0</li>
        </Text>
        <Text style={styles.specificationItems}>
            <li> Fuel Surcharge :  0</li>
        </Text>
        <Text style={styles.specificationTitle}>
            Other Fees and Taxes:-
        </Text>
        <Text style={styles.specificationItems}>
            <li>Passenger Service Fee:  0</li>
        </Text>
        <Text style={styles.specificationItems}>
            <li>Service Charge and Taxes (7%):  2200.00</li>
        </Text>
        <Text style={styles.specificationItems}>
            <li>Cute Fee (4%) : 550.00</li>
        </Text>
        <Text style={styles.specificationItems}>
            <li>Infant Fee : 0 </li>
        </Text>
        <Text style={styles.specificationTitle}>
            <li>SSR Details</li>
        </Text>
        <Text style={styles.specificationItems}>

            <li>Baggage : 0</li>
        </Text>
        <Text style={styles.specificationItems}>

            <li>Meals : 0 </li>
        </Text>
        <Text style={styles.specificationItems}>

            <li>Seats : 0</li>
        </Text>
        <Text style={styles.specificationItems}>

            <li>Bag Out First : 0</li>
        </Text>
        <Text style={styles.specificationItems}>

            <li>Priority Check-in : 0</li>
        </Text>
        <Text style={styles.specificationTitle}>

            <li>Total Price : 39,000 </li>
        </Text>
        <Text style={styles.specificationItems}>

            <li>Discount: 0</li>
        </Text>

        <Text style={styles.reportTitle}>*Special Conditions: Hand Baggage Only fare, No check-in baggage allowance included. If a passenger wishes to check-in baggage at the 
airport, a fare type change fee of INR 400/- shall be chargeable at the airport.</Text>
    </View>
);

export default InvoiceThankYouMsg