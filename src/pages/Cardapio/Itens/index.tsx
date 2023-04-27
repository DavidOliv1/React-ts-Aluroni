import { useEffect, useState } from "react";
import Item from "./Item";
import cardapio from "./itens.json";
import styles from "./Itens.module.scss";

type Props = {
    busca: string,
    filterSelected: number | null, 
    ordenador: string,
}


export default function Itens(props: Props) {

    const {busca, filterSelected, ordenador} = props;

    const [lista, setLista] = useState(cardapio);

    function testaBusca(title: string) {
        const regex = new RegExp(busca, "i");
        return regex.test(title);
    }

    function testaFiltro(id : number) {
        if(filterSelected === null) {
            return true;
        }
        return filterSelected === id;
    }

    function ordenarPropriedadeCrescente(lista: typeof cardapio, propriedade:  keyof Pick<typeof cardapio[0], 'size' | 'serving' | 'price'>) {
        return lista.sort((item1, item2) => item1[propriedade] > item2[propriedade] ? 1 : -1);
    }

    function ordenar(novaLista: typeof cardapio) {
        switch(ordenador) {
            case 'porcao':
                return ordenarPropriedadeCrescente(novaLista, 'size');
            case 'qtd_pessoas':
                return ordenarPropriedadeCrescente(novaLista, 'serving');
            case 'preco':
                return ordenarPropriedadeCrescente(novaLista, 'price');
            default: 
                return novaLista;
        }
    }


    useEffect(() => {
        const novaLista = cardapio.filter((item) => testaBusca(item.title) && testaFiltro(item.category.id));
        setLista(ordenar(novaLista));
    }, [busca, filterSelected, ordenador])

    return (
        <div className={styles.itens}>
            {lista.map((item) => (
                <Item key={item.id} item={item}/>
            ))}
        </div>
    )
}