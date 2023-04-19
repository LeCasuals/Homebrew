function Toggle(toggle, letter) {
	const rows = document.getElementById("MainTable").rows;
	for (let i = 1; i < rows.length; i++) {
	  let value = rows[i].cells[rows[i].cells.length - 1].innerHTML;
	  if (value.includes(letter))  {
		  rows[i].style.display = toggle ? "table-row" : "none";
	  }
	}
	colorCode();
}