import React from 'react';
import { Page, Document, StyleSheet } from '@react-pdf/renderer';
// import InvoiceTitle from './InvoiceTitle'
import BillFrom from './BillFrom'
import BillTo from './BillTo'
// import InvoiceNo from './InvoiceNo'
import InvoiceItemsTable from './InvoiceItemsTable'
import InvoiceThankYouMsg from './InvoiceThankYouMsg'
import * as moment from 'moment'
// import logo from '../assets/images/AnjaliEnterpriselogo-removebg-preview.png';


const styles = StyleSheet.create({
    page: {
        fontFamily: 'Helvetica',
        fontSize: 11,
        paddingTop: 0,
        paddingLeft:15,
        paddingRight:15,
        lineHeight: 1.5,
        flexDirection: 'column',
    }, 
    logo: {
        width: 200,
        height: 90,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop:'10px',
    }
  });

  var today = new Date();
  let today1 = moment(today).format("DD-MM-YYYY");

  
  const Invoice = ({invoice}) => (
            <Document>
                <Page size="A4" style={styles.page}>
                    {/* <Image style={styles.logo} src={logo} /> */}
                    {/* <InvoiceTitle title='Quotation'/>
                    <InvoiceNo invoice={invoice}/> */}
                    <BillFrom invoice={invoice}/>
                    <BillTo invoice={invoice}/>
                    <InvoiceItemsTable invoice={invoice} />
                    <InvoiceThankYouMsg invoice={invoice}/>
                </Page>
            </Document>
        );
  
  export default Invoice