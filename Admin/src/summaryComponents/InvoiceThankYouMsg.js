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
        fontSize: 9,
    },
    specificationTitle: {
        fontSize: 11,
        fontWeight: 700,
        fontStyle: 'bold',
    },
    specificationTitle_f9: {
        fontSize: 9,
        fontWeight: 700,
        fontStyle: 'bold',
    },
    specificationTitle_w80: {
        fontSize: 11,
        fontWeight: 700,
        fontStyle: 'bold',
        width: 90,
    },
    specificationItems_w80: {
        flexDirection: 'column',
        marginTop: 3,
        // marginLeft: 15,
        fontSize: 9,
        width: 90,
    },
    specificationTitle_mt10_w80: {
        fontSize: 12,
        fontWeight: 700,
        fontStyle: 'bold',
        marginTop: '10px',
        width: 90,
    },
    specificationTitle_mt10_fs_w80: {
        fontSize: 13,
        fontWeight: 700,
        fontStyle: 'bold',
        marginTop: '10px',
        width: 90,
    },




    specificationTitle_w20: {
        fontSize: 9,
        fontWeight: 700,
        fontStyle: 'bold',
        width: 10,
        marginTop: 3,
        marginLeft: '55px',
    },
    specificationItems_w20: {
        flexDirection: 'column',
        marginTop: 3,
        // marginLeft: 15,
        fontSize: 9,
        width: 10,
        marginLeft: '55px',
    },
    specificationTitle_mt10_w20: {
        fontSize: 12,
        fontWeight: 700,
        fontStyle: 'bold',
        marginTop: '10px',
        width: 10,
        marginLeft: '55px',
    },
    specificationTitle_mt10_fs_w20: {
        fontSize: 13,
        fontWeight: 700,
        fontStyle: 'bold',
        marginTop: '10px',
        width: 10,
        marginLeft: '55px',
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
        fontSize: 9,
        marginTop: '20px',
    },
    contactInfoTitle: {
        fontSize: 9,
        marginTop: '70px',
    },
    specificationTitle2: {
        borderBottom: 1,
        marginTop: 5,
        fontSize: 11,
    },
    width60: {
        width: '63%',
        flexDirection: "column",
    },
    width40: {
        width: '37%',
        flexDirection: "column",
    },
    d_col: {
        flexDirection: "row",
    },
});
const InvoiceThankYouMsg = ({ invoice }) => (
    <>
        <View style={styles.titleContainer2}>
            <div style={styles.width60}>
                <Text style={styles.specificationTitle}>
                    Base Fare +  Fuel Surcharge:-
                </Text>
                <div style={styles.d_col} >
                    <Text style={styles.specificationItems_w80}>
                        <li>Base Fare (89%):</li>
                    </Text>
                    <Text style={styles.specificationTitle_w20}>
                        <li>36250.0</li>
                    </Text>
                </div>
                <div style={styles.d_col} >
                    <Text style={styles.specificationItems_w80}>
                        <li> Fuel Surcharge :</li>
                    </Text>
                    <Text style={styles.specificationItems_w20}>
                        <li> 0</li>
                    </Text>
                </div>

                <Text style={styles.specificationTitle_mt10}>
                    Other Fees and Taxes:-
                </Text>

                <div style={styles.d_col}>
                    <Text style={styles.specificationItems_w80}>
                        <li>Passenger Service Fee:</li>
                    </Text>
                    <Text style={styles.specificationItems_w20}>
                        <li> 0</li>
                    </Text>
                </div>
                <div style={styles.d_col}>
                    <Text style={styles.specificationItems_w80}>
                        <li>Service Charge and Taxes (7%):</li>
                    </Text>
                    <Text style={styles.specificationItems_w20}>
                        <li>2200.00</li>
                    </Text>
                </div>
                <div style={styles.d_col}>
                    <Text style={styles.specificationItems_w80}>
                        <li>Cute Fee (4%)</li>
                    </Text>
                    <Text style={styles.specificationItems_w20}>
                        <li>550.00</li>
                    </Text>
                </div>

                <div style={styles.d_col}>

                    <Text style={styles.specificationItems_w80}>
                        <li>Infant Fee :</li>
                    </Text>
                    <Text style={styles.specificationItems_w20}>
                        <li>0</li>
                    </Text>
                </div>

                <Text style={styles.specificationTitle_mt10_w80}>
                    <li>SSR Details:-</li>
                </Text>

                <div style={styles.d_col}>
                    <Text style={styles.specificationItems_w80}>

                        <li>Baggage:</li>
                    </Text>
                    <Text style={styles.specificationItems_w20}>

                        <li>0</li>
                    </Text>
                </div>
                <div style={styles.d_col}>
                    <Text style={styles.specificationItems_w80}>
                        <li>Meals:</li>
                    </Text>
                    <Text style={styles.specificationItems_w20}>
                        <li>0</li>
                    </Text>
                </div>
                <div style={styles.d_col}>
                    <Text style={styles.specificationItems_w80}>

                        <li>Seats:</li>
                    </Text>
                    <Text style={styles.specificationItems_w20}>

                        <li>0</li>
                    </Text>
                </div>
                <div style={styles.d_col}>
                    <Text style={styles.specificationItems_w80}>

                        <li>Bag Out First:</li>
                    </Text>
                    <Text style={styles.specificationItems_w20}>
                        <li>0</li>
                    </Text>
                </div>

                <div style={styles.d_col}>
                    <Text style={styles.specificationItems_w80}>

                        <li>Priority Check-in :</li>
                    </Text>
                    <Text style={styles.specificationItems_w20}>

                        <li>0</li>
                    </Text>
                </div>

                <div style={styles.d_col}>
                    <Text style={styles.specificationTitle_mt10_fs_w80}>

                        <li>Total Price :</li>
                    </Text>
                    <Text style={styles.specificationTitle_mt10_fs_w20}>

                        <li>39,000</li>
                    </Text>
                </div>

                <div style={styles.d_col}>
                    <Text style={styles.specificationItems_w80}>
                        <li>Discount:</li>
                    </Text>
                    <Text style={styles.specificationItems_w20}>
                        <li>0</li>
                    </Text>
                </div>

            </div>

            <div style={styles.width40}>
                <Text style={styles.contactInfoTitle}>
                    Passenger Contact Information
                </Text>
                <Link
                    style={styles.specificationTitle_f9}
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
                <Text style={styles.specificationTitle_f9}>
                    +91 987 180 3333 | +91 965 400 3333
                </Text>
                <Text style={styles.contactUsTitle}>
                    From Within india :
                </Text>
                <Text style={styles.specificationTitle_f9}>
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