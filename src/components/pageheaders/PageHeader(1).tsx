import React from 'react';

interface PageHeaderProps {
    title: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
    return (
        <>
            <div className='h-[50vh] w-full bg-gray-600 flex justify-center items-center bg-fixed bg-cover bg-center relative z-0 top-6'
                style={{ backgroundImage: "url('assets/images/bg/main-bg.webp')" }}>
                {/* <img src="assets/images/bg/hero-racuwu-min.jpg" alt="hero" className='absolute h-[100vh] w-full object-cover z-2' /> */}
                {/* <div className='absolute h-[100vh] w-full bg-black opacity-50 z-10'></div> */}
                <div className='z-[20] text-center flex flex-col items-center'>
                    <h1 className='text-6xl font-bold text-white z-30 uppercase py-8 px-4 '>{title}</h1>
                    <div className='w-1/2 border-b-2'></div>
                    {/* <p className='text-xl text-white z-30 uppercase font-semibold py-8'>Rotaract Club of Uva Wellassa University - Badulla</p> */}
                </div>
            </div>
        </>
    );
};

export default PageHeader;