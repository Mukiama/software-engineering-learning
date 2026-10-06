//Create Global Variables
const videoNames = ["Flatburger Tutorial", "Flatironland Commercial", "Flatapets Cutest Animals"];
const comments = [];

function selectVideo(addComment){
    //Prompt the user to select a video
    const videoValue = prompt(`Please select a video:\n\n1: Flatburger Tutorial\n2: Flatironland Commercial\n3: Flatapets Cutest Animals`);

    let videoName;
    if (videoValue === "1") {
        videoName = videoNames[0];
    } else if (videoValue === "2") {
        videoName = videoNames[1];
    } else if (videoValue === "3") {
        videoName = videoNames[2];
    } else {
        alert("Error: Invalid video!");
        return null;
}
    //Prompt the user to add a comment
    const comment = prompt("Enter your comment:");

    //Pass Data to the Callback Function
    const commentIndex = addComment(videoName, comment);
    return function(){

    }
}
    
alert ("Welcome to FlatTube!");

selectVideo((videoName, comment) => {
    const commentData = {
        video: videoName,
        text: comment
    };
    comments.push(commentData);
    return comments.length - 1;
});

console.log("Welcome to FlatTube!");
