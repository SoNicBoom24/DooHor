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


// Default Image Item

buttonClickListener = () => {
    alert("ลงชื่อแล้ว");
}
// Carousal Component
export default function Detailroom({
    height = 500,
    width = Dimensions.get("window").width,
    delay = 5000,
    ItemElement = Item,
}) {
    const [DATA, SetDATA] = useState([]);
    const [selectedIndex, setselectedIndex] = useState(0);
    const scrollView = useRef();
    const all_data = [];
    const set = [];
    let id = 0;
    firebase.firestore()
        .collection('Room')
        .where('idroom', '==', 1)
        .get()
        .then(querySnapshot => {
            querySnapshot.forEach((res) => {
                all_data.push(res.data());
            })
            {
                all_data[0].image_room.forEach(d => {
                    set.push({
                        image: d,
                        id: id += 1

                    })
                })
                SetDATA(set)
            }

        });


    // Script which will only executed when component initilizes
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
                    {DATA.map((item) => (
                        <ItemElement
                            key={item.id}
                            height={height}
                            width={width}
                            {...item}
                            onPress={() => onPress(item)}
                        />
                    ))}
                </View>
            </ScrollView >
            <View style={{ alignItems: "center", marginTop: 30, marginBottom: 30, }}>
                <Text style={{ fontSize: 25 }}> รายละเอียดหอพัก </Text>
                <Text style={{ fontSize: 20 }}> หอพักแอร์ จำนวน 4 คน </Text>
                <Text style={{ fontSize: 20 }}>  ค่าเช่า 5000</Text>
            </View>

            <View style={{ alignItems: "center", height: "63%" }}>
                <Button

                    onPress={buttonClickListener}
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
const Item = ({ image, height, width, onPress, }) => (
    <TouchableOpacity
        activeOpacity={1}
        onPress={onPress}
        style={{ height: height, width: width }}
    >
        <Image source={{ uri: image }} style={[styles.image, { height: height }]} />

    </TouchableOpacity>
);

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
