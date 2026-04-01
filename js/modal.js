const modal = document.querySelector("#modal");
const modalBtn = document.querySelector("#modal-btn");

export const modalWindow = (msg) => {
  const modalMsg = document.querySelector("#modal-msg");

  modal.style.display = "flex";
  modalMsg.textContent = msg;
};

export const modalClose = () => {
  modal.style.display = "none";
};

// modal 확인 클릭 시 close
modalBtn.addEventListener("click", () => {
  modalClose();
});
