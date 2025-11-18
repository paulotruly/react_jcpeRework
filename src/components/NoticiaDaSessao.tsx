function NoticiaDaSessao() {

    return (
        <div className="relative flex flex-col h-30 w-full p-2 bg-black/5">
            <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent w-full h-2/3 z-20 rounded-lg"> </div>
            <div className="absolute top-0 left-0 bg-gray-300 w-full h-full z-10 rounded-lg"> </div>

            <p className="absolute top-2 text-left text-[#DF1E26] font-semibold text-[8px] mb-2 z-30"> CATEGORIA </p>
            <p className="absolute bottom-4 text-left text-[13px] font-bold leading-tight z-30 text-white"> Título da notícia por extenso </p>
        </div>
    )
}

export default NoticiaDaSessao