import React, { useRef, useState, useEffect } from "react";
import {
    View,
    TouchableOpacity,
    StyleSheet,
    Image,
    ScrollView,
    Dimensions,
    Text,
    SafeAreaView,
    Button
} from "react-native";
import { Card, Title, Paragraph } from 'react-native-paper';
import firebase from '../Database/firebaseDB'

import { useRoute } from '@react-navigation/native';




export default function Detailroom({
    height = "100%",
    width = Dimensions.get("window").width,
    delay = 5000,
}) {
    const [DATA, SetDATA] = useState([]);
    const [detaildata, SetDetaildata] = useState([]);
    const [selectedIndex, setselectedIndex] = useState(0);
    const scrollView = useRef();
    const all_data = [];
    const set = [];
    const user = firebase.auth().currentUser
    const route = useRoute();

    if (true) {
        firebase.firestore()
            .collection('Room')
            .where('RoomName', '==', route.params.Roomname)
            .get()
            .then(querySnapshot => {
                querySnapshot.forEach((res) => {
                    const { RoomName, building, desc, floor, id, image_room, price, student, state } = res.data();
                    all_data.push({ RoomName: RoomName, building: building, floor: floor, image_room: image_room, state: state, desc: desc, id: id, desc: desc, price: price, student: student });
                });
                {
                    all_data[0].image_room.forEach(d => {
                        set.push({
                            image: d,

                        })
                    })

                    SetDATA(set)
                    SetDetaildata(all_data)

                }
            });
    }
    else {
    }

    useEffect(() => {
        const fn = setInterval(() => {
            setselectedIndex((oldCount) =>
                oldCount === DATA.length - 1 ? 0 : oldCount + 1
            );
        }, delay);
        return () => {
            clearInterval(fn);
        };
    }, []);

    // Script will executed every time selectedIndex updates
    useEffect(() => {
        scrollView.current.scrollTo({
            animated: true,
            x: width * selectedIndex,
            y: 0,
        });
    }, [selectedIndex]);

    const setIndex = (event) => {
        const contentOffset = event.nativeEvent.contentOffset;
        const viewSize = event.nativeEvent.layoutMeasurement;

        // Divide the horizontal offset by the width of the view to see which page is visible
        setselectedIndex(Math.floor(contentOffset.x / viewSize.width));
    };


    return (
        <View style={{ backgroundColor: "#FFDA79" }}>
            <ScrollView
                ref={scrollView}
                horizontal
                pagingEnabled
                onMomentumScrollEnd={setIndex}
                onContentSizeChange={() => scrollView.current.scrollToEnd()}

            >
                <View style={styles.carousalContainer} >
                    {DATA.map((item, index) => (
                        <TouchableOpacity
                            key={index}
                            style={{ height: height, width: width }}
                        >
                            <Image source={{ uri: item.image }} style={[styles.image, { height: height }]} />

                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView >
            <View style={{ alignItems: "center", marginTop: 30, marginBottom: 30, }}>
                {detaildata.map((item, i) => (
                    <View key={i}>

                        <Text style={{ fontSize: 25 }}>
                            {item.desc}
                        </Text>
                    </View>
                ))}
            </View>

            <View style={{ alignItems: "center", height: "63%" }}>
                <Button


                    title="ลงชื่อเข้าหอพัก"
                    color="#594545"
                />
                <Card style={{
                    borderRadius: 15, width: "95%", marginBottom: 10, marginTop: 50
                }} >
                    <Card.Content>
                        <Title>นายกิตติภพ ปังตระกูล</Title>
                        <Paragraph style={{ fontSize: 20 }}>คณะ IT เวลาเรียนช่วง 12.00 - 18.00</Paragraph>
                        <Paragraph style={{ fontSize: 20 }}>สถานะ</Paragraph>
                    </Card.Content>
                </Card>

            </View>

        </View>
    );



}
const styles = StyleSheet.create({
    carousalContainer: {
        flexDirection: "row",
        width: "100%",
    },

    item: {
        backgroundColor: "rgba(91, 91, 91, 0.3)",
        marginVertical: 8,
        justifyContent: "center",
        alignItems: "center",
    },
    titleContainer: {
        position: "absolute",
        bottom: 10,
        width: "100%",
        paddingLeft: 10,
        backgroundColor: "rgba(0, 0, 0, 0.4)",
    },
    title: {
        fontSize: 28,
        color: '#fff',
        fontWeight: "bold",
    },
    subtitle: {
        color: '#fff',
    },
    image: {
        width: Dimensions.get("window").width,
        height: 500,
    },
});
