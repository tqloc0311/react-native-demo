import { StyleSheet, Text, View } from "react-native"
import navigator, { goScreenList } from "../../navigator"

import BaseComponent from "../BaseComponent"
import { Navigation } from "react-native-navigation"
import React from "react"

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignContent: "center",
		justifyContent: "center",
	},
	caption: {
		fontSize: 50,
		fontWeight: "bold",
		textAlign: "center",
		textAlignVertical: "center",
	},
})

export class Splash extends BaseComponent {
	componentDidMount() {
		super.componentDidMount()

		setTimeout(() => {
			navigator.goScreenList()
		}, 500)
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.caption}> Demo </Text>
			</View>
		)
	}
}

export default Splash
