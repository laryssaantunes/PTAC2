import { Exemplo } from './Exemplo'
export default function App() {
  const listaAlunos = [{nome:"laryssa", Idade: 17, Cidade:"Bataypora"}, {nome:"Rebekinha", Idade: 15, Cidade:"Bataypora"}, {nome:"Thaissinha", Idade: 16, Cidade:"Bataypora"}]
    return (
      <div>
        <h1>Hello Word!</h1>
        <Exemplo lista = {listaAlunos}/>
      </div>
  
    );
}