import React from 'react'
import Webbtn from './Webbtn'

const Section2 = () => {
  return (
    <div className='flex px-10 mt-8'>
        <div id="right " className='w-[72%] '>
            <h1 className='text-8xl p-8 '>

                                <span>Turning heads</span>
                                <span> and conquering</span>
                                <span className='flex items-center  '>
                                hearts
                                <svg  class="lg:w-10" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 52 52" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                                <path d="M30.3896 9.14282C24.6861 7.6493 18.4743 9.19413 14.143 13.2244C13.9623 13.3897 13.7816 13.5664 13.6122 13.7431C6.79616 20.6236 6.79051 31.8193 13.6122 38.6998C20.4282 45.5802 31.519 45.5802 38.3351 38.6998C40.6221 36.3911 42.1977 33.5579 42.9431 30.4341L40.1139 29.8412C39.4758 32.4065 38.1713 34.7208 36.2852 36.6248C30.5986 42.3652 21.3543 42.3595 15.6677 36.6248C9.98111 30.8844 9.97546 21.5528 15.6677 15.8124C19.5981 11.8448 25.584 10.4824 30.8188 12.3408C33.6141 13.327 35.8842 15.3449 37.5614 17.7619C38.7473 19.4778 39.3572 22.9266 38.2052 24.4771L37.6348 24.9958C35.4663 26.2613 32.7275 23.2971 32.7275 23.2971L27.6339 18.1553C25.6913 16.1943 23.184 16.0347 21.439 17.7961C20.1402 19.1072 19.6715 21.0454 20.0385 23.6676L19.9143 23.793L17.5425 21.7295L17.3618 21.9119L15.1369 26.4609L15.2329 26.5578L17.5595 26.6547L26.6287 35.8096L26.7868 37.8504L26.9054 37.9701L31.4456 33.3869L31.327 33.2672L29.2828 33.1247L20.8404 24.6025C20.8348 23.0406 21.1962 21.8948 21.9247 21.1537C22.9807 20.0877 24.4037 20.2188 25.663 21.49L30.847 26.3696C32.287 27.8803 34.4838 29.1287 36.4546 28.8779C40.1478 28.4161 41.9153 24.9445 41.6725 21.2791C41.5991 20.1903 41.3506 19.0901 40.9214 18.0413C39.0409 13.4353 35.0259 10.3513 30.3783 9.13712L30.3896 9.14282Z" fill="currentColor"></path>
                                <path d="M25.9397 51.6C12.0931 51.6 0.827148 40.2276 0.827148 26.25C0.827148 12.2724 12.0931 0.899994 25.9397 0.899994C39.7863 0.899994 51.0522 12.2724 51.0522 26.25C51.0522 40.2276 39.7863 51.6 25.9397 51.6ZM25.9397 2.35361C13.6629 2.34791 3.67327 13.0705 3.67327 26.25C3.67327 39.4295 13.6629 50.1464 25.9397 50.1464C38.2164 50.1464 48.2061 39.4238 48.2061 26.25C48.2061 13.0762 38.2164 2.34791 25.9397 2.34791V2.35361Z" fill="currentColor"></path>
                                </svg>

                                </span>



            </h1>
        </div>
        <div id="right" className='flex items-end px-8 w-[28%]'>
            <div id="content " className='flex flex-col gap-10 '>
            <h5>NiceAtNoon is een boutique design studio gespecialiseerd in branding en webdesign.</h5>
            <Webbtn/>
            </div>

        </div>
    </div>
  )
}

export default Section2