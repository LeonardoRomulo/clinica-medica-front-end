import estilos from "./footer.module.css"

export default function Footer() {
    return(
        <footer className={estilos.rodape}>
            <div className="conteudo-rodape">
                <h3 className="titulo-rodape">Clínica de Pediatria </h3>
                <p className="subtitulo-rodape">Cuidando da sua saúde desde 1995 </p>
                <div className="links-sociais">
                    <a href="tel:1130000000" className="link-social">
                        <span className="material-symbols-outlined">call</span>
                    </a>
                    <a href="mailto:contato@clinica.com" className="link-social">
                        <span className="material-symbols-outlined">email</span>
                    </a>
                    <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="link-social">
                        <span className="material-symbols-outlined">place </span>
                    </a>
                </div>
            </div>
    </footer>
    )
}