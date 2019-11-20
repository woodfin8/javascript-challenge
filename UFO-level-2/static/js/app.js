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
var inputcity = d3.select("#city");
var inputstate = d3.select("#state");
var inputcountry = d3.select("#country");
var inputshape = d3.select("#shape");

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

//write function for click event filerting through each search parameter
button.on("click", function() {
    var newDate = input.property("value");
    var newCity = inputcity.property("value").toLowerCase();
    var newState = inputstate.property("value").toLowerCase();
    var newCountry = inputcountry.property("value").toLowerCase();
    var newShape = inputshape.property("value").toLowerCase();
    var filteredUFO = tableData.filter(saucer => {
        if (newDate === ""){ return saucer.datetime === saucer.datetime;}
        else { return saucer.datetime === newDate;}
    });
    var filteredCity = filteredUFO.filter(saucer => {
        if (newCity === ""){ return saucer.city === saucer.city;}
        else { return saucer.city === newCity;}
    });
    var filteredState = filteredCity.filter(saucer => {
        if (newState === ""){ return saucer.state === saucer.state;}
        else { return saucer.state === newState;}
    });
    var filteredCountry = filteredState.filter(saucer => {
        if (newCountry === ""){ return saucer.country === saucer.country;}
        else { return saucer.country === newCountry;}
    });
    var filteredShape = filteredCountry.filter(saucer => {
        if (newShape === ""){ return saucer.shape === saucer.shape;}
        else { return saucer.shape === newShape;}
    });
    searchDate(filteredShape);

    console.log(newDate, newCity, newState, newCountry, newShape);

});

      
 
    


