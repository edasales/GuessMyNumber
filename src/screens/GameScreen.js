import { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { Ionicons as Icon } from '@expo/vector-icons'

import Card from '../components/ui/Card'
import Title from '../components/ui/Title'
import Colors from '../../Constants/Colors'
import NumberContainer from '../components/game/NumberContainer'

let min = 1
let max = 99
let rounds = 1

function randomNumber(min, max, exclude) {
	const n = Math.trunc(Math.random() * (max + 1 - min) + min)

	if (n === exclude) return randomNumber(min, max, exclude)

	return n
}

function GameScreen({ number, onGameOver, setRounds }) {
	const [nTry, setNTry] = useState(randomNumber(1, 99, number))
	const [description, setDescription] = useState('Make your best bet!!')
	const [history, setHistory] = useState([])

	useEffect(() => {
		if (number === nTry) {
			min = 1
			max = 99
			setRounds(rounds)
			onGameOver(true)
			rounds = 1
		}
	}, [nTry])

	function nextGuessHandler(direction) {
		if (direction === 'lower') {
			if (number >= nTry) {
				setDescription('Dont lie, you know that this is wrong!\n')
				return
			}
			max = nTry - 1
		}

		if (direction === 'greater') {
			if (number <= nTry) {
				setDescription('Dont lie, you know that this is wrong!\n')
				return
			}
			min = nTry + 1
		}

		rounds++

		setHistory([nTry, ...history])
		setNTry(randomNumber(min, max, 0))
		setDescription('Make your best bet!')
	}

	return (
		<View style={styles.containerView}>
			<Title style={styles.title}>Openent's Guess</Title>
			<Card
				onPress1={nextGuessHandler.bind(this, 'lower')}
				onPress2={nextGuessHandler.bind(this, 'greater')}
				txt1={<Icon name="remove" size={24}></Icon>}
				txt2={<Icon name="add" size={24}></Icon>}
			>
				<NumberContainer>{nTry}</NumberContainer>
				<Text style={styles.desc}>{description}</Text>
			</Card>
			<View style={styles.ContainerList}>
				{/* {history.map(val => (
					<Text> {val} </Text>
				))} */}
				<FlatList
					data={history}
					renderItem={({ item }) => (
						<View style={styles.itemList}>
							<Text style={styles.txtList}>{item}</Text>
						</View>
					)}
				/>
			</View>
		</View>
	)
}

export default GameScreen

const styles = StyleSheet.create({
	containerView: {
		flex: 1,
		alignItems: 'center',
		padding: 24,
	},
	desc: {
		color: Colors.txtButton,
		marginVertical: 10,
	},
	ContainerList: {
		flex: 1,
		flexDirection: 'row',
		margin: 20,
	},
	itemList: {
		backgroundColor: Colors.primary600,
		margin: 4,
		borderRadius: 16,
		paddingVertical: 4,
		alignItems: 'center',
	},
	txtList: {
		color: Colors.txtButton,
	},
})
