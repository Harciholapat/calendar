let boxes = document.querySelectorAll(".box")
let days = []
let boxesSaved = []

function GetBoxes() {
    let counter = 0
    for (const box of boxes) {
        days.push(box.innerHTML)
    }

    for (const box of boxes) {
        boxesSaved.push(box.innerHTML)
        counter++

        if (counter == 5) {
            break;
        }
    }
    
    console.log(boxesSaved);
    console.log(days)
}

GetBoxes()

function Open() {
    if (days[0] == boxesSaved[0]) {
        alert("Kinyitva")
    } else if (days[1] == boxesSaved[1]) {
        alert("Kinyitva")
    } else if (days[2] == boxesSaved[2]) {
        alert("Kinyitva") 
    } else if (days[3] == boxesSaved[3]) {
        alert("Kinyitva")
    } else if (days[4] == boxesSaved[4]) {
        alert("Kinyitva")
    }
}