import { StyleSheet } from "react-native"

const { Component } = require("react")
const { Navigation } = require("react-native-navigation")

class BaseComponent extends Component {
	componentDidMount() {
		this.navigationEventListener = Navigation.events().bindComponent(this)
	}

	componentWillUnmount() {
		if (this.navigationEventListener) {
			this.navigationEventListener.remove()
		}
	}

	navigationButtonPressed({ buttonId }) {}
}

export default BaseComponent
