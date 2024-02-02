export function Navegacao(Props) {
    return <div className='navegacao'>
        <input type="radio" name="opcao-pagina" id="pagina-0" defaultChecked onClick={() => Props.atualizarPaginaSelecionada(0)}/>
        <label htmlFor="pagina-0">Pratos Principais</label>
        <input type="radio" name="opcao-pagina" id="pagina-1" onClick={() => Props.atualizarPaginaSelecionada(1)}/>
        <label htmlFor="pagina-1">Sobremesa</label>
        <input type="radio" name="opcao-pagina" id="pagina-2" onClick={() => Props.atualizarPaginaSelecionada(2)}/>
        <label htmlFor="pagina-2">Bebidas</label>
    </div>
}

