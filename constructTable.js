fetch("Deities.json")
  .then(function (response){return response.json();})
  .then(function (data){
	var table = document.getElementById("DeityTable");
	 
	const list = JSON.parse(JSON.stringify(data));
	             
	var cols = [];
	for (var i = 0; i < list.length; i++) {
		for (var k in list[i]) {
			if (cols.indexOf(k) === -1) { //Prevents duplication somehow
				cols.push(k);
			}
		}
	}
	
	// Adding the data to the table
	for (var i = 0; i < list.length; i++) {
		// Create a new row
		trow = table.insertRow(-1);
		if (i % 2 != 0) trow.style.background = "#626262";
		for (var j = 0; j < cols.length; j++) {
			var cell = trow.insertCell(-1);
			 
			// Inserting the cell at particular place
			cell.innerHTML = list[i][cols[j]];
		}
	}
  })