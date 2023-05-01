import React, { useState, useEffect } from 'react'
import { StyleSheet, SafeAreaView, Text } from 'react-native'
import { nanoid } from 'nanoid'
import AddNote from './AddNote'
import ExpenseItem from './ExpenseItem'
import Filter from './Filter'


export default function CreatePage({ navigation }) {
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

	const addNote = (title, amount, month, year) => {
		const newNote = {
			id: nanoid(),
			title: title,
			amount: amount,
			month: month,
			year: year,
		};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	};

	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};
	  
  	return (
		<SafeAreaView>
			<Text style={styles.h1}>Шаблон «Мої витрати»</Text>
			<AddNote
				notes={notes.filter((note) =>
					note.year.toLowerCase().includes(searchYear)
				)}
				handleAddNote={addNote}
				handleDeleteNote={deleteNote}
			/>
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
});
