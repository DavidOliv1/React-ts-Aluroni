import React from "react";
import filtros from "./filtros.json";
import styles from "./Filtros.module.scss";

type Opcao = typeof filtros[0];

type PropsFilter = {
    filterSelected: number | null,
    setFilterSelected: React.Dispatch<React.SetStateAction<number | null>>,
}

export default function Filtros({filterSelected, setFilterSelected} : PropsFilter) {

    function selecionarFiltro (opcao: Opcao) {
        if(filterSelected === opcao.id) return setFilterSelected(null);
        setFilterSelected(opcao.id);
    }

    return (
        <div className={styles.filtros}>
            {filtros.map((opcao) => (
                <button className={`${styles.filtros__filtro} ${filterSelected === opcao.id ? styles["filtros__filtro--ativo"] : ""}`} key={opcao.id} onClick={() => selecionarFiltro(opcao)}>
                    {opcao.label}
                </button>
            ))}
        </div>
    )
}