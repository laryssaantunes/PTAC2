import { Dev } from './Dev'
export function Exemplo({lista}){
    return (
        <div>
          {lista.map(aluno=>(
          <ul>
            <li>{aluno.nome}, {aluno.Idade} anos, mora em {aluno.Cidade}</li>
          </ul>  
          ))}  
            <Dev nome="laryssa"/>
        </div>
    );

}