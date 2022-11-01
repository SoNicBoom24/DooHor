import React, { useState, useEffect, useRef } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    Dimensions,
    Animated,
} from 'react-native';
import { TabView, TabBar } from 'react-native-tab-view';

const TabBarHeight = 48;
const HeaderHeight = 800;
const tabitem = (Dimensions.get('window').width - 30) / 2;

const TabScene = ({
    numCols,
    data,
    renderItem,
    onGetRef,
    scrollY,
    onScrollEndDrag,
    onMomentumScrollEnd,
    onMomentumScrollBegin,
}) => {
    const windowHeight = Dimensions.get('window').height;

    return (
        <SafeAreaView style={{ backgroundColor: "#FFDA79" }}>
            <Animated.FlatList
                numColumns={numCols}
                ref={onGetRef}
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
                    useNativeDriver: true,
                })}
                onMomentumScrollBegin={onMomentumScrollBegin}
                onScrollEndDrag={onScrollEndDrag}
                onMomentumScrollEnd={onMomentumScrollEnd}
                ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
                ListHeaderComponent={() => <View style={{ height: 15 }} />}
                data={data}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingTop: HeaderHeight + TabBarHeight,
                    paddingHorizontal: 55,
                    minHeight: windowHeight - TabBarHeight,
                }}
            />
        </SafeAreaView>
    );
};

const Profile = () => {
    const [tabIndex, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'tab1', title: 'เอกสารทั่วไป' },
        { key: 'tab2', title: 'เอกสารสำนักงาน' },
    ]);
    const [tab1Data] = useState(Array(4).fill(0));
    const [tab2Data] = useState(Array(4).fill(0));
    const scrollY = useRef(new Animated.Value(0)).current;
    let listRefArr = useRef([]);
    let listOffset = useRef({});
    let isListGliding = useRef(false);

    useEffect(() => {
        scrollY.addListener(({ value }) => {
            const curRoute = routes[tabIndex].key;
            listOffset.current[curRoute] = value;
        });
        return () => {
            scrollY.removeAllListeners();
        };
    }, [routes, tabIndex]);

    const syncScrollOffset = () => {
        const curRouteKey = routes[tabIndex].key;
        listRefArr.current.forEach((item) => {
            if (item.key !== curRouteKey) {
                if (scrollY._value < HeaderHeight && scrollY._value >= 0) {
                    if (item.value) {
                        item.value.scrollToOffset({
                            offset: scrollY._value,
                            animated: false,
                        });
                        listOffset.current[item.key] = scrollY._value;
                    }
                } else if (scrollY._value >= HeaderHeight) {
                    if (
                        listOffset.current[item.key] < HeaderHeight ||
                        listOffset.current[item.key] == null
                    ) {
                        if (item.value) {
                            item.value.scrollToOffset({
                                offset: HeaderHeight,
                                animated: false,
                            });
                            listOffset.current[item.key] = HeaderHeight;
                        }
                    }
                }
            }
        });
    };

    const onMomentumScrollBegin = () => {
        isListGliding.current = true;
    };

    const onMomentumScrollEnd = () => {
        isListGliding.current = false;
        syncScrollOffset();
    };

    const onScrollEndDrag = () => {
        syncScrollOffset();
    };

    const renderHeader = () => {
        const y = scrollY.interpolate({
            inputRange: [100, HeaderHeight],
            outputRange: [0, -HeaderHeight],
            extrapolateRight: 'clamp',
        });
        return (
            <Animated.View style={[styles.header, { transform: [{ translateY: y }] }]}>
                <Text>{'Header'}</Text>
            </Animated.View>
        );
    };

    const rednerTab1Item = ({ item, index }) => {
        return (
            <View
                style={{
                    borderRadius: 16,
                    width: Dimensions.get('window').width - 100,
                    height: tabitem,
                    backgroundColor: '#aaa',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Text>{index}</Text>
            </View>
        );
    };

    const rednerTab2Item = ({ item, index }) => {
        return (
            <View
                style={{
                    borderRadius: 16,
                    width: Dimensions.get('window').width - 100,
                    height: tabitem,
                    backgroundColor: '#aaa',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Text>{index}</Text>
            </View>
        );
    };

    const renderLabel = ({ route, focused }) => {
        return (
            <Text style={[styles.label, { opacity: focused ? 1 : 0.5 }]}>
                {route.title}
            </Text>
        );
    };

    const renderScene = ({ route }) => {
        const focused = route.key === routes[tabIndex].key;
        let numCols;
        let data;
        let renderItem;
        switch (route.key) {
            case 'tab1':
                numCols = 1;
                data = tab1Data;
                renderItem = rednerTab1Item;
                break;
            case 'tab2':
                numCols = 1;
                data = tab2Data;
                renderItem = rednerTab2Item;
                break;
            default:
                return null;
        }
        return (
            <TabScene
                numCols={numCols}
                data={data}
                renderItem={renderItem}
                scrollY={scrollY}
                onMomentumScrollBegin={onMomentumScrollBegin}
                onScrollEndDrag={onScrollEndDrag}
                onMomentumScrollEnd={onMomentumScrollEnd}
                onGetRef={(ref) => {
                    if (ref) {
                        const found = listRefArr.current.find((e) => e.key === route.key);
                        if (!found) {
                            listRefArr.current.push({
                                key: route.key,
                                value: ref,
                            });
                        }
                    }
                }}
            />
        );
    };

    const renderTabBar = (props) => {
        const y = scrollY.interpolate({
            inputRange: [0, HeaderHeight],
            outputRange: [HeaderHeight, 0],
            extrapolateRight: 'clamp',
        });
        return (
            <Animated.View
                style={{
                    zIndex: 1,
                    transform: [{ translateY: y }],
                    width: '100%',
                }}>
                <TabBar
                    {...props}
                    onTabPress={({ route, preventDefault }) => {
                        if (isListGliding.current) {
                            preventDefault();
                        }
                    }}
                    style={styles.tab}
                    renderLabel={renderLabel}

                />
            </Animated.View>
        );
    };

    const renderTabView = () => {
        return (
            <TabView
                onIndexChange={(index) => setIndex(index)}
                navigationState={{ index: tabIndex, routes }}
                renderScene={renderScene}
                renderTabBar={renderTabBar}
                initialLayout={{
                    height: 0,
                    width: Dimensions.get('window').width,
                }}
            />
        );
    };

    return (
        <View style={{ backgroundColor: "pink", flex: 1 }} >
            {/* style={{ flex: 1 }} */}
            {renderTabView()}
            {renderHeader()}
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        left: "7.5%",
        height: HeaderHeight - 250,
        width: '85%',
        position: 'absolute',
        borderRadius: 25,
        backgroundColor: "white",
        padding: 15

    },
    label: { fontSize: 16, color: '#222' },
    tab: {
        elevation: 0,
        shadowOpacity: 0,
        backgroundColor: '#FFCC80',
        borderRadius: 25,
        width: '90%',
        left: "5%"
    },
});

export default Profile
