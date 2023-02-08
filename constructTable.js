fetch("Data/Deities/MasterList.csv")
  .then(function (response){return response.text();})
  .then(function (data){
	  const jsons = data.split('\n');
	  const table = document.getElementById("DeityTable");
	  
	  for (let json of jsons) {
		fetch("Data/Deities/" + json)
		  .then(function (response){return response.json();})
		  .then(function (data){
			const list = JSON.parse(JSON.stringify(data));
			
			let cols = [];
			for (let i = 0; i < list.length; i++) {
				for (let k in list[i]) {
					if (cols.indexOf(k) === -1) { //Prevents duplication somehow
						cols.push(k);
					}
				}
			}
			
			for (let i = 0; i < list.length; i++) { // Adding the data to the table
				trow = table.insertRow(-1); // Create a new row
				for (let j = 0; j < cols.length; j++) {
					let cell = trow.insertCell(-1);
					cell.innerHTML = list[i][cols[j]]; // Inserting the cell at particular place
				}
			}
		  });
	  }
	  setTimeout(() => {sortTable(1);}, 500);
	  sortTable(1);
  });

