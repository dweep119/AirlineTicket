import React from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
   
    titleContainer:{
        flexDirection: 'row',
        marginTop: 5,
    },
    invoiceTitle:{
        color: 'black',
        letterSpacing: 4,
        fontSize: 15,
        textAlign: 'center',
        marginLeft: 'auto',
        marginRight: 'auto' ,
        textTransform: 'uppercase',
        marginTop: '10px' ,
    }
  });


  const InvoiceTitle = ({title}) => (
    <View style={styles.titleContainer}>
        <Text style={styles.invoiceTitle}>{title}</Text>
    </View>
  );
  
  export default InvoiceTitle