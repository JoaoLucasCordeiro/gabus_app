import Image from 'next/image'
import Link from 'next/link'
import FavoriteHeart from '../../public/icons/EmptyHeart.png'
import Home from '../../public/icons/home.png'


export default function NavigationBar() {
    return (
        <div className="w-[414px] h-[59px] bg-secondaryBg flex items-center justify-around max-w-screen-lg mx-auto left-0 fixed bottom-0">
            <div>
                <Link href="./AppFeed">
                    <Image src={Home} width={24} height={24} alt='Icone da barra da navegação' />
                </Link>
            </div>


        </div>
    )
}