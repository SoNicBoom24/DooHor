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

// Default Sample Data
const DATA = [
    {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        title: "The most beutiful railway track!",
        subtitle:
            "This is a long subtitle. Which also can be used to display flashnews.",
        image:
            "https://i.picsum.photos/id/524/700/500.jpg?hmac=PuAKCqRNlpa6_UJLeKABjXH9l3MFgsv-LHMm0bDfey4",
    },
    {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        title: "Memories lives in this home",
        subtitle:
            "This is a long subtitle. Which also can be used to display flashnews.",
        image:
            "https://i.picsum.photos/id/193/700/500.jpg?hmac=q5QJ9ieureq_dXwwsUmh7ub2pN-V1arRrqpMV7czc9g",
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        title: "Snow and Fun! How can we forget",
        subtitle:
            "This is a long subtitle. Which also can be used to display flashnews.",
        image:
            "https://i.picsum.photos/id/971/700/500.jpg?hmac=kNTldtPvd24NEOfvd39iwsRBun4As0dYChiWQuyCFo4",
    },
];

// Default Props
const defaults = {
    height: 500,
    width: Dimensions.get("window").width,
    delay: 5000,
};

// Default Image Item
const Item = ({ title, image, height, width, onPress, subtitle }) => (
    <TouchableOpacity
        activeOpacity={1}
        onPress={onPress}
        style={{ height: height, width: width }}
    >
        <Image source={{ uri: image }} style={[styles.image, { height: height }]} />
        <View style={styles.titleContainer}>
            {title && <Text style={styles.title}>{title} </Text>}
            {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
        </View>
    </TouchableOpacity>
);


buttonClickListener = () => {
    alert("ลงชื่อแล้ว");
}
// Carousal Component
export default function Carousal({
    data = DATA,
    height = defaults.height,
    width = defaults.width,
    delay = defaults.delay,
    ItemElement = Item,
}) {
    const [selectedIndex, setselectedIndex] = useState(0);
    const scrollView = useRef();

    // Script which will only executed when component initilizes
    useEffect(() => {
        const fn = setInterval(() => {
            setselectedIndex((oldCount) =>
                oldCount === data.length - 1 ? 0 : oldCount + 1
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
                    {data.map((item) => (
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
                        <Title>{item.title}</Title>
                        <Paragraph style={{ fontSize: 20 }}>{item.desc}</Paragraph>
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
        width: defaults.width,
        height: defaults.height,
    },
});