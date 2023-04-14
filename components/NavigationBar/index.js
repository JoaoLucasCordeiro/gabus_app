import Image from 'next/image'
import Link from 'next/link'
import Fav from '../../public/icons/coracao_icon.png'
import Home from '../../public/icons/home.png'


export default function NavigationBar() {
    return (
        <div className="w-[414px] h-[59px] bg-secondaryBg flex items-center justify-around max-w-screen-lg mx-auto left-0 fixed bottom-0">
            <div>
                <Link href="./AppFeed">
                    <Image src={Home} width={17} height={17} alt='Icone da barra da navegação' />
                </Link>
            </div>

            <div>
                <Link href="./FavoriteRoutes">
                    <Image src={Fav} width={17} height={17} alt='Icone da barra da navegação' />
                </Link>
            </div>
        </div>
    )
}