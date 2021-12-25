import React from 'react';
import styled from 'styled-components';
import { apis } from '../axios';

import { useDispatch, useSelector } from 'react-redux';
import { addScoreList } from '../redux/modules/collection';

import CollectionCard from '../components/CollectionCard';

const Collection = () => {
	const scoreList = useSelector((state) => state.collection.scoreList);
	const dispatch = useDispatch();
	React.useEffect(() => {
		apis.getScoresListAPI()
			.then((res) => {
				const data = res.data;
				dispatch(addScoreList(data));
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	return (
		<>
			<Contents>
				<Title>아싸들의 연주</Title>
				<ul>
					{scoreList.map((l, idx) => {
						return (
							<CollectionCard cardId={l.scoredId} key={idx} noteList={l.noteList} />
						);
					})}
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
