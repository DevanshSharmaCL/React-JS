import React, { useRef } from 'react'

function Video_Player_Controller() {
    const videoRef=useRef(null);//box for video reference

    const playVideo=()=>{
        videoRef.current.play();//this will play the video
    }

    const pauseVideo=()=>{
        videoRef.current.pause();//this will pause the video    
    }

    const restartVideo=()=>{
        videoRef.current.currentTime=0;//this will restart the video
        videoRef.current.play();//this will play the video from the beginning
    }

    return (
        <div>
            <video
            ref={videoRef}
            width="300"
            src="https://www.w3schools.com/html/mov_bbb.mp4"/>
            
            <br/>
            <button onClick={playVideo}>Play</button>
            <button onClick={pauseVideo}>Pause</button>
            <button onClick={restartVideo}>Restart</button>
        </div>
    );
};

export default Video_Player_Controller