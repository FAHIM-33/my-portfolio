import { TypeAnimation } from 'react-type-animation';

const Banner = () => {
    return (
        <div className='relative mt-16'>

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
            <img src="/bannerTop.png" alt="" className='mx-auto w-full mt-2 md:mt-6 md:w-4/5 max-w-screen-lg rotate-180' />


        </div>
    );
};

export default Banner;