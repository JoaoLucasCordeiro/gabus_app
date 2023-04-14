import NavigationBar from "../../../components/NavigationBar"
import RouteModal from "../../../components/RouteModal"


export default function AppFeed() {
    return (
        <div className="flex flex-col items-center bg-mainBg min-h-screen h-screen-sm w-[414px] h-[896px]">
            <h1 className="text-white mt-5 text-xl font-bold">Rotas disponíveis</h1>

            <div className="flex flex-col items-center justify-center">
                <RouteModal />
                <RouteModal />
                <RouteModal />
                <RouteModal />
                <RouteModal />
                <RouteModal />
            </div>

            <NavigationBar/>
        </div>
    )
}