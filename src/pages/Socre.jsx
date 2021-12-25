import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Modal from '../components/Modal';
import NoteContainer from '../components/NoteContainer';
import { UpdateModal } from '../redux/modules/score';
import { CgPlayButtonO, CgPlayPauseO, CgMenuGridO } from 'react-icons/cg';
import { useNavigate } from 'react-router';

const Socre = () => {
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
				<div onClick={(e) => e.stopPropagation()}>
					<GoToCollection onClick={() => navigate('/collection')}>
						<CgMenuGridO cursor="pointer" size="6rem" color="white" />
					</GoToCollection>
					<Title>Score 1</Title>
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
								onClick={() => setMusicStatus(true)}
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
