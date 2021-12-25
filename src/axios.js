import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://jhhong0930.shop/',
	headers: {
		'content-type': 'application/json;charset=UTF-8',
		accept: 'application/json',
		'Access-Control-Allow-Origin': '*',
	},
	withCredentials: true,
});

export const apis = {
	//노트 리스트 조회
	getNoteListAPI: (id) => instance.get(`/notes?scoreId=${id}`),

	//컬랙션 페이지 scores 리스트 조API
	getScoresListAPI: () => instance.get(`/scores`),

	//노트 작성
	addNoteAPI: (data) => instance.post(`/notes`, data),

	//노트 수정
	updateNoteAPI: (id, data) => instance.put(`/notes?noteId=${id}`, data),

	//노트 삭제
	deleteNoteAPI: (id) => instance.delete(`/notes?noteId=${id}`),
};
