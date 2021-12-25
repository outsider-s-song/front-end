import React from 'react';
import styled, { css } from 'styled-components';

import CollectionCard from '../components/CollectionCard';

const Collection = () => {
	return (
		<>
			<Contents>
				<Title>아싸들의 연주</Title>
				<ul>
					<CollectionCard />
					<CollectionCard />
					<CollectionCard />
					<CollectionCard />
					<CollectionCard />
				</ul>
			</Contents>
		</>
	);
};

const Contents = styled.main`
	max-width: 1200px;
	width: 100%;
	margin: 0 auto;

	ul {
		display: flex;
		gap: 20px;
		flex-wrap: wrap;
	}
`;

const Title = styled.h1`
	width: 100%;
	height: 50px;
	text-align: center;
`;

export default Collection;
