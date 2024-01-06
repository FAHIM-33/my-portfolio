import { TypeAnimation } from 'react-type-animation';

const Banner = () => {
    return (
        <div className='relative'>
            {/* <h2 className="text-5xl text-prim text-center font-semibold">
                Make websites that are polished & reliable to use<span className="animate-pulse ">_</span>
            </h2> */}
            <h2 className="absolute text-5xl text-prim text-center font-semibold top-1/2 -translate-y-1/2 w-full left-1/2 -translate-x-1/2">
                <TypeAnimation
                    sequence={[
                        'Make websites that are polished & reliable to use',
                    ]}
                    wrapper="span"
                    cursor={false}
                    className='type'
                // repeat={Infinity}
                />
            </h2>

            <figure className=''>
                <img src="/banner.png" className='w-3/5 mx-auto' alt="" />
            </figure>




        </div>
    );
};

export default Banner;