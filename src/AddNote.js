import React, { useState } from 'react'
import { StyleSheet, SafeAreaView, View, TextInput, Text } from 'react-native'
import { useLocation, useNavigate } from 'react-router-dom'


const AddNote = ({ handleAddNote }) => {
	const navigate = useNavigate();
	const path = useLocation();

	const [noteTitle, setNoteTitle] = useState('');
	const [noteAmount, setNoteAmount] = useState('');
	const [noteMonth, setNoteMonth] = useState('');
	const [noteYear, setNoteYear] = useState('');
	const characterLimit = 200;

	const handleChangeTitle = (event) => {
		if (characterLimit - event.target.value.length >= 0) {
			setNoteTitle(event.target.value)
		}
	};

	const handleChangeAmount = (event) => {
		if (characterLimit - event.target.value.length >= 0) {
			setNoteAmount(event.target.value)
		}
	};

	const handleChangeMonth = (event) => {
		if (characterLimit - event.target.value.length >= 0) {
			setNoteMonth(event.target.value)
		}
	};

	const handleChangeYear = (event) => {
		if (characterLimit - event.target.value.length >= 0) {
			setNoteYear(event.target.value)
		}
	};

	const handleSaveClick = () => {
		if (noteTitle.trim().length > 0 && noteAmount.trim().length > 0 && noteMonth.trim().length > 0 && noteYear.trim().length > 0) {
			handleAddNote(noteTitle, noteAmount, noteMonth, noteYear)
			setNoteTitle('')
			setNoteAmount('')
			setNoteMonth('')
			setNoteYear('')

			function f1() {
			navigate('/')
			}
			setTimeout(f1, 200)
		}
	}
	  
  	return (
    	<SafeAreaView style={styles.container}>
			<View style={styles.noteNew}>
				<View style={{ flexDirection: 'row' }}>
					<View style={{ marginRight: 104, }}>
						<TextInput style={styles.input2}
								multiline={false}
								numberOfLines={0}
								placeholder='Введіть назву'
							value={noteTitle}
							onChange={handleChangeTitle}
						></TextInput>
						<View style={styles.line}>.</View>
						<TextInput style={styles.input}
								multiline={false}
								numberOfLines={0}
								placeholder='Введіть день, місяць (наприклад: "01.02")'
							value={noteMonth}
							onChange={handleChangeMonth}
						></TextInput>
						<View style={styles.line2}>.</View>
					</View>
					<View>
						<TextInput style={styles.input2}
								multiline={false}
								numberOfLines={0}
								placeholder='Введіть суму (наприклад в $)'
							value={noteAmount}
							onChange={handleChangeAmount}
						></TextInput>
						<View style={styles.line}>.</View>
						<TextInput style={styles.input}
								multiline={false}
								numberOfLines={0}
								placeholder='Введіть рік (наприклад: "2023")'
							value={noteYear}
							onChange={handleChangeYear}
						></TextInput>
						<View style={styles.line2}>.</View>
					</View>
				</View>
				<View style={styles.noteFooter}>
					<View style={{ flexDirection: 'row', marginLeft: '65%' }}>
						<View style={styles.cancel} onClick={() => navigate('/')}>
							<Text style={styles.textBtn}>скасувати</Text>
						</View>
						<View style={styles.btn} onClick={handleSaveClick}>
							<Text style={styles.textBtn}>зберегти</Text>
						</View>
					</View>
				</View>
			</View>
		</SafeAreaView>
  	)
}

const styles = StyleSheet.create({
	noteNew: {
		color: '#fff',
		borderBottomColor: '#fff',
		backgroundColor: '#fff',
		width: '94%',
		marginLeft: '3%',
		marginTop: '3%',
		
	},
	container: {
		border: 'dashed',
		color: '#d8bff5',
		width: '80%',
		marginLeft: '10%',
		backgroundColor: '#fff',
		borderStartColor: '#d8bff5',
		borderEndColor: '#d8bff5',
		borderTopColor: '#d8bff5',
		borderBottomColor: '#d8bff5',
		borderRadius: 25,
		padding: '1rem',
		height: 230,
		marginTop: 20,
	},
	noteFooter: {
		color: '#666',
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginTop: 20,
		fontSize: 21,
	},
	input: {
		fontSize: 17,
		height: 40,
		marginTop: 27,
		color: 'black',
	},
	input2: {
		fontSize: 17,
		height: 40,
		color: '#9e5cf6',
	},
	btn: {
		alignItems: 'center',
		textAlign: 'center',
		border: 'none',
		backgroundColor: '#270038',
		borderRadius: 25,
		height: 45,
		width: 185,
		color: 'white',
		cursor: 'pointer',
	},
	cancel: {
		alignItems: 'center',
		marginRight: '4%',
		border: 'none',
		backgroundColor: '#270038',
		borderRadius: 25,
		height: 45,
		width: 185,
		color: 'white',
		cursor: 'pointer',
	},
	textBtn: {
		marginTop: 5,
		fontSize: 22,
		color: 'white',
		fontWeight: 600,
	},
	line: {
		letterSpacing: -4,
		fontSize: 30,
		maxHeight: 2,
		color: 'white',
		backgroundColor: '#9e5cf6',
		width: 400,
	},
	line2: {
		letterSpacing: -4,
		fontSize: 30,
		maxHeight: 2,
		color: 'white',
		backgroundColor: '#dddddd',
		width: 400,
	},
});

export default AddNote
