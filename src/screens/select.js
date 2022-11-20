import * as React from 'react';
import { StyleSheet, View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { Button, Input , Text} from "react-native-elements";



const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#ff4081' }} />
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#673ab7', width: 100, height: 100 }}>
    <Button title="A101" />
  </View>
);

const selectDorm = () =>  {

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'left', title: 'Left' },
    { key: 'Right', title: 'Right' },
  ]);
  const [people, setPeople] = React.useState(0);

  const renderScene = SceneMap({
    left: LeftRoute,
    right: RightRoute,
  });

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default selectDorm;