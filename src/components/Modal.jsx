import React, { useRef } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { CgCloseO } from 'react-icons/cg';
import { UpdateModal } from '../redux/modules/score';
import { postNoteMD } from '../redux/async/score';

const Modal = () => {
	const dispatch = useDispatch();

	const nickname = useRef();
	const comment = useRef();
	const pw = useRef();

	const noteInfo = useSelector((state) => state.score.noteInfo);
	const isModal = useSelector((state) => state.score.isModal);

	const score = useSelector((state) => state.score.score);
	const list = useSelector((state) => state.score.test);

	const postNote = () => {
		if (!nickname.current.value || !pw.current.value || !comment.current.value) {
			alert('내용을 전부 채워주세요!');
		} else {
			const data = {
				userNick: nickname.current.value,
				userPw: pw.current.value,
				contents: comment.current.value,
				index: noteInfo.index,
				scoreId: Number(window.location.pathname.split('/')[2]),
			};
			dispatch(postNoteMD(data));
		}
	};

	return (
		<>
			{isModal &&
				(noteInfo.status ? (
					<Memo>
						<ExitBtn>
							<CgCloseO
								onClick={() => dispatch(UpdateModal(false))}
								cursor="pointer"
								size="3.5rem"
								color="#CE3A4A"
							/>
						</ExitBtn>
						<Nickname>이름 : {noteInfo.userNick}</Nickname>
						<Title>{noteInfo.content}</Title>
					</Memo>
				) : (
					<Memo>
						<Label
							onClick={() => {
								console.log(list);
							}}
						>
							이름을 입력해주세요
						</Label>
						<Input ref={nickname} />
						<Label>한마디를 남겨주세요</Label>
						<Input ref={comment} />
						<Label>비밀번호를 입력해주세요</Label>
						<Input ref={pw} />
						<PostBtn onClick={postNote}>남기기</PostBtn>
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
	background-color: #f2e2ce;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	border-radius: 5%;
	border: none;
`;

const Label = styled.label`
	width: 30rem;
	color: #468263;
	margin-bottom: 0.5rem;
	font-size: 1.2rem;
	text-align: left;
`;

const Input = styled.input`
	width: 30rem;
	height: 3rem;
	border-radius: 0.5rem;
	border: none;
	margin-bottom: 2rem;
	padding-left: 0.5rem;
`;

const PostBtn = styled.button`
	width: 15rem;
	height: 2.5rem;
	border-radius: 0.5rem;
	border: none;
	background-color: #468263;
	color: #fff;
`;

const Nickname = styled.h1`
	font-size: 2.5rem;
	margin-bottom: 4rem;
	color: #468263;
`;

const Title = styled.h1`
	font-size: 1.5rem;
	color: #a68160;
`;

const ExitBtn = styled.button`
	position: absolute;
	top: 2rem;
	right: 3rem;
	background: none;
	border: none;
`;

export default Modal;
