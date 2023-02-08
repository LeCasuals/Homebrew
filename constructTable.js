fetch("Data/Deities/MasterList.csv")
  .then(function (response){return response.json();})
  .then(function (data){
	  const jsons = data.text().split(",");
	  console.log(jsons.length);
	  
	  for (let json in jsons) {
		fetch(json)
		  .then(function (response){return response.json();})
		  .then(function (data){
			let table = document.createElement("table");
			 
			const list = JSON.parse(JSON.stringify(data));
						 
			var cols = [];
			for (let i = 0; i < list.length; i++) {
				for (var k in list[i]) {
					if (cols.indexOf(k) === -1) { //Prevents duplication somehow
						cols.push(k);
					}
				}
			}
			
			for (let i = 0; i < list.length; i++) { // Adding the data to the table
				trow = table.insertRow(-1); // Create a new row
				for (var j = 0; j < cols.length; j++) {
					var cell = trow.insertCell(-1);
					cell.innerHTML = list[i][cols[j]]; // Inserting the cell at particular place
				}
			}
			
			let MainTable = document.getElementById("DeityTable");
			MainTable.appendChild(table);
		  });
	  }
	  sortTable(1);
  });

