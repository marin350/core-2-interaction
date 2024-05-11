//makeitGreen()

var circle = document.getElementById("circle")
function makeItGreen() {
    circle.style.backgroundColor = "green"
}

//add()
function add(number1, number2) {
   return number1 + number2
  }

//object: fictional character
let character =
    {
        "Name": "Emily",
        "Nickname":"Em",
        "Age": 26,
        "Job": "Architect",
        "Favorite_Movies": ["Poor Things", "La La Land", "Easy A", "The Favorite"],
        "Address": {
            "Building" : 425,
            "Street" : "Orchard St.",
            "Borough" : "Manhattan",
            "City" : "New York",
            "State" : "New York",
            "Zip" : 10002
        }
    }

console.log(character)
