console.log("Thiis is index file")
let currentDate = new Date();
let day = currentDate.getDay();
let dayName;
switch (day) {
    case 0:
        dayName="Sunday"
        break;
    case 1:
        dayName="Monday"
        break;
    case 2:
        dayName="Tuesday"
        break;
    case 3:
        dayName="Wednesday"
        break;
    case 4:
        dayName="Thursday"
        break;
    case 5:
        dayName="Friday"
        break;
    case 6:
        dayName="Saturday"
        break;
    default:
        break;
}
document.querySelector("#day").innerHTML = dayName
let finalStatement;
switch (dayName) {
    case "Sunday":
        finalStatement="Wow its weekend"
        break;
    case "Monday":
        finalStatement="Weekend is far"
        break;
    case "Tuesday":
        finalStatement="Work Hard weekend will come"
        break;
    case "Wednesday":
        finalStatement="Halfway to weekend"
        break;
        case "Thursday":
            finalStatement="Just few more days to weekend"
            break;
    case "Friday":
        finalStatement="Wow weekend is here"
        break;
    case "Saturday":
        finalStatement="Enjoy First Day Of Weekend"
        break;
    default:
        break;
}
document.querySelector("#msg").innerHTML = finalStatement;
