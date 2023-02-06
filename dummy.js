var data = [
	{
		"Name":"<a href='https://www.aonprd.com/DeityDisplay.aspx?ItemName=Ghlaunder'>Khorne</a>",
		"Pantheon":"Chaos",
		"Alignment":"CE",
		"Areas of Concern":"Slaughter, Blood, Skulls, Rage, Honorable Combat",
		"Domains":[
			"<a href='https://aonprd.com/DomainDisplay.aspx?ItemName=Chaos'>Chaos</a>",
			" <a href='https://aonprd.com/DomainDisplay.aspx?ItemName=Evil'>Evil</a>",
			" <a href='https://aonprd.com/DomainDisplay.aspx?ItemName=Fire'>Fire</a>",
			" <a href='https://aonprd.com/DomainDisplay.aspx?ItemName=Death'>Death</a>",
			" <a href='https://aonprd.com/DomainDisplay.aspx?ItemName=Destruction'>Destruction</a>",
			" <a href='https://aonprd.com/DomainDisplay.aspx?ItemName=Glory'>Glory</a>",
			" <a href='https://aonprd.com/DomainDisplay.aspx?ItemName=Protection'>Protection</a>",
			" <a href='https://aonprd.com/DomainDisplay.aspx?ItemName=Strength'>Strength</a>",
			" <a href='https://aonprd.com/DomainDisplay.aspx?ItemName=War'>War</a>"
		],
		"Favored Weapon":[
			"<a href='https://aonprd.com/EquipmentWeaponsDisplay.aspx?ItemName=Battleaxe'>Battleaxe</a>", 
			" <a href='https://aonprd.com/EquipmentWeaponsDisplay.aspx?ItemName=Greataxe'>Greataxe</a>"
		]
	},
	{
		"Name":"<a href='https://www.aonprd.com/DeityDisplay.aspx?ItemName=Ghlaunder'>Tzeentch</a>",
		"Pantheon":"Chaos",
		"Alignment":"CE",
		"Areas of Concern":"Change, Mutation, Treachery, Deceit, Magic, Knowledge, Fate",
		"Domains":[
			"<a href='https://aonprd.com/DomainDisplay.aspx?ItemName=Chaos'>Chaos</a>",
			"<a href='https://aonprd.com/DomainDisplay.aspx?ItemName=Evil'>Evil</a>",
			"<a href='https://aonprd.com/DomainDisplay.aspx?ItemName=Fire'>Fire</a>",
			"<a href='https://aonprd.com/DomainDisplay.aspx?ItemName=Knowledge'>Knowledge</a>",
			"<a href='https://aonprd.com/DomainDisplay.aspx?ItemName=Luck'>Luck</a>",
			"<a href='https://aonprd.com/DomainDisplay.aspx?ItemName=Madness'>Madness</a>",
			"<a href='https://aonprd.com/DomainDisplay.aspx?ItemName=Magic'>Magic</a>",
			"<a href='https://aonprd.com/DomainDisplay.aspx?ItemName=Travel'>Travel</a>",
			"<a href='https://aonprd.com/DomainDisplay.aspx?ItemName=Trickery'>Trickery</a>"
		],
		"Favored Weapon":[
			"<a href='https://aonprd.com/EquipmentWeaponsDisplay.aspx?ItemName=Quarterstaff'>Quarterstaff</a>", 
			"<a href='https://www.aonprd.com/DeityDisplay.aspx?ItemName=Ghlaunder'>Staff?</a>"
		]
	},
	{
		"Name":"<a href='https://www.aonprd.com/DeityDisplay.aspx?ItemName=Ghlaunder'>Nurgle</a>",
		"Pantheon":"Chaos",
		"Alignment":"CE",
		"Areas of Concern":"Stagnation, Resilience, Plague, Rot, Death",
		"Domains":[
			"<a href='https://aonprd.com/DomainDisplay.aspx?ItemName=Chaos'>Chaos</a>",
			"<a href='https://aonprd.com/DomainDisplay.aspx?ItemName=Evil'>Evil</a>",
			"<a href='https://aonprd.com/DomainDisplay.aspx?ItemName=Artifice'>Artifice</a>",
			"<a href='https://aonprd.com/DomainDisplay.aspx?ItemName=Community'>Community</a>",
			"<a href='https://aonprd.com/DomainDisplay.aspx?ItemName=Death'>Death</a>",
			"<a href='https://aonprd.com/DomainDisplay.aspx?ItemName=Healing'>Healing</a>",
			"<a href='https://aonprd.com/DomainDisplay.aspx?ItemName=Protection'>Protection</a>",
			"<a href='https://aonprd.com/DomainDisplay.aspx?ItemName=Plant'>Plant</a>",
		],
		"Favored Weapon":"<a href='https://aonprd.com/EquipmentWeaponsDisplay.aspx?ItemName=Scythe'>Scythe</a>"
	},
	{
		"Name":"<a href='https://www.aonprd.com/DeityDisplay.aspx?ItemName=Ghlaunder'>Slaneesh</a>",
		"Pantheon":"Chaos",
		"Alignment":"CE",
		"Areas of Concern":"Debauchery, Excess, Obsession, Pleasure, Perfection, Lust, Greed",
		"Domains":[
			"<a href='https://aonprd.com/DomainDisplay.aspx?ItemName=Chaos'>Chaos</a>",
			"<a href='https://aonprd.com/DomainDisplay.aspx?ItemName=Evil'>Evil</a>",
			"<a href='https://aonprd.com/DomainDisplay.aspx?ItemName=Charm'>Charm</a>",
			"<a href='https://aonprd.com/DomainDisplay.aspx?ItemName=Liberation'>Liberation</a>",
			"<a href='https://aonprd.com/DomainDisplay.aspx?ItemName=Nobility'>Nobility</a>",
			"<a href='https://aonprd.com/DomainDisplay.aspx?ItemName=Travel'>Travel</a>",
			"<a href='https://aonprd.com/DomainDisplay.aspx?ItemName=Trickery'>Trickery</a>"
		],
		"Favored Weapon":"<a href='https://aonprd.com/EquipmentWeaponsDisplay.aspx?ItemName=Whip'>Whip</a>"
	}
]
	;

var table = document.getElementById("DeityTable");
 
const list = JSON.parse(JSON.stringify(data));
			 
var cols = [];
for (var i = 0; i < list.length; i++) {
	for (var k in list[i]) {
		if (cols.indexOf(k) === -1) {
			cols.push(k);
		}
	}
}


// Adding the data to the table
for (var i = 0; i < list.length; i++) {
	// Create a new row
	trow = table.insertRow(-1);
	if (i % 2 != 0) trow.style.background = "#CCCCCC";
	
	for (var j = 0; j < cols.length; j++) {
		var cell = trow.insertCell(-1);
		 
		// Inserting the cell at particular place
		cell.innerHTML = list[i][cols[j]];
	}
}
  