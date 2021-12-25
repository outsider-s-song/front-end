import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import * as Tone from 'tone';
import { UpdateModal, GetNoteInfo } from '../redux/modules/score';

const Note = (props) => {
	const dispatch = useDispatch();
	const isModal = useSelector((state) => state.score.isModal);

	const { color, content, index, noteId, scoreId, status, userNick, note } = props;

	const getNote = () => {
		const synth = new Tone.Synth().toDestination();
		synth.triggerAttackRelease(note[0], note[1]);

		dispatch(GetNoteInfo(props));
		dispatch(UpdateModal(!isModal));
	};

	const noteHandler = () => {
		getNote();
	};

	return (
		<>
			<NoteFront color={color} status={status} onClick={noteHandler} />
		</>
	);
};

Note.defaultProps = {
	color: 'red',
	content: '메리크리스마스',
	index: '1',
	noteId: '1',
	scoreId: '1',
	status: false,
	userNick: 'kyuung',
	note: ['G4', '16n'],
};
// #224732

const NoteFront = styled.button`
	border: none;
	width: 3.2rem;
	height: 3.2rem;
	border-radius: 3.2rem;
	margin: 0.5rem;
	&:hover {
		opacity: 70%;
		cursor: pointer;
		transform-origin: left;
		transform: rotateY(20deg);
		transform: rotateX(25deg);
	}
	transition: opacity 180ms ease-in-out;
	transition: transform 250ms ease-in-out;
	background: radial-gradient(
		circle at 70px 70px,
		${(props) => (props.status ? props.color : '#224732')},
		#fff
	);
	transform-style: preserve-3d;
	transform-origin: right;
`;

export default Note;
