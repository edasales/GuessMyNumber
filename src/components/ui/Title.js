import { Text, StyleSheet } from 'react-native'

import Colors from '../../../Constants/Colors'

function Title({ children }) {
	return <Text style={styles.title}>{children}</Text>
}

export default Title

const styles = StyleSheet.create({
	title: {
		flexDirection: 'row',
		fontSize: 28,
		fontWeight: 'bold',
		color: Colors.txtButton,
		borderWidth: 3,
		borderColor: Colors.txtButton,
		paddingHorizontal: 60,
		paddingVertical: 4,
		marginTop: 16,
		textAlign: 'center',
		margin: 10,
	},
})
