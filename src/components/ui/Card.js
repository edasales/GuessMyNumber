import { View, StyleSheet } from 'react-native'

import PrimaryButton from './PrimaryButton'
import Colors from '../../../Constants/Colors'

function Card({ children, onPress1, onPress2, txt1, txt2 }) {
	return (
		<View style={styles.inputContainer}>
			{children}

			<View style={styles.buttonContainer}>
				<PrimaryButton onPress={onPress1}>{txt1}</PrimaryButton>
				<PrimaryButton onPress={onPress2}>{txt2}</PrimaryButton>
			</View>
		</View>
	)
}

export default Card

const styles = StyleSheet.create({
	inputContainer: {
		marginTop: 25,
		padding: 5,
		alignItems: 'center',
		backgroundColor: Colors.primary500,
		marginHorizontal: 10,
		borderRadius: 8,
		elevation: 5,
		padding: 24,
	},
	buttonContainer: {
		flexDirection: 'row',
	},
})
