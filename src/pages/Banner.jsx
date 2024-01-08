import { TypeAnimation } from 'react-type-animation';

const Banner = () => {
    return (
        <div className='relative mt-16'>
            <h2 className="absolute text-5xl text-low text-center font-semibold top-1/2 -translate-y-1/2 w-full left-1/2 -translate-x-1/2">
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
                <img src="/banner.png" className='w-1/2 mx-auto' alt="" />
            </figure>
        </div>
    );
};

export default Banner;