const day = 'saturday'

if (day === 'Monday') {
    console.log("Monday's are very boring")
} else if (day === 'Tuesday') {
    console.log("Tuesday's are very boring as well'")
} else if (day === 'Wednesday' || day === 'Thursday') {
    console.log("We´re in the middle of the week. Almost there!!!")
} else if (day === 'Friday') {
    console.log("Hurray. The weekend is near!!!")
} else if (day === 'Saturday' || day === 'Sunday') {
    console.log("These are the weeks best days")
} else {
    console.log("Not a valid day!!!")
}