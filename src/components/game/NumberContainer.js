import { Text, StyleSheet } from 'react-native'

import Colors from '../../../Constants/Colors'

function NumberContainer({ children }) {
	return <Text style={styles.txt}>{children}</Text>
}

export default NumberContainer

const styles = StyleSheet.create({
	txt: {
		color: Colors.primary300,
		fontSize: 48,
		fontWeight: 'bold',
		borderColor: Colors.primary300,
		borderWidth: 4,
		paddingHorizontal: 100,
		margin: 12,
		textAlign: 'center',
		borderRadius: 8,
	},
})
