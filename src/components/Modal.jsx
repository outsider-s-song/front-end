import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

const Modal = () => {
	const dispatch = useDispatch();
	const noteInfo = useSelector((state) => state.score.noteInfo);
	const isModal = useSelector((state) => state.score.isModal);
	return (
		<>
			{isModal &&
				(noteInfo ? (
					<Memo>
						<h2>이름 : {noteInfo.userNick}</h2>
						<p>{noteInfo.content}</p>
					</Memo>
				) : (
					<Memo>
						<label>이름을 입력해주세요</label>
						<input />
						<label>한마디를 남겨주세요</label>
						<input />
						<label>비밀번호를 입력해주세요</label>
						<input />
						<button>남기기</button>
					</Memo>
				))}
		</>
	);
};

const Memo = styled.div`
	position: absolute;
	z-index: 2;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 50vw;
	max-width: 800px;
	min-width: 300px;
	height: 50vh;
	max-height: 500px;
	min-height: 200px;
	border: 1px solid lightgray;
	background-color: white;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	border-radius: 5%;
	border: none;
`;

export default Modal;
