import { ColumnDef } from '@tanstack/react-table';
import { DataTableRowActions } from './data-table-row-actions';

type Class = {
  code: string;
  name: string;
  teacherId: string;
  lectureHall: string;
};

export const columns: ColumnDef<Class>[] = [
  // {
  //   accessorKey: 'code',
  //   header: 'Class Code',
  //   cell: ({ row }) => <div className="capitalize">{row.getValue('code')}</div>,
  // },
  {
    accessorKey: 'name',
    header: 'Class Name',
    cell: ({ row }) => <div className="capitalize">{row.getValue('name')}</div>,
  },
  {
    accessorKey: 'teacherId',
    header: 'Teacher',
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue('teacherId')}</div>
    ),
  },
  {
    accessorKey: 'lectureHall',
    header: 'Lecture Hall',
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue('lectureHall')}</div>
    ),
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },

  // {
  //   id: "actions",
  //   enableHiding: false,
  //   cell: ({ row }) => {
  //     const payment = row.original

  //     return (
  //       <DropdownMenu>
  //         <DropdownMenuTrigger asChild>
  //           <Button variant="ghost" className="h-8 w-8 p-0">
  //             <span className="sr-only">Open menu</span>
  //             <MoreHorizontal className="h-4 w-4" />
  //           </Button>
  //         </DropdownMenuTrigger>
  //         <DropdownMenuContent align="end">
  //           <DropdownMenuLabel>Actions</DropdownMenuLabel>
  //           <DropdownMenuItem
  //             onClick={() => navigator.clipboard.writeText(payment.id)}
  //           >
  //             Copy payment ID
  //           </DropdownMenuItem>
  //           <DropdownMenuSeparator />
  //           <DropdownMenuItem>View customer</DropdownMenuItem>
  //           <DropdownMenuItem>View payment details</DropdownMenuItem>
  //         </DropdownMenuContent>
  //       </DropdownMenu>
  //     )
  //   },
  // },
];
