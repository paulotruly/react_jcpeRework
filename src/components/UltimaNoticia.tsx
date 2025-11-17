function UltimaNoticia() {

    return (
        <div className="flex flex-col justify-center bg-blue-100 w-full h-auto pb-4 pt-2">

            <div className="flex justify-center items-center md:justify-start lg:justify-start">
                <img
                className="bg-black/10 w-98 h-40 m-2 rounded-[12px] overflow-hidden object-contain"
                src=""
                alt=""/>
            </div>

            <div className="flex flex-col px-4 mt-2">
                <p className="text-left text-red-500 font-semibold text-[10px]"> CATEGORIA AQUI </p>
                
                <p className="text-left text-2xl font-bold"> Título da matéria aqui </p>

                <p className="text-left mt-1 text-sm font-normal text-[11px]"> Descrição da matéria </p>
            </div>

        </div>
    )
}

export default UltimaNoticia