import React from 'react';
import { Text, View, Image, StyleSheet } from '@react-pdf/renderer';
import logo from '../assets/images/Spicejet.png';
import logo2 from '../assets/images/Indigo.png';
import logo3 from '../assets/images/Air-asia-logo2.png';
import logo4 from '../assets/images/Vistara_Logo.png';
import logo5 from '../assets/images/go-first.png';

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
    width: 100,
    height: 80,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '10px',
  },
  logo_vistara: {
    width: 180,
    height: 70,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '10px',
  },
  logo_spicejet: {
    width: 180,
    height: 80,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '10px',
  },
  logo_indigo: {
    width: 150,
    height: 80,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '10px',
  },
  logo_go: {
    width: 100,
    height: 100,
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
    <div style={{ margin: 'auto' }}>
      {
        invoice.customer_airline == 'SpiceJet' ?
          <Image style={styles.logo_spicejet} src={logo} />
          :
          invoice.customer_airline == 'Indigo' ?
            <Image style={styles.logo_indigo} src={logo2} />
            :
            invoice.customer_airline == 'AirAsia' ?
              <Image style={styles.logo} src={logo3} />
              :
              invoice.customer_airline == 'Vistara' ?
                <Image style={styles.logo_vistara} src={logo4} />
                :
                invoice.customer_airline == 'GoFirst' ?
                  <Image style={styles.logo} src={logo5} />
                  : null
      }
    </div>
  </View>
);
export default BillFrom