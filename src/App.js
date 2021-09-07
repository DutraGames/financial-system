import React, {useEffect, useState} from "react"
import './App.css'

export default function App() {

  
const [saldo, setSaldo] = useState(0)
const [receita, setReceita] = useState(0)
const [despesas, setDespesas] = useState(0)
const [action, setAction] = useState('Salário')
const [valor, setValor] = useState(1)


function AddTras(){
  alert("Hello Word")
}

return(
<div>

  <div className="box-saldo">
    <h2>Controle de Despesas</h2>
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

  <div className="box-tras">
    <h2>Adicionar Transação</h2>
    
    <label>Transação:</label>
    <select name="transacao">
    <option value="Salário">Salário</option>
      <option value="Conta de Luz">Conta de Luz</option>
      <option value="Conta d' Água">Conta d' Água</option>
      <option value="Internet">Internet</option>
      <option value="Plano de Saúde">Plano de Saúde</option>
      <option value="Plano Funerário">Plano Funerário</option>
      <option value="Gás">Gás</option>
      <option value="Fast Food">Fast Food</option>
    </select>

    <label>Valor:</label>
    <input type="number" value={valor}min="1"/>

    <a className="btn" onClick={AddTras}>Adicionar</a>
  </div>

</div>
)
}