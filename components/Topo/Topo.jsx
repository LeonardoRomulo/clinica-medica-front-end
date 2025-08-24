import estilos from "./topo.module.css"

export default function Topo() {
    return (
        <header className={estilos.topo}>
            <div className={estilos.container}>
                <div className={estilos.hero}>
                    <div className={estilos.conteudo_hero}>
                        <h1 className={estilos.titulo_hero}>Clínica de Pediatria </h1>
                        <p className={estilos.subtitulo_hero}>
                            Cuidando da sua saúde com excelência e dedicação
                        </p>

                        <div className={estilos.info_rapida}>
                            <div className={estilos.cartao_info}>
                                <span className={estilos.material_symbols_outlined} >place</span>
                                <span>Av. Paulista, 1000 - São Paulo </span>
                            </div>
                            <div className={estilos.cartao_info}>
                                <span className={estilos.material_symbols_outlined}>schedule </span>
                                <span >Seg-Sex: 8h às 20h </span>
                            </div>
                            <div className={estilos.cartao_info}>
                                <span className={estilos.material_symbols_outlined}>call </span>
                                <span>(11) 3000-0000 </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}