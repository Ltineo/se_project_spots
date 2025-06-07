const editProfileBtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile");
const editProfileCloseBtn = editProfileModal.querySelector(".modal__close-btn");
const editProfileForm = editProfileModal.querySelector(".edit-profile__form");
const editProfileNameInput = editProfileModal.querySelector("#profile-name-input");
const editProfileDescriptionInput = editProfileModal.querySelector("#profile-description-input");

const newPostBtn = document.querySelector(".profile__add-btn");
const newPostModal = document.querySelector("#new-post");        
const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn");

const profileNameEl = document.querySelector(".profile__name");
const profileDescriptionEl = document.querySelector(".profile__description");

editProfileBtn.addEventListener("click", function () {
    editProfileNameInput.value = profileNameEl.textContent;
    editProfileDescriptionInput.value = profileDescriptionEl.textContent;});

editProfileCloseBtn.addEventListener("click", function () {
    editProfileModal.classList.remove ("modal_is-opened"); }); 


newPostBtn.addEventListener("click", function () {
    newPostModal.classList.add ("modal_is-opened"); });


newPostCloseBtn.addEventListener("click", function () {
    newPostModal.classList.remove ("modal_is-opened"); });

    function handleEditProfileFormSubmit(evt) {
        evt.preventDefault();
        profileNameEl.textContent = editProfileNameInput.value;
        profileDescriptionEl.textContent = editProfileDescriptionInput.value;
        editProfileModal.classList.remove("modal_is-opened");
    }
    editProfileForm.addEventListener("submit", handleEditProfileFormSubmit);