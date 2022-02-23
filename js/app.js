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

// Create a date filter for the table using D3
function handleClick() {
    // variable to hold the data we want to filter by
    let date = d3.select("#datetime").property("value");
    
    // default filter (ie no filter) therfore equal to the table with all data included
    let filteredData = tableData;

    // if a data is entered then filter the default data to show only rows with the entered date 
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
}

// Attach an event to listen for the form button click
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);