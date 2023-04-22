import Link from 'next/link'
import Image from 'next/image'
import ArrowIcon from '../../../../public/icons/arrow.png'
import RoutesData from '../../../../public/routes.json'
import RouteName from '../../../../components/RouteName'


export default function BusRoutes() {
    return (
        <div className="flex flex-col items-center bg-mainBg min-h-screen h-screen-sm w-[414px] h-[896px]">

            <div className="mr-80 absolute mt-7">
                <Link href='/AppFeed'>
                    <Image src={ArrowIcon} width={18} height={18} alt='Ícone de interação' />
                </Link>
            </div>

            <h1 className="text-white mt-5 text-xl font-bold">Este ônibus passará por:</h1>


            <div className='flex flex-col justify-center items-center mt-10 gap-5 w-[325px] text-center'>
                {RoutesData.map((item) => {
                    if (Object.keys(item)[0] === "rotasGaroinha") {
                        return (
                            <div key="rotasGaroinha">
                                {item.rotasGaroinha.map((rota) => (
                                    <RouteName
                                        key={rota}
                                        name={rota}
                                    />
                                ))}
                            </div>
                        );
                    }
                })}
            </div>

        </div>
    )
}