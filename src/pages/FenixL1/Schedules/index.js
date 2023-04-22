import Link from "next/link"
import Image from 'next/image'
import ScheduleCenter from "../../../../components/ScheduleCenter"
import ScheduleDistrict from "../../../../components/ScheduleDistrict"
import BarDays from "../../../../components/BarDays"
import ArrowIcon from '../../../../public/icons/arrow.png'




export default function Schedules() {
    return (
        <div className="flex flex-col items-center bg-mainBg min-h-screen h-screen-sm w-[414px] h-[896px]">

            <div className="mr-80 absolute mt-7">
                <Link href='/AppFeed'>
                    <Image src={ArrowIcon} width={18} height={18} alt='Ícone de interação' />
                </Link>
            </div>


            <h1 className="text-white mt-5 text-xl font-bold mb-10">Horários Fênix L1</h1>


            <div className="flex items-center justify-around w-full">

                <div className="flex flex-col items-center w-full">
                    <h1 className="font-bold text-white">Bairro</h1>
                        <ScheduleDistrict/>
                </div>

                <div className="flex flex-col items-center w-full">
                    <h1 className="font-bold text-white">Centro</h1>
                    <ScheduleCenter />
                    <ScheduleCenter />
                    <ScheduleCenter />
                    <ScheduleCenter />
                </div>

            </div>

            <BarDays />

        </div>
    )
}