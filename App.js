import { View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/Homescreen";
import ScheduleScreen from "./src/Schedule";
import RateScreen from "./src/Rate";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Schedule: ScheduleScreen,
    Rating: RateScreen
  }
  ,
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
    },
  }
);

export default createAppContainer(navigator);
