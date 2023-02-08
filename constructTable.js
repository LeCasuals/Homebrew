fetch("Data/Deities/MasterList.csv")
  .then(function (response){return response.text();})
  .then(function (data){
	  const jsons = data.split('\n');
	  
	  for (let json of jsons) {
		fetch("Data/Deities/" + json)
		  .then(function (response){return response.json();})
		  .then(function (data){
			let table = document.getElementById("DeityTable");
			 
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
		  });
	  }
	  sortTable(1);
  });

