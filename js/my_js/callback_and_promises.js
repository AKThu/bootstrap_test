//Basic Callback
function myDisplayer(some) {
    console.log(some)
}
function noDisplay(some) {

}

function myCalculator(num1, num2, myCallback) {
    let num = num1 + num2;
    myCallback(num);
}

myCalculator(1,2,()=>"")


//callback for checking success and error
const hasProject = false;
const hasSomethingToStudy = true;

function playAlbion(callback, errorCallback) {
    if(hasProject) {
        errorCallback({
            reason: "Project",
            todo: "I need to finish the project!"
        })
    }else if(hasSomethingToStudy) {
        errorCallback({
            reason: "Study",
            todo: "I need to finish the subject that I'm currently learning!"
        })
    }else {
        callback("Time to do some fame farming!")
    }
}

playAlbion((play) => console.log(play), (noPlay) => console.log(noPlay.reason + ": " + noPlay.todo))


//Promise
function playAlbionPromise() {
    return new Promise( (resolve, reject) => {
        if(hasProject) {
            reject({
                reason: "Project",
                todo: "I need to finish the project!"
            })
        }else if(hasSomethingToStudy) {
            reject({
                reason: "Study",
                todo: "I need to finish the subject that I'm currently learning!"
            })
        }else {
            resolve("Time to have some fun!")
        }
    })
}

playAlbionPromise()
    .then( result => console.log("Hoorayy! " + result))
    .catch( result => console.log("Awwn, I can't!\n" + result.reason + ": " + result.todo))