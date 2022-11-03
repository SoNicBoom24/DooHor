import { Text, TextInput, View, StyleSheet, Button } from 'react-native';
import DataTable, { COL_TYPES } from 'react-native-datatable-component';
import React from "react";
const SomeCom = () => {
    const [text, onChangeText] = React.useState("");

    //You can pass COL_TYPES.CHECK_BOX Column's value in true/false, by default it will be false means checkBox will be uncheck!

    const rawdata = [
        { stundet_name: 'Chicken Biryani', select: false, Stundet_id: "63070010" }, //If user select this row then this whole object will return to you with select true in this case
        { stundet_name: 'Chiken koofta', select: true, Stundet_id: "63070011" },
        { stundet_name: 'Chicken sharwma', select: false, Stundet_id: "63070012" }
    ]

    const data = rawdata.filter(x => String(x.Stundet_id).includes(text));
    console.log(data);
    const Settings =
        [
            { name: 'stundet_name', type: COL_TYPES.STRING, width: "25%", },
            { name: 'Stundet_id', type: COL_TYPES.STRING, width: "25%", },
            { name: 'select', type: COL_TYPES.CHECK_BOX, width: "25%" },
            { name: 'detail_student', Button, width: "25%" }
        ]
    const nameOfCols = ['stundet_name', 'Stundet_id', 'select', "detail_student"];
    return (
        <View style={{ top: "5%" }}>
            <Text style={{ alignSelf: 'center', fontSize: 20 }}>ตารางนักศึกษา </Text>

            <TextInput placeholder="รหัสนักศึกษา" style={styles.input}
                onChangeText={onChangeText}
                value={text}
            />
            <View style={{ margin: 20, height: "100%" }}>
                <DataTable
                    colSettings={Settings}
                    noOfPages="1"
                    onRowSelect={(row) => { console.log('ROW => ', row) }}
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
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: "20%",
    },
});
export default SomeCom;