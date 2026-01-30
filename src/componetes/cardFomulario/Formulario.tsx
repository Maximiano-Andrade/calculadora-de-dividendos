import Tune from '../icons/Tune';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

//import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Dataset 2',
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};

const Formulario = () => {
    return (
        <div className='pb-8 grid grid-cols-12 grid-rows-1'>
            <aside className='col-span-4'>
                <div className='p-5 shadow-card-2 bg-background-2 border border-gray-border-1 rounded-3xl'>
                    <div className='flex gap-4 pb-7.75 items-center'>
                        <div className='bg-blue-text-1 p-3 rounded-2xl fill-background-2'>
                            <Tune />
                        </div>

                        <div>
                            <h2 className='font-bold text-[18px] text-blue-text-1 leading-7'>Configuração</h2>
                            <p className='font-bold text-[12px] text-gray-text-1 leading-4'>Ajuste os valores para simular</p>
                        </div>
                    </div>
                    <form>
                        {/* Qtd Cotas */}
                        <div className='focus-within:text-green-8 text-gray-text-3 transition-all'>
                            <label className='block uppercase  font-bold text-[12px] leading-4 tracking-[0.3px] '>
                                <span >Quantidade de Cotas/Ações</span>
                                <input type="number" id='quantity' placeholder='100' className='  mt-2 w-full px-4 py-3 bg-background-1 border rounded-xl border-gray-border-1 placeholder:text-gray-text-4 font-medium text-[1rem] leading-4 tracking-[-0.4px] focus:outline-none focus:border-green-8 ' />
                            </label>
                            <p className='pt-1 font-semibold text-[10px] text-gray-text-4 tracking-[-0.25px]'>Valor total: R$ 10.000,00</p>
                        </div>
                        {/* Ultimo dividendo */}
                        <div className='pt-5 focus-within:text-green-8 text-gray-text-3 transition-all'>
                            <label className='block uppercase  font-bold text-[12px] leading-4 tracking-[0.3px]'>
                                <span>Último Dividendo por Cota</span>
                                <div className='flex items-center relative mt-2'>
                                    <span className='text-[1rem] font-semibold text-gray-text-4 absolute l left-4'>R$</span>
                                    <input type="number" id='dividendo' placeholder='0,3' className='block  w-full pl-12 pr-4 py-3 bg-background-1 border rounded-xl border-gray-border-1 placeholder:text-gray-text-4 font-medium text-[16px] leading-4 tracking-[-0.4px] focus:outline-none focus:border-green-8 ' />
                                </div>
                            </label>
                        </div>
                        {/* Price cotas */}
                        <div className='pt-5 focus-within:text-green-8 text-gray-text-3 transition-all'>
                            <label className='block uppercase  font-bold text-[12px] leading-4 tracking-[0.3px]'>
                                <span>PREÇO DA COTA/AÇÃO</span>
                                <div className='flex items-center relative mt-2'>
                                    <span className='text-[1rem] font-semibold text-gray-text-4 absolute l left-4'>R$</span>
                                    <input type="number" id='priceCota' placeholder='15,00' className='block  w-full pl-12 pr-4 py-3 bg-background-1 border rounded-xl border-gray-border-1 placeholder:text-gray-text-4 font-medium text-[16px] leading-4 tracking-[-0.4px] focus:outline-none focus:border-green-8 ' />
                                </div>
                            </label>
                        </div>
                        {/* Aporte mensal */}
                        <div className='pt-5 focus-within:text-green-8 text-gray-text-3 transition-all'>
                            <label className='block uppercase font-bold text-[12px] leading-4 tracking-[0.3px]'>
                                <span>APORTE MENSAL</span>
                                <div className='flex items-center relative mt-2'>
                                    <span className='text-[1rem] font-semibold text-gray-text-4 absolute l left-4'>R$</span>
                                    <input type="number" id='aporte' placeholder='500,00' className='block  w-full pl-12 pr-4 py-3 bg-background-1 border rounded-xl border-gray-border-1 placeholder:text-gray-text-4 font-medium text-[16px] leading-4 tracking-[-0.4px] focus:outline-none focus:border-green-8 ' />
                                </div>
                            </label>
                        </div>
                        {/* Periodpo(anos) */}
                        <div className='pt-5 focus-within:text-green-8 text-gray-text-3 transition-all'>
                            <label className='block uppercase  font-bold text-[12px] leading-4 tracking-[0.3px]'>
                                <span>PERÍODO (ANOS)</span>
                                <div className='flex items-center mt-2'>
                                    <input type="number" id='periodo' placeholder='10' className='block  w-full px-4 py-3 bg-background-1 border rounded-xl border-gray-border-1 placeholder:text-gray-text-4 font-medium text-[16px] leading-4 tracking-[-0.4px] focus:outline-none focus:border-green-8 ' />
                                </div>
                            </label>
                        </div>
                        {/* reinvestir mento */}
                        <div className='pt-5'>
                            <div className='p-4 bg-background-1 flex justify-between items-center rounded-2xl border border-green-3'>
                                <span>
                                    <p className='font-bold text-[12px] text-green-7 leading-4 tracking-[0.3px]'>Reinvestir Dividendos</p>
                                    <p className='italic text-[10px] text-green-10 tracking-[0.25px] leading-4 uppercase'>Efeito bola de neve</p>
                                </span>

                                <label className='relative inline-flex cursor-pointer items-center gap-3 text-gray-900 ring-offset-1'>
                                    <input type="checkbox" className='peer sr-only' />
                                    <div className='h-7 w-12 rounded-full bg-slate-200 transition-colors duration-200 peer-checked:bg-green-5'></div>
                                    <span className='dot absolute top-1 left-1 bg-white h-5 w-5 rounded-full transition-transform duration-200 ease-in-out peer-checked:translate-x-5'></span>
                                </label>
                            </div>

                        </div>
                    </form>
                </div>
            </aside>

            <main className='col-span-8'>
                <div className='p-6'>
                    {/* <Line options={options} data={data} />; */}
                </div>
            </main>

        </div>
    )
}

export default Formulario
