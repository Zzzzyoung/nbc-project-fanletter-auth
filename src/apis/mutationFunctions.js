import fanLetterApi from "./fanLetter";

const addFanLetter = async (newFanLetter) => {
  try {
    await fanLetterApi.post("/fanLetters?_sort=-createdAt", newFanLetter);
  } catch (error) {
    alert("FanLetter를 추가하는 중에 오류가 발생했습니다.");
    console.error(error);
  }
};

const deleteFanLetter = async (id) => {
  try {
    await fanLetterApi.delete(`/fanLetters/${id}`);
  } catch (error) {
    alert("FanLetter를 삭제하는 중에 오류가 발생했습니다.");
    console.error(error);
  }
};

const editFanLetter = async ({ id, editedTextArea }) => {
  try {
    await fanLetterApi.patch(`/fanLetters/${id}`, {
      content: editedTextArea,
    });
  } catch (error) {
    alert("FanLetter를 수정하는 중에 오류가 발생했습니다.");
    console.error(error);
  }
};

export { addFanLetter, deleteFanLetter, editFanLetter };
