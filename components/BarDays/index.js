import Link from "next/link"

export default function BarDays() {
    return (
        <div className="w-[414px] h-[59px] bg-secondaryBg flex items-center justify-around max-w-screen-lg mx-auto left-0 fixed bottom-0">
            <div>
                <Link href="#">
                    <span className="text-white">Útil</span>
                </Link>
            </div>

            <div>
                <Link href="#">
                    <span className="text-white">Sábado</span>
                </Link>
            </div>


            <div>
                <Link href="#">
                    <span className="text-white">Domingo/Feriado</span>
                </Link>
            </div>
        </div>
    )
}