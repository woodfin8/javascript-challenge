// from data.js
var tableData = data;
var tbody = d3.select("tbody");


// loop through list of objects in data.js and return value for each key 
tableData.forEach((sighting)=>{
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key,value])=>{
        var cell = row.append("td");
        cell.text(value);
    });
});



//get button and input references
var button = d3.select("#filter-btn");
var input = d3.select("#datetime");


//create funcition that clears the tbody and will create table with data filtered by datetime
function searchDate(file) {
    tbody.html("");
    file.forEach((sighting)=>{
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key,value])=>{
            var cell = row.append("td");
            cell.text(value);
        });
    });

}
//write function for click event
button.on("click", function() {
    var newDate = input.property("value");
    var filteredUFO = data.filter(saucer => saucer.datetime === newDate)
    searchDate(filteredUFO)
});



