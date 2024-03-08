import { useState } from 'react'
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import StartGameScreeen from './src/screens/StartGameScreen'
import GameScreen from './src/screens/GameScreen'
import GameOverScreen from './src/screens/GameOverScreen'

import Colors from './Constants/Colors'

export default function App() {
	const [pickNumber, setPickNumber] = useState()
	const [gameOver, setGameOver] = useState(false)
	const [rounds, setRounds] = useState(0)

	let screen = <StartGameScreeen onPick={setPickNumber} />

	function startNewGameHandler() {
		setPickNumber(0)
		setGameOver(false)
		setRounds(0)
	}

	if (pickNumber && !gameOver) {
		screen = <StartGameScreeen onPick={setPickNumber} />
	}

	if (pickNumber && !gameOver) {
		screen = <GameScreen number={pickNumber} onGameOver={setGameOver} setRounds={setRounds} />
	}

	if (pickNumber && gameOver) {
		screen = (
			<GameOverScreen
				onGameOver={startNewGameHandler}
				pickNumber={pickNumber}
				rounds={rounds}
			/>
		)
	}

	return (
		<LinearGradient colors={[Colors.primary600, Colors.primary300]} style={styles.appContainer}>
			<ImageBackground
				source={require('./assets/images/background.png')}
				resizeMode="cover"
				style={styles.appContainer}
				imageStyle={styles.imgBg}
			>
				<SafeAreaView style={styles.appContainer}>{screen}</SafeAreaView>
			</ImageBackground>
		</LinearGradient>
	)
}

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
		justifyContent: 'center',
	},
	imgBg: {
		opacity: 0.3,
	},
})
