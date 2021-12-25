import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import * as Tone from 'tone';
import { UpdateModal, GetNoteInfo } from '../redux/modules/score';

const Note = (props) => {
	const dispatch = useDispatch();
	const isModal = useSelector((state) => state.score.isModal);
	const synth = new Tone.Synth().toDestination();
	const { userNick, color, note, location, desc, isMemo } = props;

	const getNote = () => {
		// synth.triggerAttackRelease('G4', '16n');
		isMemo ? dispatch(GetNoteInfo(props)) : dispatch(GetNoteInfo(false));
		dispatch(UpdateModal(!isModal));
	};

	const noteHandler = () => {
		getNote();
	};

	return (
		<>
			<NoteFront color={color} onClick={noteHandler} />
		</>
	);
};

Note.defaultProps = {
	userNick: 'kyuung',
	content: '안녕',
	isMemo: false,
	note: 'G5',
	color: 'red',
	index: 0,
};

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
	background: radial-gradient(circle at 70px 70px, ${(props) => props.color}, #fff);
	transform-style: preserve-3d;
	transform-origin: right;
`;

export default Note;
