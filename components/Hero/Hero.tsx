import Image from 'next/image'
import React from 'react'
import CalculateLayer from '../CalculateLayer/CalculateLayer'

const Hero = () => {
    return (
        <section className='hero h-[600px] relative'>
            <div className="container">
                <div className="hero__header max-w-[960px] mx-auto flex-col gap-8 mt-16">
                    <div className="row flex gap-8 justify-center">
                        <div className="flex-col">
                        <h2 className='text-lg'>Клинер приедет в удобное время и наведёт порядок</h2>
                        <h1 className="text-8xl font-bold tracking-tighter">Наша уборка</h1>
                        
                        </div>
                        <Image
                        src="/assets/img/h-2.jpg"
                        width={160}
                        height={160}
                        alt="Hero Image"
                        className='rounded-full border-2 border-white shadow-lg'
                    />
                    </div>
                    <div className="row flex gap-8">
                    <Image
                        src="/assets/img/h-1.jpg"
                        width={300}
                        height={120}
                        alt="Hero Image"
                        className='rounded-full border-2 border-white shadow-lg w-[300px] h-[120px] object-cover'
                    />
                    <h1 className='text-8xl font-bold tracking-tighter'>Залог чистоты</h1>
                    </div>


                </div>

                <CalculateLayer />
            </div>
        </section>
    )
}

export default Hero