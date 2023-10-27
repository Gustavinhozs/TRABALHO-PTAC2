import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";


export default function ToDo() {
    const listaLocalStorage = JSON.parse(localStorage.getItem("lista")) || [];
    const [atividade, setAtividade] = useState("");
    const [id, setId] = useState(listaLocalStorage [listaLocalStorage.length -1]?.id + 1 || 1);
    const [lista, setLista] = useState(listaLocalStorage);
    const [valor, setValor] = useState("");

    useEffect(() => {
        localStorage.setItem("lista",JSON.stringify(lista));
},[lista]);

    const salvar = (e) => {
        e.preventDefault();
        setLista([...lista, {
            atividade: atividade,
            id: id, 
            valor: valor
        }]);
        setId(id + 1);
        setAtividade("");
        setValor("");
    };
    const remover = (id) => {
        /*setLista(lista.filter((ativ) => (ativ.id !== id ? lista : null)));*/
        const auxLista = [];
        lista.map((lista) => {
            if (lista.id !== id) {
                auxLista.push(lista);
            }
        });
        setLista(auxLista);
    }
    return (
        <div className="container">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/2023_Obsidian_logo.svg/800px-2023_Obsidian_logo.svg.png"></img>
            <a href='http://localhost:5173'><button>Home</button></a>
            <h1>Pedras preciosas mais valiosas do mundo.</h1>
            <form onSubmit={salvar}>
                <input
                    type="text"
                    value={atividade}
                    onChange={(e) => setAtividade(e.target.value)}
                    placeholder="Nome da Joia" /// subtítulo 
                />
                <input
                    type="text"
                    value={valor}
                    onChange={(e) => setValor(e.target.value)}
                    placeholder="Valor por grama" /// subtítulo 
                />
                <button>ADICIONAR</button>
            </form>
            {lista.map((ativ) =>
                <ul key={ativ.id}>
                    <li>
                        <p>{ativ.id} {ativ.atividade} {ativ.valor} </p> 
                        <button onClick={() => remover(ativ.id)}>Remover</button>
                    </li>
                </ul>
            )}
        </div>
    );
}
