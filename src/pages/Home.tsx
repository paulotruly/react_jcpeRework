import UltimaNoticia from "../components/UltimaNoticia"
import SessaoNoticias from "../components/SessaoNoticias"
import { useEffect, useState } from "react";

export interface Materia {
  id: number;
  titulo: string;
  legenda: string;
  autor: string;
  imagem: string;
  dataPublicacao: string; 
  conteudo: ConteudoMateria;
  topico: Topico;
}

export interface Topico {
  id: number;
  nome: string; 
}

export interface SubtituloConteudo {
  titulo: string; 
  texto: string; 
}

export interface ConteudoMateria {
  subtitulos: SubtituloConteudo[];
  textoPrincipal: string; 
}

export interface UltimaNoticiaProps {
    materia: Materia;
}

function Home() {
    const API_URL_MATERIAS = 'http://localhost:8080/materias';
    const [materias, setMaterias] = useState<Materia[]>([]);

    useEffect(() => {
        const buscarEManterMaterias = async () => {
            try {
                const resposta = await fetch(API_URL_MATERIAS);
                if (!resposta.ok) {
                    throw new Error(`Erro na API: ${resposta.statusText}`);
                }
                
                const dadosCompletos: Materia[] = await resposta.json();
                
                const dadosOrdenados = [...dadosCompletos].sort((a, b) => {
                    return new Date(b.dataPublicacao).getTime() - new Date(a.dataPublicacao).getTime();
                });

                setMaterias(dadosOrdenados);
            } catch (error) {
                console.error("Não foi possível buscar as matérias!", error);
            }
        };
        buscarEManterMaterias();
    }, []);

    const ultimaNoticia = materias.length > 0 ? materias[0] : null;

    return (
        <div>
            {ultimaNoticia &&
            <UltimaNoticia materia={ultimaNoticia}
            />}
            <SessaoNoticias></SessaoNoticias>
        </div>
    )
}

export default Home