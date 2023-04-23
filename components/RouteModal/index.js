import Link from 'next/link'
import FavoriteHeart from '../../public/icons/EmptyHeart.png'
import FavoriteHeartRed from '../../public/icons/RedHeart.png'
import Image from 'next/image'
import { useState } from 'react'


export default function RouteModal({ linha, bairro, preco, tempoMedio, schedules, routes }) {
    const [isFavorite, setIsFavorite] = useState(false);
  
    const toggleFavorite = () => {
      setIsFavorite(!isFavorite);
    };
  
    const heartIcon = isFavorite ? FavoriteHeartRed : FavoriteHeart;
    const backgroundColor = isFavorite ? 'bg-neutral-400' : 'bg-secondaryBg';
  
    return (
      <div className={`w-[350px] p-5 rounded-[20px] ${backgroundColor} flex flex-col items-center mt-5 ease-in-out duration-300`}>
  
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
  
          <div className='cursor-pointer' onClick={toggleFavorite}>
            <Image src={heartIcon} width={22} height={22} alt='ícone de favoritar' />
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