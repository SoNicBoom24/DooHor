import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, Dimensions, Switch, SafeAreaView, ScrollView, TextInput } from 'react-native';

export default function register() {
    return(
        <SafeAreaView style={{width: "100%", height: "100%"}}>
            <>
            <ScrollView>
                <>
                    <Image style={styles.img} source={{ uri: "https://picsum.photos/200" }}/>
                </>
                <>
                <View style={{backgroundColor: "#FFB053", width: "90%", alignSelf: "center", padding: 10, borderRadius: 20}}>
                    <View style={{padding: 5}}>
                        <Text style={{fontSize: 18, padding: 5}}>สำเนาบัตรประจำตัวประชาชน</Text>
                    </View>
                    <View style={{padding: 5}}>
                        <Text style={{fontSize: 18, padding: 5}}>สำเนาทะเบียนบ้าน</Text>
                    </View>
                    <View style={{padding: 5}}>
                        <Text style={{fontSize: 18, padding: 5}}>รูปถ่าย</Text>
                    </View>
                    <View style={{padding: 5, flexDirection: "row", justifyContent: "space-between"}}>
                        <TextInput style={styles.inputContainer} placeholder="ชื่อ"></TextInput>
                        <TextInput style={styles.inputContainer} placeholder="นามสกุล"></TextInput>
                    </View>
                    <View style={{padding: 5, flexDirection: "row", justifyContent: "space-between"}}>
                        <TextInput style={{width: "30%", backgroundColor: "white",padding: 5,borderRadius: 10, marginRight: 10}}
                         keyboardType='numeric'
                         placeholder="อายุ"></TextInput>
                        <TextInput style={{width: "65%", backgroundColor: "white",padding: 5,borderRadius: 10}}
                        keyboardType="email-address"
                        placeholder="E-mail"></TextInput>
                    </View>
                    <View style={{padding: 5, flexDirection: "row", justifyContent: "space-between"}}>
                        <TextInput style={styles.inputContainer} 
                        keyboardType="numeric"
                        maxLength={1000}
                        placeholder="รหัสนักศึกษา"></TextInput>
                        {/* https://www.npmjs.com/package/react-native-select-dropdown */}
                        <TextInput style={styles.inputContainer}
                        keyboardType="numeric"
                        placeholder="ชั้นปีการศึกษา"></TextInput>
                    </View>
                    <View style={{padding: 5, flexDirection: "row", justifyContent: "space-between"}}>
                        <TextInput style={styles.inputContainer} placeholder="คณะ"></TextInput>
                        <TextInput style={styles.inputContainer} placeholder="สาขา"></TextInput>
                    </View>
                    <Text style={{fontSize: 18, padding: 5}}>ที่อยู่ปัจจุบัน</Text>
                    <View style={{padding: 5, flexDirection: "row", justifyContent: "space-between"}}>
                        <TextInput style={styles.inputContainer}
                        placeholder="บ้านเลขที่"></TextInput>
                        <TextInput style={styles.inputContainer}
                        placeholder="หมู่บ้าน"></TextInput>
                    </View>
                    <View style={{padding: 5, flexDirection: "row", justifyContent: "space-between"}}>
                        <TextInput style={styles.inputContainer}
                        placeholder="ตรอก/ซอย"></TextInput>
                        <TextInput style={styles.inputContainer}
                        placeholder="ตำบล/แขวง"></TextInput>
                    </View>
                    <View style={{padding: 5, flexDirection: "row", justifyContent: "space-between"}}>
                        <TextInput style={styles.inputContainer} placeholder="อำเภอ/เขต"></TextInput>
                        <TextInput style={styles.inputContainer} placeholder="จังหวัด"></TextInput>
                    </View>
                    <View style={{padding: 5, flexDirection: "row", justifyContent: "space-between"}}>
                        <TextInput style={styles.inputContainer}
                        placeholder="รหัสไปรษณีย์"
                        keyboardType='numeric'
                        maxLength={1000}></TextInput>
                    </View>
                </View>
                </>
            </ScrollView>
            </>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    img: {
        width: "90%",
        height: 200,
        borderRadius: 20,
        flexWrap: 'wrap',
        resizeMode: "cover",
        overflow: "hidden",
        zIndex: 2,
        alignSelf: "center",
        marginVertical: 25,
    },
    inputContainer: {
        backgroundColor: "white",
        padding: 5,
        borderRadius: 10,
        width: "48%",

    },
});

// Example to Pick and Upload files in React Native
// https://aboutreact.com/file-uploading-in-react-native/
 
// Import React
// import React, { useState } from 'react';
// // Import core components
// import {
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity
// } from 'react-native';
 
// // Import Document Picker
// import DocumentPicker from 'react-native-document-picker';
 
// const App = () => {
//   const [singleFile, setSingleFile] = useState(null);
 
//   const uploadImage = async () => {
//     // Check if any file is selected or not
//     if (singleFile != null) {
//       // If file selected then create FormData
//       const fileToUpload = singleFile;
//       const data = new FormData();
//       data.append('name', 'Image Upload');
//       data.append('file_attachment', fileToUpload);
//       // Please change file upload URL
//       let res = await fetch(
//         'http://localhost/upload.php',
//         {
//           method: 'post',
//           body: data,
//           headers: {
//             'Content-Type': 'multipart/form-data; ',
//           },
//         }
//       );
//       let responseJson = await res.json();
//       if (responseJson.status == 1) {
//         alert('Upload Successful');
//       }
//     } else {
//       // If no file selected the show alert
//       alert('Please Select File first');
//     }
//   };
 
//   const selectFile = async () => {
//     // Opening Document Picker to select one file
//     try {
//       const res = await DocumentPicker.pick({
//         // Provide which type of file you want user to pick
//         type: [DocumentPicker.types.allFiles],
//         // There can me more options as well
//         // DocumentPicker.types.allFiles
//         // DocumentPicker.types.images
//         // DocumentPicker.types.plainText
//         // DocumentPicker.types.audio
//         // DocumentPicker.types.pdf
//       });
//       // Printing the log realted to the file
//       console.log('res : ' + JSON.stringify(res));
//       // Setting the state to show single file attributes
//       setSingleFile(res);
//     } catch (err) {
//       setSingleFile(null);
//       // Handling any exception (If any)
//       if (DocumentPicker.isCancel(err)) {
//         // If user canceled the document selection
//         alert('Canceled');
//       } else {
//         // For Unknown Error
//         alert('Unknown Error: ' + JSON.stringify(err));
//         throw err;
//       }
//     }
//   };
//   return (
//     <View style={styles.mainBody}>
//       <View style={{ alignItems: 'center' }}>
//         <Text style={{ fontSize: 30, textAlign: 'center' }}>
//           React Native File Upload Example
//         </Text>
//         <Text
//           style={{
//             fontSize: 25,
//             marginTop: 20,
//             marginBottom: 30,
//             textAlign: 'center',
//           }}>
//           www.aboutreact.com
//         </Text>
//       </View>
//       {/*Showing the data of selected Single file*/}
//       {singleFile != null ? (
//         <Text style={styles.textStyle}>
//           File Name: {singleFile.name ? singleFile.name : ''}
//           {'\n'}
//           Type: {singleFile.type ? singleFile.type : ''}
//           {'\n'}
//           File Size: {singleFile.size ? singleFile.size : ''}
//           {'\n'}
//           URI: {singleFile.uri ? singleFile.uri : ''}
//           {'\n'}
//         </Text>
//       ) : null}
//       <TouchableOpacity
//         style={styles.buttonStyle}
//         activeOpacity={0.5}
//         onPress={selectFile}>
//         <Text style={styles.buttonTextStyle}>Select File</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={styles.buttonStyle}
//         activeOpacity={0.5}
//         onPress={uploadImage}>
//         <Text style={styles.buttonTextStyle}>Upload File</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };
 
// const styles = StyleSheet.create({
//   mainBody: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 20,
//   },
//   buttonStyle: {
//     backgroundColor: '#307ecc',
//     borderWidth: 0,
//     color: '#FFFFFF',
//     borderColor: '#307ecc',
//     height: 40,
//     alignItems: 'center',
//     borderRadius: 30,
//     marginLeft: 35,
//     marginRight: 35,
//     marginTop: 15,
//   },
//   buttonTextStyle: {
//     color: '#FFFFFF',
//     paddingVertical: 10,
//     fontSize: 16,
//   },
//   textStyle: {
//     backgroundColor: '#fff',
//     fontSize: 15,
//     marginTop: 16,
//     marginLeft: 35,
//     marginRight: 35,
//     textAlign: 'center',
//   },
// });
 
// export default App;
