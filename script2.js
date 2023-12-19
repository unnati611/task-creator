let name = document.getElementById("name");
name.innerText = location.search.replace("?name=", "");

let data = localStorage.getItem("taskData");
data = data ? JSON.parse(data) : [];
function addtask() {
  document.getElementById("currenttaskdetails").style.display = "none";
  document.getElementById("createtask").style.display = "block";
}

function currenttask() {
  document.getElementById("createtask").style.display = "none";
  document.getElementById("currenttaskdetails").style.display = "block";
  Showdata();
}

function addnewtask() {
  let StarTtime = document.getElementById("start").value;
  let EndTime = document.getElementById("end").value;
  let newtask = document.getElementById("taskname");
  let description = document.getElementById("detail").value;
  let Date = document.getElementById("date");
  newtask = newtask.value;
  newtask = newtask.charAt(0).toUpperCase() + newtask.slice(1);
  console.log(newtask);

  if (StarTtime === "" || EndTime === "" || newtask === "") {
    alert("please enter the value of Task name, Start time,endtime");
    return;
  }
  document.getElementById("createtask").style.display = "none";
  document.getElementById("currenttaskdetails").style.display = "block";
  document.getElementById("currenttaskdetails").innerHTML = "";

  const newdata = {
    name: newtask,
    starttime: StarTtime,
    endtime: EndTime,
    detail: description,
    date: Date,
  };
  data.push(newdata);
  localStorage.setItem("taskData", JSON.stringify(data));
  Showdata();
  console.log(data);
}
console.log(data);
function edittask(e) {
  let editvalue = prompt("Please enter your edited task");
  editvalue = editvalue.charAt(0).toUpperCase() + editvalue.slice(1);
  console.log(editvalue);
  console.log(e.target.id);
  let currentidnumber = e.target.id;
  currentidnumber = currentidnumber.slice(7);
  console.log(currentidnumber);
  let editcontentid = `h3-${currentidnumber}`;
  console.log(editcontentid);
  let newedition = document.getElementById(editcontentid);
  console.log(newedition);
  debugger;
  data[currentidnumber].name = editvalue;
  document.getElementById(`ctask-${currentidnumber}`).remove();

  Showdata();
  //   console.log(data[editcontentid].name);
}
function dlttask(u) {
  console.log(u.target.id);
  let currentidnumber = u.target.id;
  debugger;
  currentidnumber = currentidnumber.slice(6);
  console.log(currentidnumber);
  let editcontentid = `ctask-${currentidnumber}`;
  console.log(editcontentid);
  data.splice(Number(currentidnumber), 1);
  localStorage.setItem("taskData", JSON.stringify(data));
  Showdata();
}
function viewtask(v) {
  debugger;
  console.log(v.target.id);
  let currentidnumber = v.target.id;
  currentidnumber = currentidnumber.slice(7);
  console.log(currentidnumber);
  let Viewdiv = document.createElement("div");
  Viewdiv.className = "viewdiv";
  Viewdiv.id = `viewdiv-${currentidnumber}`;
  let maindiv = document.getElementById("currenttaskdetails");
  console.log(maindiv);
  maindiv.appendChild(Viewdiv);
  let model_content = document.createElement("div");
  model_content.className = "model_content";
  model_content.id = `model_content-${currentidnumber}`;
  Viewdiv.appendChild(model_content);
  let h3 = document.createElement("h3");
  h3.className = "h3";
  h3.id = `h3-${currentidnumber}`;
  currentidnumber = Number.parseInt(currentidnumber);
  model_content.appendChild(h3);
  h3.innerHTML = "Task name:" + data[currentidnumber].name;
  let h32 = document.createElement("h3");
  h32.className = "h3";
  h32.id = `h32-${currentidnumber}`;
  currentidnumber = Number.parseInt(currentidnumber);
  model_content.appendChild(h32);
  h32.innerHTML = "Starttime:" + data[currentidnumber].starttime;
  let h33 = document.createElement("h3");
  h33.className = "h3";
  h33.id = `h33-${currentidnumber}`;
  currentidnumber = Number.parseInt(currentidnumber);
  model_content.appendChild(h33);
  h33.innerHTML = "Endtime :" + data[currentidnumber].endtime;
  let details = document.createElement("h3");
  details.className = "h3";
  details.id = `detail-${currentidnumber}`;
  details.innerHTML = "detail :" + data[currentidnumber].detail;
  model_content.appendChild(details);
  let closebtn = document.createElement("button");
  closebtn.innerHTML = "close";
  model_content.appendChild(closebtn);
  closebtn.addEventListener("click", closeview);
  function closeview() {
    Viewdiv.remove();
  }
}

function addData(object, index) {
  let maindiv = document.getElementById("currenttaskdetails");
  let div = document.createElement("div");
  div.className = "ctask";
  div.id = `ctask-${index}`;
  let input = document.createElement("input");
  input.type = "checkbox";
  div.appendChild(input);
  let h3 = document.createElement("h3");
  h3.id = `h3-${index}`;
  div.appendChild(h3);
  h3.innerHTML = object.name;
  let editbtn = document.createElement("button");
  editbtn.className = "editbtn";
  editbtn.id = `editbtn${index}`;
  editbtn.innerHTML = "Edit";
  editbtn.addEventListener("click", edittask);
  div.appendChild(editbtn);
  let dltbtn = document.createElement("button");
  dltbtn.className = "dltbtn";
  dltbtn.id = `dltbtn${index}`;
  dltbtn.innerHTML = "Delete";
  dltbtn.addEventListener("click", dlttask);
  div.appendChild(dltbtn);
  let viewbtn = document.createElement("button");
  viewbtn.className = "viewbtn";
  viewbtn.id = `viewbtn${index}`;
  viewbtn.innerHTML = "ViewDetails";
  viewbtn.addEventListener("click", viewtask);
  div.appendChild(viewbtn);
  maindiv.appendChild(div);
}
function Showdata() {
  document.getElementById("currenttaskdetails").innerHTML = "";
  for (let index = 0; index < data.length; index++) {
    addData(data[index], index);
  }
}

const onDateChange = (e, obj) => {
  e.target.value = obj.value;
};
