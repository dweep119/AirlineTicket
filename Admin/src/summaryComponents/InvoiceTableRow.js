import React, { Fragment } from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const borderColor = '#90e5fc'
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        borderBottomColor: '#bff0fd',
        borderBottomWidth: 1,
        alignItems: 'center',
        height: 85,
        fontStyle: 'bold',
        textAlign: 'center',
    },
    no: {
        width: '10%',
        textAlign: 'center',
        borderRightColor: borderColor,
        height: 85,
        borderRightWidth: 1,
        // paddingLeft: 8,
    },
    particulars: {
        width: '73%',
        borderRightColor: borderColor,
        height: 85,
        borderRightWidth: 1,
        textAlign: 'left',
        paddingLeft: 5,
        fontSize: 9,
        paddingTop: 4
    },

    qty: {
        width: '17%',
        // borderRightColor: borderColor,
        // borderRightWidth: 1,
        textAlign: 'center',
        // paddingRight: 8,
    },
});

const InvoiceTableRow = ({ items }) => {
    console.log('items: ', items);
    const rows = items.map((item, index) =>
        <View style={styles.row} key={index}>
            <Text style={styles.no}>{index + 1}</Text>
            <div style={styles.particulars}>
                <Text>{item.products}</Text>
                {
                    item.inputFields.length > 0 &&
                    item.inputFields.map((itm, idx) =>
                        <Text key={idx}>
                            { itm.pagenos !== '' ? `Page No. ${itm.pagenos}` : ''}
                            
                            {' Qty. '} {itm.particulars}
                        </Text>
                    )
                }
            </div>
            <Text style={styles.qty}>{item.qty} {item.productUnit} </Text>

        </View>
    )
    return (<Fragment>{rows}</Fragment>)
};

export default InvoiceTableRow