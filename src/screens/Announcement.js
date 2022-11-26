import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import firebase from '../Database/firebaseDB'
import { useNavigation } from '@react-navigation/native';

export default function (props) {
    const navigation = useNavigation();
    return <Announcement {...props} navigation={navigation} />;
}

class Announcement extends Component {
    constructor() {
        super();
        this.user = firebase.auth().currentUser
        this.subjCollection = firebase.firestore().collection("declaration");
        this.state = {
            subject_list: [],
        };
    }
    getCollection = () => {
        const all_data = [];
        firebase.firestore()
            .collection('declaration')
            .where('state', '==', "open")
            .get()
            .then(querySnapshot => {
                querySnapshot.forEach((res) => {
                    const { desc, image, title, type, state, id } = res.data();
                    all_data.push({ desc: desc, image: image, title: title, type: type, state: state, id: id });
                });
                this.setState({ subject_list: all_data, });
            });
    };

    componentDidMount() {
        this.unsubscribe =
            this.subjCollection.onSnapshot(this.getCollection);
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    ScreenRegister() {
        const { navigation } = this.props;
        navigation.navigate('ScreenRegister')
    };

    ScreenGeneralTopic(i) {
        const { navigation } = this.props;
        navigation.navigate('ScreenGeneralTopic',
            {
                id: i
            })
    };

    ScreenHor() {
        const { navigation } = this.props;
        navigation.navigate('ScreenHor')
    };

    render() {
        return (
            < ScrollView style={styles.container} >
                <Text>{this.props.id}</Text>
                {this.state.subject_list.map((item, i) => (
                    <View key={i} style={{ marginTop: '5%' }}>
                        <View style={{ display: item.type == 'Register' ? 'flex' : 'none' }}>
                            <TouchableOpacity onPress={() => this.ScreenRegister()}>
                                <Image style={styles.img} source={{ uri: item.image }} />
                                <SafeAreaView style={styles.description}>
                                    <Text style={{ padding: 10 }}>
                                        {item.title} : {item.desc}   ...กดเพื่อดูรายละเอียดเพิ่มเติม
                                    </Text>
                                </SafeAreaView>
                            </TouchableOpacity>
                        </View>
                        <View style={{ display: item.type == 'Room' ? 'flex' : 'none' }}>
                            <TouchableOpacity onPress={() => this.ScreenHor()}>
                                <Image style={styles.img} source={{ uri: item.image }} />
                                <SafeAreaView style={styles.description}>
                                    <Text style={{ padding: 10 }}>
                                        {item.title} : {item.desc}   ...กดเพื่อดูรายละเอียดเพิ่มเติม
                                    </Text>
                                </SafeAreaView>
                            </TouchableOpacity>
                        </View>

                        <View style={{ display: item.type == 'General' ? 'flex' : 'none' }}>
                            <TouchableOpacity onPress={() => this.ScreenGeneralTopic(item.id)} >
                                <Image style={styles.img} source={{ uri: item.image }} />
                                <SafeAreaView style={styles.description}>
                                    <Text style={{ padding: 10 }}>
                                        {item.title} : {item.desc}   ...กดเพื่อดูรายละเอียดเพิ่มเติม
                                    </Text>
                                </SafeAreaView>
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFDA79",
    },
    img: {
        width: "80%",
        height: 150,
        resizeMode: "cover",
        alignSelf: "center",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    description: {
        backgroundColor: "white",
        width: "80%",
        height: "100%",
        alignSelf: "center",
        flex: 1,
        marginBottom: 30,
        elevation: 15,
        padding: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderColor: "pink",
        borderTopWidth: 10,
    }
});