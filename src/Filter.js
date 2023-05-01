import React from 'react'
import { MdSearch } from 'react-icons/md'
import { StyleSheet, SafeAreaView, Text, View, TextInput } from 'react-native'


const Filter = ({ handleSearchNote }) => {
	return (
		<SafeAreaView>
			<View style={styles.key}>
				<Text style={styles.text}>Фільтр</Text>
				<MdSearch size='2.3em'/>
			</View>
			<TextInput style={styles.input}
				onChange={(event) =>
					handleSearchNote(event.target.value)
				}
				type='text'
				placeholder='введіть рік'
				/>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	key: {
		color: '#9e5cf6',
		alignItems: 'center',
		borderRadius: '10',
		margin: 'auto',
		marginTop: '1%',
		display: 'flex',
		flexDirection: 'row',
		weight: '40%'
	},
	text: {
		color: '#9e5cf6',
		marginLeft: '6%',
		marginRight: '4%',
		marginBottom: '4%',
		fontSize: 26,
		fontWeight: 400,
	},
	input: {
		alignItems: 'center',
		textAlign: 'center',
		border: 'solid',
		borderColor: '#9e5cf6',
		width: '16%',
		marginLeft: '42%',
		marginBottom: '1.2%',
		fontSize: 24,
		color: '#9e5cf6',
		outline: 0, 
    	outlineOffset: 0,
		boxShadow: 'none',
		caretHidden: false,
		selectionColor: '#9e5cf6',
		borderRadius: 40,
		paddingBottom: 6,
	},
});

export default Filter
