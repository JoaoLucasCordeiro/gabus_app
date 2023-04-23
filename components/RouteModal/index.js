import Link from 'next/link'
import FavoriteHeart from '../../public/icons/EmptyHeart.png'
import Image from 'next/image'
import { useState } from 'react';

export default function RouteModal({ linha, bairro, preco, tempoMedio, schedules, routes }) {

    return (
        <div className="w-[350px] p-5 rounded-[20px] bg-secondaryBg flex flex-col items-center mt-5">

            <div className="flex items-center justify-around border-b-2 border-white w-full">

                <div className="flex flex-col items-center justify-center">
                    <span className="text-white">Linha</span>
                    <span className="text-green-500">{linha}</span>
                </div>

                <h1 className="text-white font-bold">{bairro}</h1>

                <div className="flex flex-col items-center justify-center ">
                    <span className="text-white">Preço</span>
                    <span className="text-green-500">{preco}</span>
                </div>

            </div>

            <div className="flex items-center justify-around w-full mt-4">

                <div className="flex flex-col items-center justify-center ">
                    <span className="text-white">Tempo médio</span>
                    <span className="text-green-500">{tempoMedio}</span>
                </div>

                <div className='cursor-pointer'>
                    <Image src={FavoriteHeart} width={22} height={22} alt='ícone de favoritar' />
                </div>

            </div>


            <div className='flex items-center justify-center gap-10 mt-2'>

                <Link href={schedules}>
                    <span className='text-blue-500 cursor-pointer'>
                        Horários
                    </span>
                </Link>


                <Link href={routes}>
                    <span className='text-blue-500 cursor-pointer'>
                        Ver rotas
                    </span>
                </Link>

            </div>

        </div>
    )
}