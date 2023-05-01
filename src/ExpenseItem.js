import Card from './Card'
import { StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'


function ExpenseItem({ notes, handleDeleteNote }) {
	return (
		<SafeAreaView style={styles.notesList}>
		 	{notes.map((note) => (
		 		<Card
					id={note.id}
					title={note.title}
					amount={note.amount}
					month={note.month}
					year={note.year}
		 			handleDeleteNote={handleDeleteNote}
		 		/>
		 	))}
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	notesList: {
		display: 'grid',
		gridGap: '1rem',
	},
});

export default ExpenseItem
