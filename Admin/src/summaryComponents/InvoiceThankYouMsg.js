import React from 'react';
import { Text, View, StyleSheet, Link } from '@react-pdf/renderer';
const styles = StyleSheet.create({

    titleContainer: {
        flexDirection: 'column',
        marginTop: 12,
    },
    titleContainer2: {
        flexDirection: 'row',
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
        marginTop: 3,
        // marginLeft: 15,
        fontSize: 10,
    },
    specificationTitle: {
        fontSize: 11,
        fontWeight: 700,
        fontStyle: 'bold',
    },
    specificationTitle_last: {
        fontSize: 9,
        fontWeight: 700,
        fontStyle: 'bold',
    },
    specificationTitle_base: {
        fontSize: 12,
        fontWeight: 700,
        fontStyle: 'bold',
    },
    specificationTitle_mt10: {
        fontSize: 12,
        fontWeight: 700,
        fontStyle: 'bold',
        marginTop: '10px',
    },
    specificationTitle_mt10_fs: {
        fontSize: 13,
        fontWeight: 700,
        fontStyle: 'bold',
        marginTop: '10px',
    },
    contactUsTitle: {
        fontSize: 11,
        marginTop: '20px',
    },
    contactInfoTitle: {
        fontSize: 11,
        marginTop: '70px',
    },
    specificationTitle2: {
        borderBottom: 1,
        marginTop: 5,
        fontSize: 11,
    },
    width50: {
        width: '50%',
        flexDirection: "column",
    },
});
const InvoiceThankYouMsg = ({ invoice }) => (
    <>
        <View style={styles.titleContainer2}>
            <div style={styles.width50}>
                <Text style={styles.specificationTitle}>
                    Base Fare +  Fuel Surcharge:-
                </Text>
                <Text style={styles.specificationItems}>
                    <li>Base Fare (89%):  36250.0</li>
                </Text>
                {/* <Text style={styles.specificationItems}>
                    <li>                  :  0</li>
                </Text> */}
                <Text style={styles.specificationItems}>
                    <li> Fuel Surcharge :  0</li>
                </Text>
                <Text style={styles.specificationTitle_mt10}>
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
                <Text style={styles.specificationTitle_mt10}>
                    <li>SSR Details:-</li>
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
                <Text style={styles.specificationTitle_mt10_fs}>

                    <li>Total Price : 39,000 </li>
                </Text>
                <Text style={styles.specificationItems}>
                    <li>Discount: 0</li>
                </Text>
            </div>
            <div style={styles.width50}>
                <Text style={styles.contactInfoTitle}>
                    Passenger Contact Information
                </Text>
                <Link
                    style={styles.specificationTitle}
                    src="www.google.com"
                >
                    prathamtour@yahoo.co.in
                </Link>
                <Text style={styles.contactUsTitle}>
                    Please Contact us to update your contact
                    Information:
                </Text>
                <Text style={styles.contactUsTitle}>
                    From Outside india :
                </Text>
                <Text style={styles.specificationTitle}>
                    +91 987 180 3333 | +91 965 400 3333
                </Text>
                <Text style={styles.contactUsTitle}>
                    From Within india :
                </Text>
                <Text style={styles.specificationTitle}>
                    +91 987 180 3333 | +91 965 400 3333
                </Text>

            </div>
        </View>
        <View style={styles.titleContainer}>

            <Text style={styles.specificationTitle_last}>*Special Conditions: Hand Baggage Only fare, No check-in baggage allowance included. If a passenger wishes to check-in baggage at the
                airport, a fare type change fee of INR 400/- shall be chargeable at the airport.</Text>
        </View>

    </>
);

export default InvoiceThankYouMsg