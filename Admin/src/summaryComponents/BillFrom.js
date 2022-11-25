import React from 'react';
import { Text, View, Image, StyleSheet } from '@react-pdf/renderer';
import logo from '../assets/images/AnjaliEnterpriselogo-removebg-preview.png';

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 5,
    flexDirection: "row",
  },
  billTo: {
    marginTop: 5,
    marginLeft: 60,
    paddingBottom: 3,
    fontFamily: 'Helvetica-Oblique',
  },
  billAddress: {
    width: 170,
    marginLeft: 60,
  },
  to_invoice: {
    marginLeft: 200,
    marginTop: 5,
  },
  logo: {
    width: 90,
    height: 80,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '10px',
  },
  companyName: {
    fontSize: 25,
    marginLeft: 20
  },
  specialist: {
    marginTop: 5,
    marginLeft: 10,
    paddingBottom: 3,
    fontFamily: 'Helvetica-Oblique',
  },
  details: {
    marginLeft: 10,
    fontSize: 8,
  },
  companyAddress: {
    marginTop: 45,
    width: 160,
    fontSize: 10,
  },
  companyMobile: {
    width: 160,
    fontSize: 10,
  }
});

const BillFrom = ({ invoice }) => (
  <View style={styles.headerContainer}>
    <div>
      <Image style={styles.logo} src={logo} />
    </div>
    <div>
      <Text style={styles.companyName}>ANJALI ENTERPRISE</Text>
      <Text style={styles.specialist}>Specialist in:</Text>
      <Text style={styles.details}>Maintenance and all kind of Pipeline & Fabication work.</Text>
      <Text style={styles.details}>Construction Planning, Designing, Colour, P.O.P, Furniture & Tiles</Text>
    </div>
    <div>
      <Text style={styles.companyAddress}>{"Address: "} {invoice.address}</Text>
      <Text style={styles.companyMobile}>{"Mobile: "}{invoice.phone}</Text>
    </div>
    {/* <div style={styles.to_invoice}>
      <Text style={styles.billTo}>To:</Text>
      <Text >{invoice.customer_name}</Text>
      <Text style={styles.billAddress}>{"Address: "} {invoice.customer_address}</Text>
      <Text>{"Email: "}{invoice.customer_email}</Text>
      <Text>{"Phone: "}{invoice.customer_phone}</Text>
    </div> */}
  
  </View>
);

export default BillFrom