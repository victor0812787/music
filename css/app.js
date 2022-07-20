alert('welcome to your number one best music ')
// let prompt = alert('put in your name')



let mySong = document.getElementById("mySong")
let icon = document.getElementById("icon")

    icon.onclick = function(){
        // mySong.play();
        // let mySong = paused;
        //     mySong = play;
        //     icon.src = "img/play.jpg"
        
        if(mySong. paused){
            mySong.play();
            icon.src = "img/pause.jpg";
        }else{
            mySong.pause();
            icon.src = "img/play.png";
        }
        // console.log(pause);
    }