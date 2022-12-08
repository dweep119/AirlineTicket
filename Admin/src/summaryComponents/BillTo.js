import React from 'react';
import { Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import image1 from '../assets/images/blue.png'
import image2 from '../assets/images/red.png'
import image3 from '../assets/images/violet.png.png'
const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 2,
    flexDirection: "row",
  },
  image1: {
    width: 100,
    height: 50,
  },
  billTo: {
    marginTop: 5,
   
  },
  billTo2: {
    marginLeft:'40px',
  },
  billTo3: {
    marginTop: '20px',
    textAlign: 'center',
  },
  to_invoice: {
    width: '50%',
    marginTop: 5,
    border: 1,
    borderRadius: 2,
    padding: '10px',
  },
  to_invoice_bg_red: {
    width: '50%',
    marginTop: 5,
    border: 1,
    borderColor: '#FF0000',
    borderRadius: '20%',
    padding: '10px',
    backgroundColor: '#FF0000',
    color: '#FFFFFF'
  },
  to_invoice_bg_blue: {
    width: '50%',
    marginTop: 5,
    border: 1,
    borderColor: '#000080',
    borderRadius: '20%',
    padding: '10px',
    backgroundColor: '#000080',
    color: '#FFFFFF'
  },
  to_invoice_bg_yellow: {
    width: '50%',
    marginTop: 5,
    border: 1,
    borderColor: '#50174A',
    borderRadius: '20%',
    padding: '10px',
    backgroundColor: '#50174A',
    color: '#FFFFFF'
  },
  to_invoiceDate: {
    width: '50%',
    marginTop: 8,
    marginLeft: 35,
    border: 1,
    borderRadius: 2,
    padding: '10px',
  },
  to_invoiceDate_bg_red: {
    width: '50%',
    marginTop: 8,
    marginLeft: 40,
    border: 1,
    borderColor: '#FF0000',
    borderRadius: '20%',
    padding: '10px',
    backgroundColor: '#FF0000',
    color: '#FFFFFF'
  },
  to_invoiceDate_bg_blue: {
    width: '50%',
    marginTop: 8,
    marginLeft: 35,
    border: 1,
    borderColor: '#000080',
    borderRadius: '20%',
    padding: '10px',
    backgroundColor: '#000080',
    color: '#FFFFFF'
  },
  to_invoiceDate_bg_yellow: {
    width: '50%',
    marginTop: 8,
    marginLeft: 35,
    border: 1,
    borderColor: '#50174A',
    borderRadius: '20%',
    padding: '10px',
    backgroundColor: '#50174A',
    color: '#FFFFFF'
  },
  to_invoice1: {
    width: '40%',
    marginTop: 3,
  },
  to_invoice2: {
    width: '20%',
    marginTop: 3,
  },
  to_invoice3: {
    width: '40%',
    marginTop: 3,
  },
  image: {
    height: 10,
  },
});

const BillTo = ({ invoice, today }) => (
  <>
    <View style={styles.headerContainer}>
      <div style={invoice.customer_airline === 'SpiceJet' ? styles.to_invoice_bg_red : invoice.customer_airline === 'AirAsia' ? styles.to_invoice_bg_red :
        invoice.customer_airline === 'Vistara' ? styles.to_invoice_bg_yellow : styles.to_invoice_bg_blue}>
        <Text>{"Name: "} {invoice.customer_name}</Text>
        <Text>{"Mobile: "} {invoice.customer_mobile}</Text>
        <Text>{"Email: "}{invoice.customer_email}</Text>
        <Text>{"Airlines: "}{invoice.customer_airline}</Text>
      </div>
      <div style={invoice.customer_airline === 'SpiceJet' ? styles.to_invoiceDate_bg_red : invoice.customer_airline === 'AirAsia' ? styles.to_invoiceDate_bg_red :
        invoice.customer_airline === 'Vistara' ? styles.to_invoiceDate_bg_yellow : styles.to_invoiceDate_bg_blue}>
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
        <Text style={styles.billTo2}>{invoice.depDate},{invoice.depTime} Hrs</Text>
      </div>
      <div style={styles.to_invoice2}>
      {
        invoice.customer_airline === 'SpiceJet' ?
          <Image style={styles.image} src={image2} />
          :
          invoice.customer_airline === 'Indigo' ?
            <Image style={styles.image} src={image1} />
            :
            invoice.customer_airline === 'AirAsia' ?
              <Image style={styles.image} src={image2} />
              :
              invoice.customer_airline === 'Vistara' ?
                <Image style={styles.image} src={image3} />
                :
                invoice.customer_airline === 'GoFirst' ?
                  <Image style={styles.image} src={image1} />
                  : null
      }
      </div>
      <div style={styles.to_invoice3}>
        <Text style={styles.billTo2}>{invoice.arrDate},{invoice.arrTime} Hrs</Text>
      </div>
    </View>

  </>
);

export default BillTo