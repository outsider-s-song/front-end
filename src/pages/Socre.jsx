import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Modal from '../components/Modal';
import NoteContainer from '../components/NoteContainer';
import { UpdateModal } from '../redux/modules/score';
import { CgPlayButtonO, CgPlayPauseO, CgMenuGridO } from 'react-icons/cg';
import { useNavigate } from 'react-router';
import * as Tone from 'tone';

const Socre = () => {
	const synth = new Tone.PolySynth(Tone.Synth).toDestination();
	const now = Tone.now();
	const disptach = useDispatch();
	const navigate = useNavigate();
	const [musicStatus, setMusicStatus] = useState(false);

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
								onClick={() => setMusicStatus(false)}
								size="6rem"
								color="white"
								cursor={'pointer'}
							/>
						) : (
							<CgPlayButtonO
								onClick={() => {
									setMusicStatus(true);
									synth.triggerAttackRelease('D4', '8n', now);
									synth.triggerAttackRelease('F4', '8n', now + 0.5);
									synth.triggerAttackRelease('A4', '8n', now + 1);
									synth.triggerAttackRelease('C5', '8n', now + 1.5);
									synth.triggerAttackRelease('E5', '8n', now + 2);
									// synth.triggerRelease(['D4', 'F4', 'A4', 'C5', 'E5'], now + 4);
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
