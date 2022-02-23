// building the dynamic JavaScript table to represent the data 

// import the data from data.js
// tableData = an array of objects, where each object is a UFO sighting
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Build Table Function
function buildTable (data) {
    
    // clear existing data
    tbody.html("") ;

    // loop through each object (ie sighting entry) in the data array
    data.forEach((dataRow) => {

        // append a new table row ("tr") to the HTML table body (ie <tbody> tag)
        let row = tbody.append("tr");

        // loop through each field in dataRow (ie key:value pair in the data array)
        Object.values(dataRow).forEach((val) => {

            // add each value of the field as a cell in the row using the HTML table data tag (<td>)
            let cell = row.append("td");
            cell.text(val);
        
        });
    });
}