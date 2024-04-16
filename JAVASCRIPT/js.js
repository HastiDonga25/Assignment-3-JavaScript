// Query selectors to select DOM elements

const output = document.querySelector("#output");
const submit = document.querySelector("#submit");

// Async function to fetch data from the API
async function getData(){
    try{
        // Get the value of the input field and convert it to lowercase
        const personName = document.getElementById("name").value.toLowerCase();
        // Fetch data from the API using the entered name
        const response = await fetch(`https://api.agify.io/?name=${personName}`);
        
    }
    catch(error){
        console.log(error);
    }
}