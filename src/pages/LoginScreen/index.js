import Image from 'next/image'
import Link from 'next/link'
import GaBusLogo from '../../../public/icons/gabus_logo.svg'

export default function LoginScreen() {
    return (
        <div className="flex flex-col items-center bg-mainBg min-h-screen h-screen-sm flex flex-col items-center">

            <div className='mt-20'>
                <div>
                    <Image src={GaBusLogo} width={200} height={200} alt='Logo do app' />
                </div>

                <div>
                    <Link href="./AppFeed">
                        <button className='w-[250px] p-2 rounded-[20px] bg-bgBlue text-white font-bold'>
                            Entrar
                        </button>
                    </Link>
                </div>
            </div>

        </div>
    )
}