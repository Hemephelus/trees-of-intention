import React, { useEffect, useState } from 'react'

const AudioComp = () => {

	const [ isAudioDecided, setIsAudioDecided ] = useState(false)

	let audio;

    useEffect(() => {

    	audio = new Audio('https://feqosmhgbbpofepfjrol.supabase.co/storage/v1/object/public/general/healing-forest.mp3');

      return () => {}
    }, [])

    return (
    	<div className='h-screen flex items-center justify-center absolute top-0' style={{width: '100vw'}}>
    		{
	            !isAudioDecided &&
	              <div className='flex flex-col p-8 bg-[#22092C] text-white rounded-md'>
	              	<p className='text-center text-3xl'>🌴 🔊</p>
	                <p className='text-xl'>Would you like to play audio?</p>
	                <div className='flex justify-center space-x-2 my-4'>
	                	<button onClick={() => { audio.play(); setIsAudioDecided(true) }} className='bg-white rounded text-black p-1 hover:text-indigo-800 w-12'>Yes</button>
	                	<button onClick={() => setIsAudioDecided(true)} className='bg-white rounded text-black p-1 hover:text-indigo-800 w-12'>No</button>
	                </div>
	              </div>
       		}
    	</div>
    )
}

export default AudioComp;