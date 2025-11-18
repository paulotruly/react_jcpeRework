import NoticiaDaSessao from "./NoticiaDaSessao"

function SessaoNoticias() {

    return (
        <div className="flex flex-col">

            <div className="flex flex-row items-center justify-center m-4">
                <p className="font-normal text-sm w-auto"> Últimas notícias </p>
                <div className="bg-[#DF1E26] w-2/3 h-[0.5px] ml-4"> </div>
            </div>

            <div className="grid grid-cols-3 gap-2 px-4">
                <NoticiaDaSessao></NoticiaDaSessao>
                <NoticiaDaSessao></NoticiaDaSessao>
                <div className="flex bg-red-100 justify-center items-center text-sm text-red-300"> publicidade </div>
                <NoticiaDaSessao></NoticiaDaSessao>
                <NoticiaDaSessao></NoticiaDaSessao>
                <NoticiaDaSessao></NoticiaDaSessao>
                <div className="flex bg-red-100 justify-center items-center text-sm text-red-300"> publicidade </div>
                <NoticiaDaSessao></NoticiaDaSessao>
                <NoticiaDaSessao></NoticiaDaSessao>
            </div>
        </div>
    )
}

export default SessaoNoticias