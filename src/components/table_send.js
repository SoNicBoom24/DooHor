import { Text, TextInput, View, StyleSheet, Button, Alert } from 'react-native';
import DataTable, { COL_TYPES } from 'react-native-datatable-component';
import React from "react";
import firebase from '../Database/firebaseDB'

export const DataTableTest = () => {
    const [text, onChangeText] = React.useState("");
    const [userdata, setuserdata] = React.useState([]);
    const all_data = [];
    firebase.firestore()
        .collection('Users')
        .where('Role', '==', 'user')
        .get()
        .then(querySnapshot => {
            querySnapshot.forEach((res) => {
                const { first_name, last_name, student_id } = res.data();
                all_data.push({ stundet_name: first_name + " " + last_name, Stundet_id: student_id, });
            });
            setuserdata(all_data);
        });

    let data = userdata;
    if (text[0] in [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) {
        data = userdata.filter(x => String(x.Stundet_id).includes(text));
    }
    else {
        data = userdata.filter(x => String(x.stundet_name).includes(text));

    }


    const Settings =
        [
            { name: 'stundet_name', type: COL_TYPES.STRING, },
            { name: 'Stundet_id', type: COL_TYPES.STRING, },
            { name: 'score', type: COL_TYPES.STRING, },
            { name: 'Detail_Score', type: COL_TYPES.Button, },
        ]
    const nameOfCols = ['stundet_name', 'Stundet_id', "score", "Detail_Score"];
    return (
        <View style={{ top: "5%" }}>
            <Text style={{ alignSelf: 'center', fontSize: 20 }}>ตารางนักศึกษา </Text>

            <TextInput placeholder="ชื่อหรือรหัสนักศึกษา" style={styles.input}
                onChangeText={onChangeText}
                value={text}
            />
            <View style={{ margin: 20, height: "100%" }}>
                <DataTable
                    colSettings={Settings}
                    noOfPages="1"
                    onRowSelect={(row) => {
                        Alert.alert(" " + JSON.parse(JSON.stringify((row.score_details))

                        ));
                    }}
                    data={data}
                    colNames={nameOfCols}
                    headerLabelStyle={{ color: 'grey', fontSize: 20 }}

                />
            </View>

        </View >

    )
}
const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 15,
        borderWidth: 1,
        padding: 10,
        width: "20%",
    },
});
export default DataTableTest;