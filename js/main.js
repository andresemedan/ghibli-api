document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const filmName = document.querySelector('input').value
    try{
        const response = await fetch(` https://ghibli-api-fun.herokuapp.com/api/${filmName}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('h2').innerText = data.director   
    }catch(error){
        console.log(error)
    }
}
