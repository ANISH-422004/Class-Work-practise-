import React from 'react'

const Profile_c = ({name,src,description}) => {
  // console.log(name,src,description);
  
  return (
    <div className='profile w-full h-[60%] flex flex-col gap-5 items-center'>
      <h3 className='fullname text-center text-xl font-sans font-bold text-white w-full h-[15%]'>{name}</h3>
      <div id="img-container" className='w-[40%] aspect-square bg-slate-400 rounded-full overflow-hidden'>
        <img className="h-full w-full object-cover " src={`${src}`} alt="" />

      </div>
      <p className='description  h-[15%] w-[90%] text-xs text-center' >{description}</p>
    </div>
  )
}

export default Profile_c