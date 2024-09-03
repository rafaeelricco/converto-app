'use client'

import { ColumnDef } from '@tanstack/react-table'

import { Checkbox } from '@/components/ui/checkbox'

import { ProgressCircle } from '@/components/ui/progress'
import { Progress } from '@/types/websocket'
import { truncate } from 'lodash'
import { DataTableColumnHeader } from './data-table-column-header'
import { DataTableRowActions } from './data-table-row-actions'

export const columns: ColumnDef<Progress>[] = [
   {
      id: 'select',
      header: ({ table }) => (
         <Checkbox
            checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && 'indeterminate')}
            onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
            aria-label="Select all"
            className="translate-y-[2px]"
         />
      ),
      cell: ({ row }) => (
         <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
            className="translate-y-[2px]"
         />
      ),
      enableSorting: false,
      enableHiding: false
   },
   {
      accessorKey: 'id',
      header: ({ column }) => <DataTableColumnHeader column={column} title="ID" />,
      cell: ({ row }) => (
         <div className="w-[80px] text-sm font-medium text-black-500">
            {truncate(String(row.getValue('id')), { length: 10 })}
         </div>
      ),
      enableSorting: false,
      enableHiding: false
   },
   {
      accessorKey: 'file_name',
      header: ({ column }) => <DataTableColumnHeader column={column} title="Nome do arquivo" />,
      cell: ({ row }) => {
         return <div className="text-sm font-medium">{row.getValue('file_name')}</div>
      }
   },
   {
      accessorKey: 'progress',
      header: ({ column }) => <DataTableColumnHeader column={column} title="Status" />,
      cell: ({ row }) => {
         return (
            <div className="flex items-center gap-2">
               <ProgressCircle progress={row.getValue('progress')} />
               <span
                  className="font-medium opacity-100 transition-opacity duration-300 ease-in-out"
                  key={row.getValue('progress')}
               >
                  {row.getValue('progress')}%
               </span>
            </div>
         )
      },
      filterFn: (row, id, value) => {
         return value.includes(row.getValue(id))
      }
   },
   {
      accessorKey: 'compression_level',
      header: ({ column }) => <DataTableColumnHeader column={column} title="Nível de compressão" />,
      cell: ({ row }) => {
         return <div className="text-sm font-medium">{row.getValue('compression_level') || 'Médio'}</div>
      },
      filterFn: (row, id, value) => {
         return value.includes(row.getValue(id))
      }
   },
   {
      id: 'actions',
      header: ({ column }) => <DataTableColumnHeader column={column} title="Ações" />,
      cell: ({ row }) => <DataTableRowActions row={row} />
   }
]
