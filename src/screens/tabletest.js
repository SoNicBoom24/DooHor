import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';

export const TableTest = () => {

    const [tableHead, setTableHead] = useState(['Head', 'Head2', 'Head3']);
    const [tableData, setTableData] = useState([
        { stundet_name: 'Chicken Biryani', select: false, Stundet_id: "63070010" }, //If user select this row then this whole object will return to you with select true in this case
        { stundet_name: 'Chiken koofta', select: true, Stundet_id: "63070011" },
        { stundet_name: 'Chicken sharwma', select: false, Stundet_id: "63070012" }
    ]);


    const rawdata = [
        { stundet_name: 'Chicken Biryani', select: false, Stundet_id: "63070010" }, //If user select this row then this whole object will return to you with select true in this case
        { stundet_name: 'Chiken koofta', select: true, Stundet_id: "63070011" },
        { stundet_name: 'Chicken sharwma', select: false, Stundet_id: "63070012" }
    ]


    const showModal = (studentId) => {
        Alert.alert(`This is row ${studentId + 1}`);
    }

    const button = (studentId) => (
        <TouchableOpacity onPress={() => showModal(studentId)}>
            <View style={styles.btn}>
                <Text style={styles.btnText}>button</Text>
            </View>
        </TouchableOpacity>
    );


    return (
        <View style={styles.container}>
            <Table borderStyle={{ borderColor: 'transparent' }}>
                <Row data={tableHead} style={styles.head} textStyle={styles.text} />
                {
                    tableData.map((rowData, index) => (
                        <TableWrapper key={index} style={styles.row}>
                            {
                                <Cell data={rowData.Stundet_id} textStyle={styles.text} />
                            }
                            {
                                <Cell data={rowData.stundet_name} textStyle={styles.text} />
                            }

                            {
                                button(rowData.Stundet_id)
                            }
                        </TableWrapper>
                    ))
                }
            </Table>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#808B97' },
    text: { margin: 6 },
    row: { flexDirection: 'row', backgroundColor: '#FFF1C1' },
    btn: { width: 58, height: 18, backgroundColor: '#78B7BB', borderRadius: 2 },
    btnText: { textAlign: 'center', color: '#fff' }
});