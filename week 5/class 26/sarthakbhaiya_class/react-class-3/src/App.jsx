import { useState } from 'react'
import Section from './Section'
import Navbar from './components/Navbar'
import Musicplace from './components/Musicplace'



function App() {
  
  const data = [
    {
      image: "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg",
      songname: "Blinding Lights",
      artist: "The Weeknd",
      added: false,
    },
    {
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
      songname: "Shape of You",
      artist: "Ed Sheeran",
      added: false,
    },
    {
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
      songname: "Levitating",
      artist: "Dua Lipa",
      added: false,
    },
    {
      image: "https://images.pexels.com/photos/1988681/pexels-photo-1988681.jpeg",
      songname: "Believer",
      artist: "Imagine Dragons",
      added: false,
    },
    {
      image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg",
      songname: "Dance Monkey",
      artist: "Tones and I",
      added: false,
    }
  ];
  
  const [musicdata, setMusicdata] = useState(data)
  // console.log(musicdata);
  const handelclick = (indexclicked)=>{
    // alert(index)
    (
      setMusicdata((prev)=>{
        return (
          prev.map((item,idx) =>{
            if (idx===indexclicked) {
              return {...item , added : !item.added}
            }
            return item
          } )
        )
      })
    )
  }


  return (
    <>
    <div id="container" className='w-full h-screen'>
      <Navbar data={musicdata} />
      <div className='w-full h-[90%] bg-zinc-300 px-10 py-3 flex flex-shrink-0 flex-wrap  gap-3'>
      {
        musicdata.map((data,idx)=>(<Musicplace image={data.image} songname={data.songname} artist={data.artist} added={data.added}    handelclick={handelclick}  index={idx} />))
      }

      </div>

    </div>

    </>
  )
}

export default App
