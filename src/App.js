import React, {useEffect, useState} from "react"
import './App.css'

export default function App() {

const [saldo, setSaldo] = useState(0)
const [receita, setReceita] = useState(0)
const [despesas, setDespesas] = useState(0)
const [action, setAction] = useState('Salário')
const [valor, setValor] = useState(1)
const [trans, setTrans] = useState([])

useEffect(() => {

  if ("saldo" in localStorage) {
    setSaldo(parseFloat(localStorage.getItem("saldo")))
} else {
  localStorage.setItem('saldo', saldo)
}

if ("receita" in localStorage) {
  setReceita(parseFloat(localStorage.getItem("receita")))
} else {
localStorage.setItem('receita', receita)
}

if ("despesas" in localStorage) {
  setDespesas(parseFloat(localStorage.getItem("despesas")))
} else {
localStorage.setItem('despesas', despesas)
}

if ("trans" in localStorage){
  setTrans(JSON.parse(localStorage.getItem("trans")))
}else{
  localStorage.setItem("trans", JSON.stringify(trans))
}

}, [])


function AddTras(){
  if(action === 'Salário'){
    setReceita(receita + valor)
    setSaldo(saldo + valor)
    setTrans([...trans, {id: trans.length, acao: action, qtn: valor, cor: '#0f0'}])

  localStorage.setItem("saldo", parseFloat(saldo + valor))
  localStorage.setItem("despesas", parseFloat(despesas))
  localStorage.setItem("receita", parseFloat(receita + valor))
  localStorage.setItem("trans", JSON.stringify(trans))


  }else{
    setDespesas(despesas + valor)
    setSaldo(saldo - valor)
    setTrans([...trans, {id: trans.length, acao: action, qtn: valor, cor: '#f00'}])

    localStorage.setItem("saldo", parseFloat(saldo - valor))
    localStorage.setItem("despesas", parseFloat(despesas + valor))
    localStorage.setItem("receita", parseFloat(receita))
    localStorage.setItem("trans", JSON.stringify(trans))
  }

}

return(
<div>

  <div className="box-saldo">
    <h2>Controle de Finanças</h2>
    <p>Saldo Atual:</p>
    <span>R$ {saldo.toFixed(2)}</span>
  </div>


  <div className="box-money">
    <div className="box-item-money">
      <span>Receita</span>
      <span style={{color:'#0d0'}}>R$ {receita.toFixed(2)}</span>
    </div>

    <div className="box-item-money">
      <span>Despesas</span>
      <span style={{color:'#d00'}}>R$ {despesas.toFixed(2)}</span>
    </div>
  </div>

  <div className="box-ultimas">
    <h2>Últimas Trasações</h2>
    <ul className="box-ultima-list">
      {trans.map(tran =>(
        <li key={tran.id}>
          <p>{tran.acao}:</p>
          <p>R$ {tran.qtn.toFixed(2)}</p>
          <span style={{width: '5px', height: '100%', backgroundColor: tran.cor}}>&nbsp;</span>
        </li>
        ))}
      </ul>
  </div>

  <div className="box-tras">
    <h2>Adicionar Transação</h2>
    
    <label>Transação:</label>
    <select name="transacao" onClick={(e)=> setAction(e.target.value)}>
    <option value="Salário">Salário</option>
      <option value="Conta de Luz">Conta de Luz</option>
      <option value="Conta d' Água">Conta d' Água</option>
      <option value="Internet">Internet</option>
      <option value="Telefone">Telefone</option>
      <option value="Plano de Saúde">Plano de Saúde</option>
      <option value="Plano Funerário">Plano Funerário</option>
      <option value="Gás">Gás</option>
      <option value="Fast Food">Fast Food</option>
    </select>

    <label>Valor:</label>
    <input type="number" value={valor} min="1" onChange={(e)=> setValor(parseFloat(e.target.value))}/>

    <a className="btn" onClick={AddTras}>Adicionar</a>
  </div>

</div>
)
}