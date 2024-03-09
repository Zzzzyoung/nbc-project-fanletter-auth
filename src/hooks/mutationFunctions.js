// import { toast } from "react-toastify";
// import authApi from "./auth";
import fanLetterApi from "../apis/fanLetter";

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

// const login = async ({ id, password }) => {
//   try {
//     const { data } = await authApi.post("/login?expiresIn=10m", {
//       id,
//       password,
//     });

//     const { accessToken, avatar, nickname, userId } = data;

//     if (data.success) {
//       toast.success("로그인 성공!");
//       return { accessToken, avatar, nickname, userId }; // 객체로 넘겨주기
//     }
//   } catch (error) {
//     alert("로그인 중에 오류가 발생했습니다.");
//     console.error(error);
//   }
// };

// const editProfile = async (formData) => {
//   try {
//     const accessToken = localStorage.getItem("accessToken");
//     const { data } = await authApi.patch("/profile", formData, {
//       headers: {
//         "Content-Type": "multipart/form-data",
//         Authorization: `Bearer ${accessToken}`,
//       },
//     });
//     return data;
//   } catch (error) {
//     alert("프로필 수정 중에 오류가 발생했습니다.");
//     console.error(error);
//   }
// };

export { addFanLetter, deleteFanLetter, editFanLetter };
