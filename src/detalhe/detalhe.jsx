import { useParams } from "react-router-dom";
import Card from "../Componentes/Card";

export default function(){
    const { id } = useParams();
    const list = JSON.parse( localStorage.getItem("Lista"));
    const atividade = list.filter ( (objeto) => {
        if(objeto.id == id){
        return objeto;
        }
        return null;
    })
    console.log(atividade);

 return (
    <Card atividade={atividade[0]}/>
 );
}