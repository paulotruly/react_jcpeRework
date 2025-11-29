import type { Materia, Topico } from '../pages/Home';
import { Link } from 'react-router-dom';

interface UltimaNoticiaProps {
    materia: Materia;
}

function UltimaNoticia({ materia }: UltimaNoticiaProps) {

    const { id, titulo, legenda, imagem, topico } = materia;

    return (
        <Link to={`/noticias/${id}`}>
        <div className="flex flex-col">
            <div className="relative flex flex-col justify-center items-center md:justify-start lg:justify-start">
                <img
                    className="bg-black/40 w-full h-70 overflow-hidden object-contain"
                    src={imagem}
                    alt="" />

                <div className="absolute flex flex-col w-full px-4 mt-2 bottom-6 left-0 z-30">
                    <div className="w-fit inline-block bg-[#DF1E26] px-2 py-1 rounded-lg mb-2">
                        <p className="text-white font-semibold text-[10px]"> {topico.nome} </p>
                    </div>
                    
                    <p className="text-left text-lg text-white font-bold leading-tight mb-2"> {titulo} </p>

                    <p className="text-left mt-1 text-white font-normal leading-tight text-[10px]"> {legenda}
                    </p>
                </div>

                {/* <div className="flex justify-center items-center text-sm w-full bg-red-100 text-red-300 h-10 mt-4"> publicidade </div> */}

                <div className="absolute bg-linear-to-t from-black to-transparent w-full h-full bottom-0 top-0"> </div>
            </div>

            <div className="flex flex-col justify-center items-center my-3">
                <p className="text-[11px] text-gray-400"> Publicidade </p>
                <div className="h-10 w-100 mx-3 bg-yellow-100"></div>
            </div>
        </div>
        </Link>
    )
}

export default UltimaNoticia