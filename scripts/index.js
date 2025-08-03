const initialCards = [
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
  openModal(editProfileModal);
  openModal (editProfileModal);
});
editProfileCloseBtn.addEventListener("click", function () {
  closeModal(editProfileModal);
});

const newPostForm = newPostModal.querySelector(".modal__form");
const cardImageInput = newPostModal.querySelector("#card-image-input");
const cardTitleInput = newPostModal.querySelector("#card-title-input");

function handleNewPostFormSubmit(evt) {
  evt.preventDefault();
  console.log("Image link:", cardImageInput.value);
  console.log("Title:", cardTitleInput.value);
  closeModal(newPostModal);
}
newPostBtn.addEventListener("click", function () {
  openModal(newPostModal);
});

newPostForm.addEventListener("submit", handleNewPostFormSubmit);

newPostCloseBtn.addEventListener("click", function () {
  closeModal(newPostModal);
});

function handleEditProfileFormSubmit(evt) {
  evt.preventDefault();
  profileNameEl.textContent = editProfileNameInput.value;
  profileDescriptionEl.textContent = editProfileDescriptionInput.value;
  closeModal(editProfileModal);
}
profileForm.addEventListener("submit", handleEditProfileFormSubmit);

initialCards.forEach(function (item) {
  console.log(item.name);
  console.log(item.link);
});