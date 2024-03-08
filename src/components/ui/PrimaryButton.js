import { View, Text, Pressable, StyleSheet } from 'react-native'

import Colors from '../../../Constants/Colors'

function PrimaryButton({ children, onPress }) {
	return (
		<View style={styles.buttonView}>
			<Pressable
				onPress={onPress}
				android_ripple={{ color: Colors.primary400 }}
				// style={styles.buttonPressable}
				style={({ pressed }) =>
					pressed ? [styles.pressed, styles.buttonPressable] : styles.buttonPressable
				}
			>
				<Text style={styles.textButton}>{children}</Text>
			</Pressable>
		</View>
	)
}

export default PrimaryButton

const styles = StyleSheet.create({
	buttonPressable: {
		padding: 12,
		alignItems: 'center',
	},
	buttonView: {
		margin: 8,
		width: 140,
		borderRadius: 28,
		backgroundColor: Colors.primary600,
		elevation: 4,
		overflow: 'hidden',
	},
	textButton: {
		fontWeight: 'bold',
		color: Colors.txtButton,
		fontSize: 16,
	},
	pressed: {
		opacity: 0.75,
	},
})
