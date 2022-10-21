console.log('hello')
//https://dog.ceo/api/breeds/image/random
// .then - pormises
// asynchronous programming 
//doesn't run linearly
// json is object here having 2 fields - meassage, status

// stuff you don't have to wait for
// console.log('run FIRST')

const dogImageDiv = document.getElementById('dogImage')
const dogButton = document.getElementById('dogButton')

// stuff you have to wait for
const getNewDog = () =>{
fetch('https://dog.ceo/api/breeds/image/random')
  .then(response => response.json())
  .then(json => {
    // console.log('RUN 2nd', json)   
    // console.log(json.message)
    dogImageDiv.innerHTML = `<img src='${json.message}' height=300 width=300/'>`
  })
}
dogButton.onclick = () => getNewDog()

console.log('run 3rd')
