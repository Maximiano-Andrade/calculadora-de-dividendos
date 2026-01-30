import FinanceChip from "../icons/FinanceChip"

const NavBar = () => {
  return (
    <header className="pb-10 text-center">
      <div className="mb-4">
        <div className="px-4 py-1.5 bg-green-2 w-auto inline-flex rounded-full border border-green-3">
          <h1 className="flex justify-center items-center gap-2 text-green-1 text-xs font-bold tracking-1 uppercase"><span><FinanceChip /></span>Simulador de Investimentos Profissional</h1>
        </div>
      </div>

      <div className="mb-3 ">
        <h1 className="inline-flex text-4xl font-extrabold text-blue-text-1 leading-[0.9rem] tracking-[-0.05625rem]">Calculadora de <span className="text-green-4">Dividendos</span></h1>
      </div>

      <div >
        <p className="text-[1rem] font-medium leading-6 text-gray-text-1">Analise o poder dos juros compostos através do reinvestimento estratégico e aportes mensais.</p>
      </div>
      
    </header>

  )
}

export default NavBar
