// Your code here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}
saturdayFun("relax");

const mondayWork = function(work = "go to the office") {
    return `This Monday, I will ${work}.`
}
mondayWork("work from home");

function wrapAdjective(string = "*") {
    return function(you = "special") {
        return `You are ${string}${you}${string}!`
    }

}