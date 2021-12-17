var pathVideo;

var videos=["1.mp4","2.mp4","3.mp4"];
let i=0;

function cambiarVideo(){
    if(i===0){
        return videos[i];
        i++;
    }else if(i===1){
        return videos[i];
        i++;
    }else if(i===2){
        return videos[i];
        i=0;
    }
}