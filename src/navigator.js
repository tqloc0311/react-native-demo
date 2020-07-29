import { Navigation } from "react-native-navigation"

navigator.goSplash = () =>
	Navigation.setRoot({
		root: {
			stack: {
				id: "Splash",
				children: [
					{
						component: {
							name: "Splash",
						},
					},
				],
			},
		},
	})

navigator.goScreenList = () =>
	Navigation.setRoot({
		root: {
			stack: {
				id: "ScreenList",
				children: [
					{
						component: {
							name: "ScreenList",
						},
					},
				],
			},
		},
	})

navigator.push = (senderID, target) => {
	Navigation.push(senderID, {
		component: {
			name: target.name,
			options: {
				topBar: {
					title: {
						text: target.title,
					},
				},
			},
		},
	})
}

navigator.pop = (senderID) => {
	Navigation.pop(senderID)
}

navigator.modal = () => {}

export default navigator
