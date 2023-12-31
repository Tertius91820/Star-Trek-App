document.getElementById('getButton').addEventListener('click', apiRequest)

async function apiRequest(){
    const alienName = document.querySelector('input').value
    try{
        //connect to backend with the db in the server.js
        //const response = await fetch(`https://star-trek-api-rps7.onrender.com/api/${alienName}`)

        //OR connect to backend thats got info on mongodb!!!
        const response = await fetch(`https://star-trek-api-mongo-main.onrender.com/api/${alienName}`)
        
        const data = await response.json()

        console.log(data)
        document.getElementById('alienName').innerText = data.speciesName
        document.getElementById('alienWorld').innerText = data.homeworld
        document.getElementById('alienFeatures').innerText = data.features
        document.getElementById('alienFacts').innerText = data.interestingFact
        document.getElementById('alienExamples').innerText = data.notableExamples
        document.getElementById('alienImage').src = data.image
        document.getElementById('alienCaption').innerText = data.speciesName
    }catch(error){
        console.log(error)
    }
}