const editProfileBtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile");
const editProfileCloseBtn = editProfileModal.querySelector(".modal__close-btn");
const profileForm = document.forms["profile-form"];
const editProfileNameInput = editProfileModal.querySelector("#profile-name-input");
const editProfileDescriptionInput = editProfileModal.querySelector("#profile-description-input");

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
  });
editProfileCloseBtn.addEventListener("click", function () {
  closeModal(editProfileModal);
});
    editProfileModal.classList.remove ("modal_is-opened"); 

    const newPostForm = newPostModal.querySelector(".new-post__form");
    const cardImageInput = newPostModal.querySelector("#card-image-input");
    const cardTitleInput = newPostModal.querySelector("#card-title-input");

    function handleNewPostFormSubmit(evt) {
        evt.preventDefault();
        console.log("Image link:", cardImageInput.value);
        console.log("Title:", cardTitleInput.value);
        closeModal(newPostModal);
    }
newPostBtn.addEventListener("click", function () {
     openModal(newPostModal); })

 newPostForm.addEventListener("submit", handleNewPostFormSubmit);    

newPostCloseBtn.addEventListener("click", function () {
      closeModal(newPostModal);});

    function handleEditProfileFormSubmit(evt) {
        evt.preventDefault();
        profileNameEl.textContent = editProfileNameInput.value;
        profileDescriptionEl.textContent = editProfileDescriptionInput.value;
        editProfileModal.classList.remove("modal_is-opened");
    }
    profileForm.addEventListener("submit", handleEditProfileFormSubmit);