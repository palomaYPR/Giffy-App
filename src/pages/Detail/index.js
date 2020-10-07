import React from 'react'
import Gif from '../../components/Gif'
import useGlobalGifs from '../../hooks/useGlobalGifs'

export default function Detail ({ params }) {      

    const gifs = useGlobalGifs()
    
    const gif = gifs.find(singleGif =>
            singleGif.id === params.id
        )
    console.log(gif)

    //console.log(params.id)
    return <>
        <h3 className='App-title'>{gif.title}</h3>
        <Gif {...gif} />
    </>
    
}