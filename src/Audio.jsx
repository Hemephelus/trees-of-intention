import React, { useEffect, useState } from 'react'

const AudioComp = () => {

	const [ isAudioDecided, setIsAudioDecided ] = useState(false)

	let audio;

    useEffect(() => {

    	audio = new Audio('https://feqosmhgbbpofepfjrol.supabase.co/storage/v1/object/public/general/healing-forest.mp3');

      return () => {}
    }, [])

    const removeAudioRoot = () => {
    	const elem = document.getElementById('audio-root')
    	elem.classList.remove('absolute')
    }


    return (
    	<div className='h-screen flex items-center justify-center absolute top-0' style={{width: '100vw'}} id='audio-root'>
    		{
	            !isAudioDecided &&
	              <div className='flex flex-col p-8 bg-[#22092C] text-white rounded-md'>
	              	<p className='text-center text-3xl my-1'>🌴</p>
	              	<p className='text-center text-xl pri-font my-1'>Welcome to the Garden of Intention</p>
	                <p className='text-center text-lg pri-font my-1'>Would you like to play audio?</p>
	                <div className='flex justify-center space-x-2 my-4'>
	                	<button onClick={() => { audio.play(); setIsAudioDecided(true); removeAudioRoot() }} className='bg-white rounded text-black p-1 hover:text-indigo-800 w-12 pri-font'>Yes</button>
	                	<button onClick={() => { setIsAudioDecided(true); removeAudioRoot() }} className='bg-white rounded text-black p-1 hover:text-indigo-800 w-12 pri-font'>No</button>
	                </div>
	              </div>
       		}
    	</div>
    )
}

export default AudioComp;