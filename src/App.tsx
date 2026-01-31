import { useState } from 'react'
import './App.css'
import Formulario from './componetes/cardFomulario/Formulario'
import CardsResume from './componetes/cardResumo/CardsResume'
import NavBar from './componetes/navBar/NavBar'
import type { DadosResumo } from './types/DadosResumo'
import type { Dados } from './types/Dados'

  const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
};

const formatPercent = (value: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'percent',
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }).format(value);
};

function App() {

  const [Dados, setDados] = useState<Dados>({
    quantity: 100,
    lastDividend: 0.3,
    priceCota: 100,
    monthlyContribution: 500.00,
    period: 2,
    ReinvestingDividends: false
  });

  function receberDados(Dados: Partial<Dados>) {
    setDados(prev => ({
      ...prev,
      ...Dados,
    }));
  }

  var Resume: DadosResumo = {
    valor: calculorCotas(),
    yieldAnual: dividendYield(),
    divindentMonthly: dividendMonths(),
    totalDividends: dividendTotal()
  }

   function calculorCotas() {
    const somar = Dados.quantity * Dados.priceCota;
    return formatCurrency(somar);
  }

  function dividendYield() {
    const pagorAnoYield: number = Dados.lastDividend * 12;
    const yieldAno: number = (pagorAnoYield / Dados.priceCota)*100;
    return formatPercent(yieldAno/100);
  }

  function dividendMonths(){
    const dividendMonth = (Dados.lastDividend * Dados.quantity); 
    return formatCurrency(dividendMonth)
  }

  function dividendTotal(){
    const totalMunths = Dados.period * 12;
    const lastDividendMunth = Dados.lastDividend * Dados.quantity;
    const total = totalMunths * lastDividendMunth
    
    
    return formatCurrency(total)
  }

return (
  <div className='App'>
    <NavBar />
    <CardsResume DadosResume={Resume} />
    <Formulario onChange={receberDados} calculorCotas={calculorCotas} Dados={Dados} />
  </div>
)
}

export default App
