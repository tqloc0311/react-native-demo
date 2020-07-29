import React, { Component } from "react"
import { SafeAreaView, StyleSheet, Text, View } from "react-native"

import BaseComponent from "../BaseComponent"

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		margin: 16,
		alignContent: "center",
		justifyContent: "center",
		backgroundColor: "#f00",
	},
})

export class Waterfall extends BaseComponent {
	render() {
		return (
			<SafeAreaView style={{ flex: 1 }}>
				<View style={styles.wrapper}></View>
			</SafeAreaView>
		)
	}

	navigationButtonPressed = (button) => {
		switch (button.buttonId) {
			case "BackButton":
				navigator.pop(this.props.componentId)
			default:
				break
		}
	}
}

Waterfall.options = {
	topBar: {
		backButton: {
			id: "BackButton",
			title: "",
			color: "#000",
			icon: require("../../assets/arrow_left.png"),
		},
	},
}

export default Waterfall
