import Link from 'next/link'
import Image from 'next/image'
import ArrowIcon from '../../../public/icons/arrow.png'




export default function RoutesPage() {
    return (
        <div className="flex flex-col items-center bg-mainBg min-h-screen h-screen-sm w-[414px] h-[896px]">

            <div className="mr-80 absolute mt-7">
                <Link href='./AppFeed'>
                    <Image src={ArrowIcon} width={18} height={18} alt='Ícone de interação' />
                </Link>
            </div>

            <h1 className="text-white mt-5 text-xl font-bold">Este ônibus passará por:</h1>


            <div className='flex flex-col justify-center items-center mt-10 gap-5'>
                <span className='text-white'>Algum lugar</span>
                <span className='text-white'>Algum lugar</span>
                <span className='text-white'>Algum lugar</span>
                <span className='text-white'>Algum lugar</span>
                <span className='text-white'>Algum lugar</span>
                <span className='text-white'>Algum lugar</span>
            </div>

        </div>
    )
}