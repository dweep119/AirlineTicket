import React from 'react';
import { View, StyleSheet } from '@react-pdf/renderer';
import InvoiceTableHeader from './InvoiceTableHeader'
import InvoiceTableRow from './InvoiceTableRow'
import InvoiceTableHeader2 from './InvoiceTableHeader2';
import InvoiceTableRow2 from './InvoiceTableRow2';
const styles = StyleSheet.create({
  tableContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 24,
    borderWidth: 1,
    borderColor: '#71706E',
  },
});

const InvoiceItemsTable = ({ invoice }) => (
  <>
    <View style={styles.tableContainer}>
      <InvoiceTableHeader />
      <InvoiceTableRow items={invoice} />
      {/* <InvoiceTableFooter items={invoice.items} /> */}
    </View>
    
    <View style={styles.tableContainer}>
      <InvoiceTableHeader2 />
      <InvoiceTableRow2 item={invoice} />
    </View>
  </>
);

export default InvoiceItemsTable