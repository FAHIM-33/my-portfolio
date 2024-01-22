import { TypeAnimation } from 'react-type-animation';

const Banner = () => {
    return (
        <div className='relative mt-16'>
            {/* <h2 className="absolute text-2xl md:text-5xl text-low text-center font-semibold top-1/2 -translate-y-1/2 w-full left-1/2 -translate-x-1/2">
                <TypeAnimation
                    sequence={[
                        'Make websites that are polished & reliable to use',
                    ]}
                    wrapper="span"
                    cursor={false}
                    className='type'
                />
            </h2>

            <figure className=''>
                <img src="/banner.png" className='md:w-1/2 mx-auto' alt="" />
            </figure> */}

            <img src="/bannerTop.png" alt="" className='mx-auto w-full mb-2 md:mb-6 md:w-4/5 max-w-screen-lg ' />
            <h2 className="text-2xl md:text-5xl text-low text-center font-semibold w-full">
                <TypeAnimation
                    sequence={[
                        'Make websites that are polished & reliable to use',
                    ]}
                    wrapper="span"
                    cursor={false}
                    className='type'
                />
            </h2>
            <img src="/bannerBottom.png" alt="" className='mx-auto w-full mt-2 md:mt-6 md:w-4/5 max-w-screen-lg ' />

        </div>
    );
};

export default Banner;