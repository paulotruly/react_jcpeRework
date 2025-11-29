import { Link } from "react-router-dom";

interface Materia {
  id: number;
  titulo: string;
  legenda: string;
  autor: string;
  imagem: string;
  dataPublicacao: string; 
  conteudo: ConteudoMateria;
  topico: Topico;
}

interface Topico {
  id: number;
  nome: string; 
}

interface SubtituloConteudo {
  titulo: string; 
  texto: string; 
}

interface ConteudoMateria {
  subtitulos: SubtituloConteudo[];
  textoPrincipal: string; 
}

interface NoticiaDaSessaoProps {
    materia: Materia;
}

function NoticiaDaSessao({materia}: NoticiaDaSessaoProps) {

    const {id, imagem, topico, titulo} = materia;

    return (
      <Link to={`/noticias/${id}`}> 
        <div className="flex flex-col h-auto">
        <img className="relative flex flex-col h-30 w-full rounded-lg"
            src={imagem} alt="" />

            <div className="flex flex-col w-auto my-2 p-1">
                <p className="text-left text-[#DF1E26] font-semibold text-[10px] mb-1"> {topico.nome.toUpperCase()} </p>
                <p className="text-left text-[16px] font-semibold leading-tight tracking-tight text-black"> {titulo} </p>
            </div>
        </div>
      </Link>
    )
}

export default NoticiaDaSessao