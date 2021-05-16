function login() {
    var name = document.getElementById("username_input").value;
    localStorage.setItem("user=", name);
    window.location= "let's_chat_room.html";
}