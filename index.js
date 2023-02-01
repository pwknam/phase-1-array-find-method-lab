// function superbowlWin(array){
//     for (const superbowl of array){
//         if (superbowl.result === "W"){
//             return superbowl.year
//         }
//     }
// }

function superbowlWin(array){
    const object = array.find(element => element.result === "W")
    if (object === undefined){
        return undefined
    }
    return object.year
}
