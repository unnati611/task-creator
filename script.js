let UserName = "";
function start() {
  UserName = document.getElementById("UserName").value;
  UserName = UserName.charAt(0).toUpperCase() + UserName.slice(1);
  console.log(UserName);
  window.location.href = `index2.html?name=${UserName}`;
  let name = document.getElementById("name");
  name.innerText = UserName;
}
