import { MdDeleteForever } from 'react-icons/md'
import { StyleSheet, SafeAreaView, View, Text } from 'react-native'


const Card = ({ id, title, amount, month, year, handleDeleteNote }) => {
	return (
		<SafeAreaView style={styles.note}>
			<View style={styles.dateblock}>
				<Text style={styles.date}>Дата:</Text>
				<Text style={styles.date}>{month}.{year}</Text>
			</View>
			<View>
				<Text style={styles.title}>{title}</Text>
			</View>
			<View style={styles.amountblock}>
				<Text style={styles.amount}>{amount}</Text>
			</View>
			<View style={styles.delblock} onClick={() => handleDeleteNote(id)}>
			<Text style={styles.delete}>Видалити</Text>
					<MdDeleteForever color='#270038'
						className='delete-icon'
						size='2.6em'
					/>
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	note: {
		border: 'solid',
		color: '#9e5cf6',
		borderRadius: 25,
		padding: '1rem',
		minHeight: 160,
		flexDirection: 'row',
		width: '80%',
		marginLeft: '10%',
		marginTop: '10px',
		marginBottom: 2,
		fontSize: 18,
	},
	dateblock: {
		backgroundColor: '#270038',
		margin: '10px',
		padding: '10px',
		paddingStart: '20px',
		paddingEnd: '20px',
		paddingBottom: '30px',
		borderRadius: '15px',
	},
	amountblock: {
		backgroundColor: '#00382c',
		margin: '10px',
		padding: '10px',
		paddingStart: '20px',
		paddingEnd: '20px',
		marginTop: '50px',
		marginBottom: '4px',
		borderRadius: '15px',
		position: 'absolute',
		right: 220,
	},
	delblock: {
		flexDirection: 'row',
		margin: '10px',
		padding: '10px',
		paddingStart: '20px',
		paddingEnd: '20px',
		marginTop: '50px',
		marginBottom: '4px',
		position: 'absolute',
		right: 0,
		cursor: 'pointer',
	},
	date: {
		textAlign: 'center',
		marginTop: '15px',
		color: 'white',
		fontSize: '25px',
	},
	amount: {
		textAlign: 'center',
		marginTop: '5px',
		color: 'white',
		fontSize: '25px',
	},
	title: {
		textAlign: 'center',
		marginTop: '60px',
		fontSize: '28px',
		marginLeft: '25px',
		fontWeight: 'bold'
	},
	delete: {
		marginRight: '4%',
		fontSize: '22px',
		marginTop: '4%',
		fontWeight: '500',
		color: '#270038',
	}
});

export default Card
