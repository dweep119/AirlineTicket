import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 5,
    flexDirection: "row",
  },
  billTo: {
    marginTop: 5,
    fontFamily: 'Helvetica-Oblique',
  },
  billTo2: {
    marginTop: 1,
    fontFamily: 'Helvetica-Oblique',
  },
  billTo3: {
    marginTop: 1,
    textAlign: 'center',
    fontFamily: 'Helvetica-Oblique',
  },
  to_invoice: {
    width: '50%',
    marginTop: 5,
    border: 1,
    borderRadius: 2,
    padding:'10px',
  },
  to_invoiceDate: {
    width: '50%',
    marginTop: 8,
    marginLeft: 35,
    border: 1,
    borderRadius: 2,
    padding:'10px',
  },
  to_invoice1: {
    width: '40%',
    marginTop: 5,
  },
  to_invoice2: {
    width: '20%',
    marginTop: 5,
  },
  to_invoice3: {
    width: '40%',
    marginTop: 5,
  },
});

const BillTo = ({ invoice, today }) => (
  <>
    <View style={styles.headerContainer}>
      <div style={styles.to_invoice}>
        <Text style={styles.billTo}>{"Name: "} {invoice.customer_name}</Text>
        <Text>{"Mobile: "} {invoice.customer_mobile}</Text>
        <Text>{"Email: "}{invoice.customer_email}</Text>
        <Text>{"Airlines: "}{invoice.customer_airline}</Text>
      </div>
      <div style={styles.to_invoiceDate}>
        <Text>{"PNR: "}{invoice.pnr}</Text>
        <Text>{"Booking Ref. No. : "}{invoice.ref_no}</Text>
        <Text>{"Booked On : "} {invoice.booked}</Text>
        <Text>{"Status : "}{invoice.status}</Text>
      </div>

    </View>
    <br></br>
    <br></br>
    <br></br>
    <View style={styles.headerContainer}>
      <div style={styles.to_invoice1}>
        <Text style={styles.billTo3}>{invoice.from}</Text>
      </div>
      <div style={styles.to_invoice2}>
        <Text style={styles.billTo3}>{invoice.flightNo}</Text>
      </div>
      <div style={styles.to_invoice3}>
        <Text style={styles.billTo3}>{invoice.to}</Text>
      </div>
    </View>
    <View style={styles.headerContainer}>
      <div style={styles.to_invoice1}>
        <Text style={styles.billTo2}>{invoice.depDate},{invoice.depTime}</Text>
      </div>
      <div style={styles.to_invoice2}>
        <Text style={styles.billTo2}>-----------------------</Text>
      </div>
      <div style={styles.to_invoice3}>
      <Text style={styles.billTo2}>{invoice.arrDate},{invoice.arrTime}</Text>
      </div>
    </View>

  </>
);

export default BillTo