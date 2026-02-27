let username = "";
let photoFeed = [];
let chatMessages = [];

// Login
function login() {
  username = document.getElementById("username").value;
  if(username){
    document.getElementById("login").style.display = "none";
    document.getElementById("mainApp").style.display = "block";
    document.getElementById("profileName").innerText = "Hello, " + username;
  }
}

// Upload Photo
function uploadPhoto() {
  const photoInput = document.getElementById("photoInput");
  if(photoInput.files.length > 0){
    const reader = new FileReader();
    reader.onload = function(e){
      photoFeed.unshift(e.target.result);
      renderPhotos();
    }
    reader.readAsDataURL(photoInput.files[0]);
  }
}

// Render Photos
function renderPhotos(){
  const feedDiv = document.getElementById("photoFeed");
  feedDiv.innerHTML = "";
  photoFeed.forEach((photo, i)=>{
    feedDiv.innerHTML += `<div>
      <img src="${photo}" />
      <p>Posted by: ${username}</p>
      <button onclick="likePhoto(${i})">Like ❤️</button>
      <span id="likes${i}">0</span>
    </div>`;
  });
}

let likesCount = [];

// Like Photo
function likePhoto(i){
  likesCount[i] = (likesCount[i] || 0) + 1;
  document.getElementById("likes"+i).innerText = likesCount[i];
}

// Chat
function sendMessage(){
  const input = document.getElementById("chatInput");
  if(input.value){
    chatMessages.push(`${username}: ${input.value}`);
    renderChat();
    input.value = "";
  }
}

function renderChat(){
  const chatBox = document.getElementById("chatBox");
  chatBox.innerHTML = "";
  chatMessages.forEach(msg => {
    chatBox.innerHTML += `<p>${msg}</p>`;
  });
  chatBox.scrollTop = chatBox.scrollHeight;
}
