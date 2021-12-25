import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Note from './Note';

const NoteContainer = () => {
	const notes = useSelector((state) => state.score.score);
	console.log(notes);

	return (
		<>
			<Container>
				{notes.length > 0 &&
					notes?.map((note, idx) => (
						<Note
							key={idx}
							color={note.color}
							content={note.content}
							index={note.index}
							note={note.note}
							noteId={note.id}
							scoreId={note.scoreId}
							status={note.status}
							userNick={note.userNick}
						/>
					))}
			</Container>
		</>
	);
};

const Container = styled.section`
	display: grid;
	grid-template-columns: repeat(8, 1fr);
	perspective: none;
	perspective-origin: left;
	width: 70vw;
	height: 50vw;
	max-width: 1000px;
	max-height: 700px;
`;

export default NoteContainer;
