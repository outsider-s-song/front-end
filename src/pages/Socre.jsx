import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Modal from '../components/Modal';
import NoteContainer from '../components/NoteContainer';
import { UpdateModal } from '../redux/modules/score';
import { CgPlayButtonO, CgPlayPauseO, CgMenuGridO } from 'react-icons/cg';
import { useNavigate } from 'react-router';
import * as Tone from 'tone';
import { getNoteListMD, getScoresListMD } from '../redux/async/score';

const Socre = () => {
	const disptach = useDispatch();
	const navigate = useNavigate();
	const [musicStatus, setMusicStatus] = useState(false);

	useEffect(() => {
		const id = window.location.pathname.split('/')[2];
		disptach(getNoteListMD(id));
		disptach(getScoresListMD());
	}, []);

	let collection = useSelector((state) => state.score.scores);

	collection =
		collection.length > 0 &&
		collection?.filter(
			(score) => score.scoredId === Number(window.location.pathname.split('/')[2])
		);
	const noteList = collection[0]?.noteList;
	const musicArray = [];
	noteList?.map((note) => musicArray.push(note.note));

	return (
		<>
			<Background
				onClick={() => {
					disptach(UpdateModal(false));
				}}
			>
				<Title>Score 1</Title>
				<div onClick={(e) => e.stopPropagation()}>
					<GoToCollection onClick={() => navigate('/')}>
						<CgMenuGridO cursor="pointer" size="6rem" color="white" />
					</GoToCollection>

					<PlayerContainer>
						{musicStatus ? (
							<CgPlayPauseO
								onClick={() => {
									setMusicStatus(false);
								}}
								size="6rem"
								color="white"
								cursor={'pointer'}
							/>
						) : (
							<CgPlayButtonO
								onClick={() => {
									const synth = new Tone.PolySynth(Tone.Synth).toDestination();
									let now = Tone.now();
									setMusicStatus(true);

									for (let i = 0; i < musicArray.length; i++) {
										synth.triggerAttackRelease(
											musicArray[i][0],
											musicArray[i][1],
											now
										);
										now += 0.5;
									}
								}}
								size="6rem"
								color="white"
								cursor={'pointer'}
							/>
						)}
					</PlayerContainer>
					<NoteContainer />
					<Modal />
				</div>
			</Background>
		</>
	);
};

const Background = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 100vh;
	background-color: #132326;
`;

const PlayerContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-bottom: 2rem;
`;

const GoToCollection = styled.button`
	position: absolute;
	top: 2rem;
	right: 3rem;
	background: none;
	border: none;
`;

const Title = styled.h1`
	width: 100%;
	text-align: center;
	font-size: 2rem;
	color: white;
`;

export default Socre;
