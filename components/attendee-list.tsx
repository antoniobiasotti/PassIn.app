import { Search } from 'lucide-react'

export function AttendeeList() {
    return(
        <div>
            <div className="flex gap-3 items-center">
                <h1 className="text-2xl font-bold">Participants</h1>
                    <div className="px-3 w-72 py-1.5 border border-white/10 rounded-lg text-sm flex items-center gap-3">
                        <Search className="size-4 text-emerald-300"/>
                        <input className="bg-transparent flex-1 outline-none" placeholder="Buscar Participante..."/>
                    </div>
            </div> 
            <div className='border border-white/10 rounded-lg'>
                <table className='w-full'>
                    <thead>
                        <tr className='border-b border-white/10'>
                            <th className='py-3 px-4 text-sm font-semibold text-left '>
                                <input type='checkbox'/>
                            </th>
                            <th className='py-3 px-4 text-sm font-semibold text-left'>Código</th>
                            <th className='py-3 px-4 text-sm font-semibold text-left'>Participants</th>
                            <th className='py-3 px-4 text-sm font-semibold text-left'>Data de inscrição</th>
                            <th className='py-3 px-4 text-sm font-semibold text-left'>Data do check-in</th>
                            <th className='py-3 px-4 text-sm font-semibold text-left'></th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from({length: 8}).map((_, i) => {
                            return (
                                <tr key={i} className='border-b border-white/10'>
                                    <td className='py-3 px-4 text-sm text-zinc-300'>
                                        <input type='checkbox'/>
                                    </td>
                                    <td className='py-3 px-4 text-sm text-zinc-300'>
                                        1234
                                    </td>
                                    <td className='py-3 px-4 text-sm text-zinc-300'>
                                        <div>
                                            <span>Antônio Biasotti</span>
                                            <span>github.com/antoniobiasotti</span>
                                        </div>
                                    </td>
                                    <td className='py-3 px-4 text-sm text-zinc-300'>7 dias atrás</td>
                                    <td className='py-3 px-4 text-sm text-zinc-300'>3 dias atrás</td>
                                    <td className='py-3 px-4 text-sm text-zinc-300'></td>
                                </tr>
                            )
                        })}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td className='py-3 px-4 text-sm text-zinc-300' colSpan={3}>
                                Mostrando 228 itens
                            </td>
                            <td className='py-3 px-4 text-sm text-zinc-300 text-right' colSpan={3}>
                                Página 1 de 23
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    )
}