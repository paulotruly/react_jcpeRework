import NoticiaDaSessao from "./NoticiaDaSessao"

function SessaoNoticias() {

    return (
        <div className="grid grid-cols-2 gap-2 p-2">
            <NoticiaDaSessao></NoticiaDaSessao>
            <NoticiaDaSessao></NoticiaDaSessao>
            <NoticiaDaSessao></NoticiaDaSessao>
            <NoticiaDaSessao></NoticiaDaSessao>
        </div>
    )
}

export default SessaoNoticias