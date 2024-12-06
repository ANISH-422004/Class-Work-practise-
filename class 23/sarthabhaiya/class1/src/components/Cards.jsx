import React from 'react'

const Cards = () => {
    const imgs = [
        "https://assets-global.website-files.com/6454cbf2dcc426c6ec47ef06/64b164fa9716bc66dcf4137e_ADEKWAAD_BrandBox-min-p-800.webp" ,
        "https://assets-global.website-files.com/6454cbf2dcc426c6ec47ef06/64bfbdd62241c685d9999607_DM_Ashtray-min-p-800.webp",
        "https://assets-global.website-files.com/6454cbf2dcc426c6ec47ef06/64cc0eccc99b0aed7676e414_FL_Werkboek-cover_Nan-min-p-800.webp",
        "https://assets-global.website-files.com/6454cbf2dcc426c6ec47ef06/64bfbe5150f5f7884b492573_GAAF_Header-p-800.webp",
        "https://assets-global.website-files.com/6454cbf2dcc426c6ec47ef06/64b164fa9716bc66dcf4137e_ADEKWAAD_BrandBox-min-p-800.webp" ,
        "https://assets-global.website-files.com/6454cbf2dcc426c6ec47ef06/64bfbdd62241c685d9999607_DM_Ashtray-min-p-800.webp",
        "https://assets-global.website-files.com/6454cbf2dcc426c6ec47ef06/64cc0eccc99b0aed7676e414_FL_Werkboek-cover_Nan-min-p-800.webp",
        "https://assets-global.website-files.com/6454cbf2dcc426c6ec47ef06/64bfbe5150f5f7884b492573_GAAF_Header-p-800.webp"

    ]

  return (
    <div className='carddiv p-4 mt-10 flex gap-10 overflow-x-auto object-cover'>
{
            imgs.map((img)=>{
                return(
                    <div className=" shrink-0 " id="img-container">
                    <img  className=' w-[550px] rounded-[175px] h-[750px]' src={img} alt="" />
                </div>
                )
            })
}
    </div>
  )
}

export default Cards