import { View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/Homescreen";
import ScheduleManagerScreen from "./src/ScheduleManagerScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    ScheduleManager: ScheduleManagerScreen,
  }
  ,
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
