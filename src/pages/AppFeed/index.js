import NavigationBar from "../../../components/NavigationBar"
import RouteModal from "../../../components/RouteModal"
import data from "../../../public/data.json";


export default function AppFeed() {
    return (
        <div className="flex flex-col items-center bg-mainBg min-h-screen h-screen-sm w-[414px] h-[2200px]">
            <h1 className="text-white mt-5 text-xl font-bold">Rotas disponíveis</h1>

            <div className="flex flex-col items-center justify-center">
                {data.map((item) => (
                    <RouteModal
                        key={item.linha}
                        linha={item.linha}
                        bairro={item.bairro}
                        preco={item.preco}
                        tempoMedio={item.tempoMedio}
                        schedules={item.schedule}
                        routes={item.routes}
                    />
                ))}
            </div>

            <NavigationBar />
        </div>
    )
}