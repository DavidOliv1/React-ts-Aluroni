import React from "react"
import styles from "./Buscador.module.scss";
import { CgSearch} from "react-icons/cg";

type Props = {
    busca: string,
    setBusca: React.Dispatch<React.SetStateAction<string>>,
}

export default function Buscador({ busca, setBusca} : Props) {

    return (
        <div className={styles.buscador}>
            <input value={busca} onChange={(event) => setBusca(event.target.value)} placeholder="Buscar"></input>
            <CgSearch size={20} color="#4c4d5e"/>
        </div>
    )
}