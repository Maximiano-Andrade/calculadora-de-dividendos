import Calendar from '../icons/Calendar';
import Savings from '../icons/Savings';
import Trending from '../icons/Trending';
import Wallet from '../icons/Wallet';

function CardsResume({DadosResume}:any) {
  return (
    <ul className='flex gap-6 pb-8 justify-center'>

      <li className='flex p-5 bg-background-2 border-gray-border-1 border rounded-2xl shadow-card-1 backdrop-blur-[10px] items-center relative w-75.5 overflow-hidden'>
        <div>
          <h3 className='font-semibold text-[0.75rem] leading-4 text-gray-text-1 pb-1 uppercase'>VALOR INVESTIDO</h3>
          <h4 className='text-[1.5rem] font-semibold to-blue-text-1'>{DadosResume.valor} </h4>
        </div>
        <div className='fill-icon-waller right-5 absolute'><Wallet /></div>
         <div className='w-36 h-36 bg-gray-text-2 rounded-[75%] absolute -right-7 blur-2xl opacity-10 -z-10'></div>
      </li>

      <li className='flex p-5 bg-background-2 border-gray-border-1 border rounded-2xl shadow-card-1 backdrop-blur-[10px] items-center relative w-75.5 overflow-hidden'>
        <div>
          <h3 className='font-semibold text-[0.75rem] leading-4 text-gray-text-1 pb-1 uppercase'>Yield Anual</h3>
          <h4 className='text-[1.5rem] font-semibold text-green-5'>{DadosResume.yieldAnual}</h4>
        </div>
        <div className='fill-green-3 right-5 absolute'><Trending /></div>
         <div className='w-36 h-36 bg-green-8 rounded-[75%] absolute -right-7 blur-2xl opacity-10 -z-10'></div>
      </li>

      <li className='flex p-5 bg-background-2 border-gray-border-1 border rounded-2xl shadow-card-1 backdrop-blur-[10px] items-center relative w-75.5 overflow-hidden'>
        <div>
          <h3 className='font-semibold text-[0.75rem] leading-4 text-gray-text-1 pb-1 uppercase'>Div. Mensal Final</h3>
          <h4 className='text-[1.5rem] font-semibold to-blue-text-1'>{DadosResume.divindentMonthly}</h4>
        </div>
        <div className='fill-icon-calendar right-5 absolute'><Calendar /></div>
         <div className='w-36 h-36 bg-navy-blue rounded-[75%] absolute -right-7 blur-2xl opacity-10 -z-10'></div>
      </li>

      <li className='flex p-5 bg-background-2 border-gray-border-1 border rounded-2xl shadow-card-1 backdrop-blur-[10px] items-center relative w-75.5 overflow-hidden'>
        <div>
          <h3 className='font-semibold text-[0.75rem] leading-4 text-gray-text-1 pb-1 uppercase'>Total em Dividendos</h3>
          <h4 className='text-[1.5rem] font-semibold to-blue-text-1'>{DadosResume.totalDividends}</h4>
        </div>
        <div className='fill-icon-saving right-5 absolute'><Savings /></div>
         <div className='w-36 h-36 bg-purple-1 rounded-[75%] absolute -right-7 blur-2xl opacity-10 -z-10'></div>
      </li>

    </ul>
  )
}

export default CardsResume;
