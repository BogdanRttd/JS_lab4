import React, { useState, useEffect } from 'react'
import { StyleSheet, View, SafeAreaView, Text } from 'react-native'
import { useLocation, useNavigate } from 'react-router-dom'
import { nanoid } from 'nanoid'
import ExpenseItem from './ExpenseItem'
import Filter from './Filter'


export default function Expenses({ navigation }) {
	const navigate = useNavigate();
  	const path = useLocation();

	const [notes, setNotes] = useState([
		{
			id: nanoid(),
			title: 'назва',
			amount: 'сумма',
			month: '01.01',
			year: '2023',
		},
	]);

	const [searchYear, setSearchText] = useState('');

	useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('noteslist')
		);

		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(
			'noteslist',
			JSON.stringify(notes)
		);
	}, [notes]);

	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};
	  
  	return (
		<SafeAreaView>
			<Text style={styles.h1}>Шаблон «Мої витрати»</Text>
			<View style={styles.btn}>
				<Text style={styles.textBtn} onClick={() => navigate('/new')}>Додати нові витрати</Text>
			</View>
			<Filter handleSearchNote={setSearchText} />
			<ExpenseItem
				notes={notes.filter((note) =>
					note.year.toLowerCase().includes(searchYear)
				)}
				handleDeleteNote={deleteNote}
			/>
			<br></br>
			<br></br>
		</SafeAreaView>
  	)
}

const styles = StyleSheet.create({
	h1: {
		textAlign: 'center',
		marginTop: '3%',
		marginBottom: '2%',
		fontSize: '27px',
		fontWeight: 'bold'
	},
	textBtn: {
		marginTop: 5,
		fontSize: 22,
		color: 'white',
		fontWeight: 600,
	},
	btn: {
		alignItems: 'center',
		textAlign: 'center',
		border: 'none',
		backgroundColor: '#270038',
		borderRadius: 25,
		height: 45,
		width: '20%',
		marginLeft: '40%',
		color: 'white',
		cursor: 'pointer',
	},
});
