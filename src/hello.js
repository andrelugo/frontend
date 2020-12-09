import './App.css';
import './hello.css';

function Hello() {
    return (
    <div>Hello World!</div>
);

}

export function Mansur() {
    return(
        <div>
            <p>Crie sua sala:</p>
            <form className="example" action="">
            <input type="text" placeholder="Nome da sala..." name="search"></input>
            <button type="submit">Criar</button>
            </form>
        </div>
        );
}

export const Nomedis = ({nome_sala="",color="green"}) => (nome_sala != nome_sala) ? <h2 style={{color: 'red'}}>{nome_sala} Já existe, escolha outro nome.</h2> : <div><h2 style={{color}}>{nome_sala} dispível.</h2><button type="submit">Criar</button></div>

// export function Andrezao({saldo="0",color="blue",texto="Beleza"}) {
//     console.log(saldo)
    
//     // if (saldo < 0){
//     //     color="red";
//     //     texto="Fudeu";
//     // }
//     // color=saldo < 0 ? "red":"blue";

//     // return(
//     // <h2 style={{color}}> {saldo} {texto}</h2>
//     // );
// return (saldo < 0) ? <h2 style={{color: 'red'}}>{saldo} Fudeu</h2> : <h2 style={{color}}>{saldo} Belezura</h2>
// }

export const Andrezao = ({saldo="0",color="blue",texto="Beleza"}) => (saldo < 0) ? <h2 style={{color: 'red'}}>{saldo} Fudeu</h2> : <h2 style={{color}}>{saldo} Belez</h2>

export  default Hello
