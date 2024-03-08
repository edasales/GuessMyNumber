import { Text, Image, View, StyleSheet } from 'react-native'

import PrimaryButton from '../components/ui/PrimaryButton'
import Title from '../components/ui/Title'

import Colors from '../../Constants/Colors'

function GameOverScreen({ onGameOver, pickNumber, rounds }) {
	return (
		<View style={styles.containerRoot}>
			<Title>GAME OVER!</Title>
			<Image
				source={require('../../assets/images/background.png')}
				style={styles.image}
			></Image>
			<Text style={styles.txtBase}>
				Your phone needs <Text style={styles.txtHighlight}>{rounds}</Text> rounds {'\n'}to
				guess the number
				<Text style={styles.txtHighlight}> {pickNumber}</Text>
			</Text>
			<PrimaryButton onPress={onGameOver}>Restart Game</PrimaryButton>
		</View>
	)
}

export default GameOverScreen

const styles = StyleSheet.create({
	containerRoot: {
		alignItems: 'center',
	},
	image: {
		width: 300, //screen.width * 0.9,
		height: 300, //screen.width * 0.9,
		borderRadius: 150, //screen.width * 0.45,
		margin: 20,
		borderWidth: 5,
		borderColor: Colors.primary600,
	},
	txtBase: {
		color: Colors.txtButton,
		fontSize: 24,
		textAlign: 'center',
		padding: 12,
		marginBottom: 16,
	},
	txtHighlight: {
		color: '#b60909',
		fontWeight: 'bold',
		fontSize: 32,
	},
})
