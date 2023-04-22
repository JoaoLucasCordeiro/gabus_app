import Link from "next/link"

export default function BarDays() {
    return (
        <div className="w-[414px] h-[59px] bg-secondaryBg flex items-center justify-around max-w-screen-lg mx-auto left-0 fixed bottom-0">
        

            <div>
                <Link href="/AppFeed">
                    <span className="text-white">VOLTAR</span>
                </Link>
            </div>


        </div>
    )
}