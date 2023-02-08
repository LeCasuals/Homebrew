fetch("Data/MasterList.csv")
  .then(function (response){return response.text();})
  .then(function (data){
	  
	  const table = document.getElementById("DeityTable");
	  let Fetches = [];
	  
	  for (let json of data.split('\n')) {
		Fetches.push(fetch("Data/" + json)
		  .then(value => value.json())
		  .then(data => {
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
		}));
	  }
	  
	  Promise.allSettled(Fetches).then(data => {sortTable(1);});
  });

