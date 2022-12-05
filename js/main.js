document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const filmName = document.querySelector('input').value
    try{
        const response = await fetch(`https://elegant-colt-slip.cyclic.app/api/${filmName}`)
        const data = await response.json()

        console.log(data)
        document.getElementById('director').innerText = "Director: \n" + data.director   
        document.getElementById('composer').innerText = "Composer: \n" + data.music
        document.getElementById('year').innerText = "Year released: \n" + data.year
        document.getElementById('image').src = data.image
    }catch(error){
        console.log(error)
    }
}
