import React, { Fragment } from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    invoiceDateContainer: {
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'flex-end'
    },
    invoiceDate: {
            fontSize: 12,
            fontStyle: 'bold',
    },
    label: {
        width: 60
    }
    
  });
const InvoiceNo = ({invoice}) => (
        <Fragment>
            <View style={styles.invoiceDateContainer}>
                <Text style={styles.label}>Date:</Text>
                <Text >{invoice.trans_date}</Text>
            </View >
        </Fragment>
  );
  
  export default InvoiceNo