
const Banner = () => {
    return (
        <div className='relative mt-16 cont'>

            <div className='ml-4 md:ml-0 flex flex-col md:flex-row gap-10 md:gap-0 md:items-center justify-between px-4 lg:px-0'>
                <h1 className='text-[70px] md:text-[100px] font-sans font-bold leading-[65px] md:leading-[80px]'>
                    Web<span className='animate-ping'>.</span>
                    <br />
                    developer
                </h1>
                <div className='banner-slide w-1/3 flex absolute'>
                    <div className=" bg-[#fb2d37] h-full w-full next-js"></div>
                    {/* <div className=" bg-[#7c2bff] h-full w-1/2"></div> */}
                    {/* <div className="bg-[#7c2bff] h-full w-1/2"></div> */}
                </div>

                <div className='md:w-1/2 w-[90%] flex gap-1'>
                    <img src="/react.png" className='slow-spin w-1/2 rounded-full overflow-hidden' />
                    <img src="/next.png" className='next-js  rounded-full relative border-2 border-transparent w-1/2' />
                </div>
            </div>

            <p className='mt-20 md:mt-32 font-sans text-sm text-gray-400  ml-6 md:ml-0'>
                I&apos;m
                <a href="https://github.com/FAHIM-33" title="Go to GitHub profile" target="_blank" rel="noopener noreferrer" className="text-blue-400"> SH Fahim</a>
                <br />
                I make fully custom website with
                <span className='bg-[#1e0f2f] border rounded px-1 mx-1 text-white border-[#7c2bff] '>Next JS</span>
                or
                <span className='bg-[#0f1b2f] border rounded px-1 mx-1 text-white border-[#2b7fff]'>React JS</span>
            </p>

        </div>
    );
};

export default Banner;