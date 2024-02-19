import fakeData from "fakeData.json";

// 액션 타입 정의
// 팬레터 추가
const ADD_FANLETTER = "fanLetters/ADD_FANLETTER";

// 팬레터 삭제
const DELETE_FANLETTER = "fanLetters/DELETE_FANLETTER";

// 팬레터 수정
const EDIT_FANLETTER = "fanLetters/EDIT_FANLETTER";

// 액션 create 함수
export const addFanLetter = (payload) => {
  return {
    type: ADD_FANLETTER,
    payload,
  };
};

export const deleteFanLetter = (payload) => {
  return {
    type: DELETE_FANLETTER,
    payload,
  };
};

export const editFanLetter = (payload) => {
  return {
    type: EDIT_FANLETTER,
    payload,
  };
};

const initialState = fakeData;

function fanLetters(state = initialState, action) {
  // 리듀서
  switch (action.type) {
    case ADD_FANLETTER:
      const newFanLetter = action.payload;
      return [newFanLetter, ...state];
    case DELETE_FANLETTER:
      const fanLetterId = action.payload;
      return state.filter((fanLetters) => fanLetters.id !== fanLetterId);
    case EDIT_FANLETTER:
      const { id, editedTextArea } = action.payload;
      return state.map((fanLetters) => {
        if (fanLetters.id === id) {
          return { ...fanLetters, content: editedTextArea };
        } else {
          return fanLetters;
        }
      });
    default:
      return state;
  }
}

export default fanLetters;
