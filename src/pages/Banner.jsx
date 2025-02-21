
const Banner = () => {
    return (
        <div className='relative mt-16 cont'>

            <div className='flex items-center justify-between'>
                <h1 className='text-[100px] font-sans font-bold leading-[80px]'>Web<span className='animate-ping'>.</span> <br /> developer</h1>
                <div className='banner-slide w-1/3 flex absolute'>
                    <div className=" bg-[#fb2c36] h-full w-full next-js"></div>
                    {/* <div className=" bg-[#7c2bff] h-full w-1/2"></div> */}
                    {/* <div className="bg-[#7c2bff] h-full w-1/2"></div> */}
                </div>

                <div className='w-1/2 flex'>
                    <img src="/react.png" className='slow-spin w-1/2' />
                    <img src="/next.png" className='next-js  rounded-full relative border w-1/2' />
                </div>
            </div>

            <p className='mt-32 font-sans text-sm text-gray-400'>Make fully custom website with
                <span className='bg-[#1e0f2f] border rounded px-1 mx-1 text-white border-[#7c2bff] '>Next JS</span>
                or
                <span className='bg-[#0f1b2f] border rounded px-1 mx-1 text-white border-[#2b7fff]'>React JS</span>
            </p>

        </div>
    );
};

export default Banner;