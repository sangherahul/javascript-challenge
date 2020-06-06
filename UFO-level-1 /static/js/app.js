// from data.js
var tableData = data;

// YOUR CODE HERE!

 console.log(tableData);

 var body = d3.select("tbody");

 tableData.forEach(element=>{


    var row = body.append("tr");

    Object.entries(element).forEach(([key,value])=>{

        row.append('td').text(value);
    })
 });


 var input_date = d3.select("#datetime");

 input_date.on('change',handelchange);

 function handelchange(event){
     
    d3.event.preventDefault();
    
    var date_search = d3.event.target.value;

    var filtered_datetime = tableData.filter(date=>date.datetime=== date_search);

    //console.log(filtered_datetime);
    body.html("");

    filtered_datetime.forEach(element=>{

        var row = body.append("tr");

        Object.entries(element).forEach(([key,value])=>{
    
            row.append('td').text(value);
        })
     });

 };


 


