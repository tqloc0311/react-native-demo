import { Navigation } from "react-native-navigation"
import ScreenList from "../src/components/ScreenList"
import Splash from "../src/components/Splash"
import Timeline from "../src/components/Timeline"
import Waterfall from "../src/components/Waterfall"

export function registerScreens() {
	Navigation.registerComponent("Splash", () => Splash)
	Navigation.registerComponent("ScreenList", () => ScreenList)
	Navigation.registerComponent("Waterfall", () => Waterfall)
	Navigation.registerComponent("Timeline", () => Timeline)
}
