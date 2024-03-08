import { useState } from 'react'
import { TextInput, View, StyleSheet, Alert } from 'react-native'
import PrimaryButton from '../components/ui/PrimaryButton'

import Colors from '../../Constants/Colors'
import Card from '../components/ui/Card'

function StartGameScreeen({ onPick }) {
	const [enteredNumber, setEnteredNumber] = useState('')

	function numberInputHandler(enteredText) {
		setEnteredNumber(enteredText)
	}

	function confirmInputHandler() {
		const chosenNumber = +enteredNumber

		if (isNaN(chosenNumber) || chosenNumber < 1 || chosenNumber > 99) {
			Alert.alert('Invalid Number!', 'Number has to be a number between 1 and 99.', [
				{ text: 'ok', style: 'destructive', onPress: resetInputHandler },
			])
			return
		}

		onPick(chosenNumber)
	}

	function resetInputHandler() {
		setEnteredNumber('')
	}

	return (
		<Card
			onPress1={resetInputHandler}
			onPress2={confirmInputHandler}
			txt1={'Reset?'}
			txt2={'Confirm!'}
		>
			<TextInput
				style={styles.inputNumber}
				maxLength={2}
				keyboardType="number-pad"
				autoCapitaliza="none"
				autoCorrect={false}
				value={enteredNumber}
				onChangeText={numberInputHandler}
			/>
		</Card>
	)
}

export default StartGameScreeen

const styles = StyleSheet.create({
	inputNumber: {
		height: 50,
		width: 80,
		borderColor: Colors.primary300,
		borderBottomWidth: 3,
		fontSize: 50,
		color: Colors.primary300,
		textAlign: 'center',
		fontWeight: 'bold',
		marginBottom: 20,
	},
})
