import fanLetterApi from "../apis/fanLetter";

const getFanLetters = async () => {
  try {
    const { data } = await fanLetterApi.get("/fanLetters?_sort=-createdAt");
    return data;
  } catch (error) {
    alert("FanLetter 데이터를 불러오는 중에 오류가 발생했습니다.");
    console.error(error);
  }
};

export { getFanLetters };
