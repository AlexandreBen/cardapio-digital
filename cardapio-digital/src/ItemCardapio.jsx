export function ItemCardapio(Props) {
    return <div className='container-item-cardapio'>
        <div>
            <h2>{Props.nome}</h2>
            <p>{Props.preco}</p>
            <p>{Props.descricao}</p>
        </div>
        <img src={Props.imagem} alt="" />
    </div>
}

 

 