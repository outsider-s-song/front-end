import React from 'react';
import { useNavigate } from 'react-router';
import { FaPlay, FaPause } from 'react-icons/fa';
import styled, { css } from 'styled-components';

const CollectionCard = (props) => {
	const [play, setPlay] = React.useState(true);
	const navigate = useNavigate();
	const playEvent = (e) => {
		setPlay(!play);
		e.stopPropagation();
	};
	const cardClick = () => {
		navigate(`/score/${props.cardId}`);
	};
	return (
		<>
			<Card cardId="1" onClick={cardClick}>
				<button onClick={playEvent}>
					{/* {play ? (
						<FaPlay size="100%" fill="white" />
					) : (
						<FaPause size="100%" fill="white" />
					)} */}
				</button>
			</Card>
		</>
	);
};
const itemCenter = css`
	display: flex;
	align-items: center;
	justify-content: center;
`;
const Card = styled.li`
	flex: 1;
	min-width: 18.75rem;
	height: 12.5rem;
	background-color: rgba(225, 225, 225, 0.2);
	border-radius: 0.625rem;
	${itemCenter}
	button {
		width: 3.125rem;
		background: none;
		border: none;
		${itemCenter}
	}
`;

export default CollectionCard;
