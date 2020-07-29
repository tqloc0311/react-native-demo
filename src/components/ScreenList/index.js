import React, { Component } from "react"
import {
	SafeAreaView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native"

import BaseComponent from "../BaseComponent"

const styles = StyleSheet.create({
	wrapper: {
		marginTop: 8,
	},
	listItem: {
		paddingVertical: 20,
		marginVertical: 16,
		marginHorizontal: 16,
		borderColor: "#fff",
		borderWidth: 1,
		borderRadius: 8,
		backgroundColor: "#fff",
		alignItems: "center",
		shadowColor: "#00f",
		shadowOffset: { width: 0, height: 3 },
		shadowOpacity: 0.5,
		shadowRadius: 5,
		elevation: 5,
	},
	listItemText: {
		fontWeight: "500",
		fontSize: 20,
		color: "#00f",
	},
})

export class ScreenList extends BaseComponent {
	constructor(props) {
		super(props)
	}

	screens = [
		{
			id: 0,
			title: "Waterfall chart",
		},
		{
			id: 1,
			title: "Timeline",
		},
	]

	render() {
		return (
			<SafeAreaView>
				<View style={styles.wrapper}>
					{this.screens.map((item, index) => (
						<TouchableOpacity
							key={item.id}
							style={styles.listItem}
							onPress={() => this.onItemPress(item)}>
							<Text style={styles.listItemText}>{item.title}</Text>
						</TouchableOpacity>
					))}
				</View>
			</SafeAreaView>
		)
	}

	onItemPress = (item) => {
		console.log(this.props.componentId)
		navigator.push(this.props.componentId, {
			name: "Waterfall",
			title: "Waterfall",
		})
	}
}

ScreenList.options = {
	topBar: {
		title: {
			text: "Demo",
		},
	},
}

export default ScreenList
