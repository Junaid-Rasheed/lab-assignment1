function adding() {
  var name = document.getElementById("nameid").value;
  var gender = document.getElementById("genderOpt").value;
  var age = document.getElementById("ageid").value;
  var city = document.getElementById("cityid").value;

  var table = document.getElementsByTagName("table")[0];

  var newRow = table.insertRow(table.length);

  var cell1 = newRow.insertCell();
  var cell2 = newRow.insertCell();
  var cell3 = newRow.insertCell();
  var cell4 = newRow.insertCell();
  var cell5 = newRow.insertCell();

  cell1.innerHTML = name;
  cell2.innerHTML = gender;
  cell3.innerHTML = age;
  cell4.innerHTML = city;
  cell5.innerHTML =
    "<button class='btn btn-danger' onclick='deleteRow(this);'>Delete</button>";
  selectRow();
}

function deleteRow(name) {
  var p = name.parentNode.parentNode;
  p.parentNode.removeChild(p);
}

function reset() {
  document.getElementById("nameid").value = null;
  document.getElementById("genderOpt").value = null;
  document.getElementById("ageid").value = null;
  document.getElementById("cityid").value = null;
}

function selectRow() {
  var table = document.getElementById("table");

  for (var i = 0; i < table.rows.length; i++) {
    table.rows[i].onclick = function () {
      //rIndex = this.rowIndex;
      document.getElementById("nameid").value = this.cells[0].innerHTML;
      document.getElementById("ageid").value = this.cells[2].innerHTML;
      document.getElementById("cityid").value = this.cells[3].innerHTML;
    };
  }
}

/// sir is function main jaddu h kindly check kr lein.
function update() {
  var name = document.getElementById("nameid").value;
  var gender = document.getElementsByName("genderOpt").value;
  var age = document.getElementById("ageid").value;
  var city = document.getElementById("cityid").value;

  table.rows[rIndex].cells[0].innerHTML = name;
  table.rows[rIndex].cells[1].innerHTML = gender;
  table.rows[rIndex].cells[2].innerHTML = age;
  table.rows[rIndex].cells[3].innerHTML = city;
}
