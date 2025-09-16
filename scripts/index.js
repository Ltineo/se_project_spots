const initialCards = [
  {
    name: "Golden Gate Bridge",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/7-photo-by-griffin-wooldridge-from-pexels.jpg",
  },
  {
    name: "Val Thorens", 
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },
  {
    name: "Restaurant Terrace",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
  },
  {
    name: "An outdoor cafe",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
  },
  {
    name: "A very long bridge, over the forest and through the trees",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
  },
  {
    name: "Tunnel with morning light",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
  },
  {
    name: "Mountain house",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
},];
const editProfileBtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile");
const editProfileCloseBtn = editProfileModal.querySelector(".modal__close-btn");
const profileForm = document.forms["profile-form"];
const editProfileNameInput = editProfileModal.querySelector(
  "#profile-name-input"
);
const editProfileDescriptionInput = editProfileModal.querySelector(
  "#profile-description-input"
);

const newPostBtn = document.querySelector(".profile__add-btn");
const newPostModal = document.querySelector("#new-post");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn");

const profileNameEl = document.querySelector(".profile__name");
const profileDescriptionEl = document.querySelector(".profile__description");

function openModal(modal) {
  modal.classList.add("modal_is-opened");

}
function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
}



editProfileBtn.addEventListener("click", function () {
  editProfileNameInput.value = profileNameEl.textContent;
  editProfileDescriptionInput.value = profileDescriptionEl.textContent;
  resetValidation(handleEditProfileFormSubmit, [editProfileNameInput, editProfileDescriptionInput]);
  openModal(editProfileModal);
});

document.querySelectorAll('.modal__close-btn')
  .forEach((btn) => {
    btn.addEventListener("click", function () {
      closeModal(btn.closest(".modal"));
    });
  });

const newPostForm = newPostModal.querySelector(".modal__form");
const cardImageInput = newPostModal.querySelector("#card-image-input");
const cardTitleInput = newPostModal.querySelector("#card-title-input");
const CardSubmitBtn = newPostModal.querySelector(".modal__button");


const previewModal = document.querySelector("#preview-modal");
const previewModalCloseBtn = previewModal.querySelector(".modal__close-btn");


const previewImageEl = previewModal.querySelector(".modal__image");
const previewCaptionEl = previewModal.querySelector(".modal__caption");

const cardTemplate = document.querySelector("#card-template");
const cardList = document.querySelector(".cards__list");

function openModal(modal) {
  modal.classList.add("modal_is-opened"); }

function closeModal(modal) {
  modal.classList.remove("modal_is-opened"); }
 

function getCardElement(data) {
  const cardElement = cardTemplate.content.querySelector(".card").cloneNode(true);
  const cardTitleEl = cardElement.querySelector(".card__title");
  const cardImageEl = cardElement.querySelector(".card__image");

  cardImageEl.src = data.link;
  cardImageEl.alt = data.name;
  cardTitleEl.textContent = data.name;


  const cardLikeBtnEl = cardElement.querySelector(".card__like-button");
  cardLikeBtnEl.addEventListener("click", () => {
    cardLikeBtnEl.classList.toggle("card__like-button_active");
  });

  const cardDeleteBtnEl = cardElement.querySelector(".card__delete-button");
  cardDeleteBtnEl.addEventListener("click", function () { 
    cardElement.remove();
  });
 
  cardImageEl.addEventListener("click", function () {
    previewImageEl.src = data.link;
    previewImageEl.alt = data.name;
    previewCaptionEl.textContent = data.name;
    openModal(previewModal);
  });

  return cardElement;
}

function renderCard(cardData, method) {
  const cardElement = getCardElement(cardData);
  if (method === "append")
    cardList.append(cardElement);
  else if (method === "prepend") 
    cardList.prepend(cardElement);
  } 

function handleNewPostFormSubmit(evt) {
  evt.preventDefault();
  console.log("Image link:", cardImageInput.value);
  const inputValues = {
  name: cardTitleInput.value,
  link: cardImageInput.value,
}


renderCard(inputValues, "prepend");
  evt.target.reset()

  console.log("Title:", cardTitleInput.value);
  closeModal(newPostModal);
}
newPostBtn.addEventListener("click", function () {
  openModal(newPostModal);
});

newPostForm.addEventListener("submit", handleNewPostFormSubmit);



function handleEditProfileFormSubmit(evt) {
  evt.preventDefault();
  profileNameEl.textContent = editProfileNameInput.value;
  profileDescriptionEl.textContent = editProfileDescriptionInput.value;
  closeModal(editProfileModal);
}

function handleCardSubmit(evt) {
  evt.preventDefault();
  const inputValues = {
    name: cardTitleInput.value,
    link: cardImageInput.value,
  };
  renderCard(inputValues, "prepend");
  evt.target.reset();
  disableButton(CardSubmitBtn, settings);
  closeModal(newPostModal);
}


profileForm.addEventListener("submit", handleEditProfileFormSubmit);





initialCards.forEach((cardData) => {
  renderCard(cardData, "append");
});