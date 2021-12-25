import React from 'react';
import { AiFillPlayCircle } from 'react-icons/ai';
import styled, { css } from 'styled-components';

const CollectionCard = () => {
	return (
		<>
			<Card>
				<button>
					<AiFillPlayCircle size="100%" fill="white" />
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
