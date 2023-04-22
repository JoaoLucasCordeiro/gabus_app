export default function ScheduleDistrict({schedule}) {
    return (
        <div className="w-[100px] h-[50px] bg-yellow-500 flex items-center justify-center rounded-lg mt-5">
            <span className="font-bold text-white">
                {schedule}
            </span>
        </div>
    )
}