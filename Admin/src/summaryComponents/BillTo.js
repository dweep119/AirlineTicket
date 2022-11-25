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
  to_invoice: {
    marginTop: 5,
  }
});

const BillTo = ({ invoice, today }) => (
  <View style={styles.headerContainer}>
    <div style={styles.to_invoice}>
      <Text style={styles.billTo}>{"To: "} {invoice.customer_name}</Text>
      <Text>{"Address: "} {invoice.customer_address}</Text>
      <Text>{"Phone: "}{invoice.customer_phone}</Text>
      <Text>{"Email: "}{invoice.customer_email}</Text>
      <Text>{"GST No: "}{invoice.customer_gstno}</Text>
      <Text>{"Date: "}{today}</Text>
    </div>
  
  </View>
);

export default BillTo