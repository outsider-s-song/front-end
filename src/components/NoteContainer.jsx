import React from 'react';
import styled from 'styled-components';
import Note from './Note';

const NoteContainer = () => {
	const location = [];
	for (let i = 0; i < 64; i++) {
		location.push(i);
	}

	return (
		<>
			<Container>
				{location.map((num, idx) => (
					<Note key={idx} location={num} />
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
