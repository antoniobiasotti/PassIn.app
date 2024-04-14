import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, MoreHorizontal, Search} from 'lucide-react'
import { IconButton } from '../components/icon-button';
import { Table } from './table/table';
import { TableHeader } from './table/table-header';
import { TableCell } from './table/table-cell';
import { TableRow } from './table/table-row';
import { ChangeEvent, useState } from 'react';

export function AttendeeList() {
    const [search, setSearch] = useState('')

    function onSearchInputChanged(event: ChangeEvent<HTMLInputElement>) {
        setSearch(event.target.value)
    }

    return (
        <div className='flex flex-col gap-4'> 
            <div className="flex gap-3 items-center">
                <h1 className="text-2xl font-bold">Participants</h1>
                    <div className="px-3 w-72 py-1.5 border border-white/10 rounded-lg text-sm flex items-center gap-3">
                        <Search className="size-4 text-emerald-300"/>
                        <input onChange={onSearchInputChanged} className="bg-transparent flex-1 outline-none" placeholder="Buscar Participante..."/>
                    </div>

                    {search}
            </div> 
                <Table>
                    <thead>
                        <tr className='border-b border-white/10'>
                            <TableHeader style={{ width: 48 }}>
                                <input type='checkbox' className='size-4 bg-black/20 rounded-md border border-white/10  checked:bg-orange-400'/>
                            </TableHeader>
                            <TableHeader>Código</TableHeader>
                            <TableHeader>Participants</TableHeader>
                            <TableHeader>Data de inscrição</TableHeader>
                            <TableHeader>Data do check-in</TableHeader>
                            <TableHeader style={{ width: 64 }}></TableHeader>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from({length: 8}).map((_, i) => {
                            return (
                                <TableRow key={i}>
                                    <TableCell>
                                        <input type='checkbox' className='size-4 bg-black/20 rounded-lg border border-white/10 checked:bg-orange-400'/>
                                    </TableCell>
                                    <TableCell>
                                        1234
                                    </TableCell>
                                    <TableCell>
                                        <div className='flex flex-col gap-1'>
                                            <span className='font-semibold text-white'>Antônio Biasotti</span>
                                            <span>github.com/antoniobiasotti</span>
                                        </div>
                                    </TableCell>
                                    <TableCell>7 dias atrás</TableCell>
                                    <TableCell>3 dias atrás</TableCell>
                                    <TableCell>
                                        <IconButton transparent>
                                            <MoreHorizontal className='size-4' />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                    </tbody>
                    <tfoot>
                        <tr>
                            <TableCell colSpan={3}>
                                Mostrando 228 itens
                            </TableCell>
                            <td className='py-3 px-4 text-sm text-zinc-300 text-right' colSpan={3}>
                                <div className='inline-flex items-center gap-8'>
                                    <span>Página 1 de 23</span>
                                
                                    <div className='flex gap-1.5'>
                                        <IconButton>
                                            <ChevronsLeft className='size-4' />
                                        </IconButton>
                                        <IconButton>
                                            <ChevronLeft className='size-4' />
                                        </IconButton>
                                        <IconButton>
                                            <ChevronRight className='size-4' />
                                        </IconButton>
                                        <IconButton>
                                            <ChevronsRight className='size-4' />
                                        </IconButton>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tfoot>
                </Table>
        </div>
    )
}