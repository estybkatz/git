/* this function brings out a toast for success of something */
const signupToast = document.getElementById("signup-toast");
const profileToast =document.getElementById("profile-toast");
let id = 1;
const showToast = (msg, success = true,place) => {
  let thisId = id++;
  if (place===1){
  signupToast.innerHTML += `<div id="toastMsg-${thisId}" class="${
    success ? "success" : "error"
  }">${msg}
  <div class="toast-timer"></div>
  </div>`;
  setTimeout(() => {
    document.getElementById(`toastMsg-${thisId}`).remove();
  }, 3000);
}
else if (place===2){
  profileToast.innerHTML += `<div id="toastMsg-${thisId}" class="${
    success ? "success" : "error"
  }">${msg}
  <div class="toast-timer"></div>
  </div>`;
  setTimeout(() => {
    document.getElementById(`toastMsg-${thisId}`).remove();
  }, 3000);

}
};

export default showToast;
