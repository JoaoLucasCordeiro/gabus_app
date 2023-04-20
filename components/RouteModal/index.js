import Link from 'next/link'
import coracaoIcon from '../../public/icons/coracao_icon.png'
import Image from 'next/image'


export default function RouteModal({ linha, bairro, preco, tempoMedio }) {
    return (
        <div className="w-[350px] p-5 rounded-[20px] bg-secondaryBg flex flex-col items-center mt-5">

            <div className="flex items-center justify-around border-b-2 border-white w-full">

                <div className="flex flex-col items-center justify-center">
                    <span className="text-white">Linha</span>
                    <span className="text-green-500">{linha}</span>
                </div>

                <h1 className="text-white">{bairro}</h1>

                <div className="flex flex-col items-center justify-center ">
                    <span className="text-white">Preço</span>
                    <span className="text-green-500">{preco}</span>
                </div>

            </div>

            <div className="flex items-center justify-between w-full mt-4">

                <div className="flex flex-col items-center justify-center ">
                    <span className="text-white">Tempo médio</span>
                    <span className="text-green-500">{tempoMedio}</span>
                </div>

                <div>
                    <Image src={coracaoIcon} width={24} height={24} alt='ícone de favoritar' />
                </div>

            </div>


            <div className='flex items-center justify-center gap-10 mt-2'>

                <Link href="./Schedules">
                    <span className='text-blue-500 cursor-pointer'>
                        Horários
                    </span>
                </Link>


                <Link href="./RoutesPage">
                    <span className='text-blue-500 cursor-pointer'>
                        Ver rotas
                    </span>
                </Link>

            </div>

        </div>
    )
}