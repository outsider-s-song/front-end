import React, { useEffect } from 'react';
import styled from 'styled-components';

const LetItSnow = () => {
	const [star, setStar] = React.useState([]);
	function getRandomArbitrary(min, max) {
		return Math.random() * (max - min) + min;
	}
	useEffect(() => {
		const starNum = new Array(50).fill(0);
		setStar(starNum);
	}, []);

	return (
		<>
			<Container>
				{star?.map((num, idx) => (
					<Snow
						key={idx}
						size={getRandomArbitrary(0.4, 0.9)}
						pos={getRandomArbitrary(1, 200)}
						time={getRandomArbitrary(4, 9)}
					/>
				))}
			</Container>
		</>
	);
};

const Snow = styled.div`
	position: absolute;
	left: ${({ pos }) => pos}rem;
	width: ${({ size }) => size}rem;
	height: ${({ size }) => size}rem;
	border: none;
	background: #fff;
	border-radius: 50%;
	animation-name: star-ani;
	animation-duration: ${({ time }) => time}s;
	animation-iteration-count: infinite;
	opacity: 100%;
	@keyframes star-ani {
		30% {
			opacity: 80%;
		}

		100% {
			transform: translateY(78vh);
			opacity: 0%;
		}
	}
`;

const Container = styled.section`
	display: flex;
	justify-content: space-around;
	overflow: hidden;
`;

export default LetItSnow;
