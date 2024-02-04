import { ColumnDef } from '@tanstack/react-table';

type Class = {
  classcode: string;
  className: string;
  teacher: string;
  lecturehall: string;
};

export const columns: ColumnDef<Class>[] = [
  {
    accessorKey: 'classcode',
    header: 'Class Code',
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue('classcode')}</div>
    ),
  },
  {
    accessorKey: 'className',
    header: 'Class Name',
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue('className')}</div>
    ),
  },
  {
    accessorKey: 'teacher',
    header: 'Teacher',
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue('teacher')}</div>
    ),
  },
  {
    accessorKey: 'lecturehall',
    header: 'Lecture Hall',
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue('lecturehall')}</div>
    ),
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
