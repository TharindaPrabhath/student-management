import { ColumnDef } from '@tanstack/react-table';

type Teacher = {
  id: string;
  firstName: string;
  lastName: string;
  birthday: string;
  phone: string;
  address: string;
};

export const columns: ColumnDef<Teacher>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
    cell: ({ row }) => <div className="capitalize">{row.getValue('id')}</div>,
  },
  {
    accessorKey: 'firstName',
    header: 'First Name',
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue('firstName')}</div>
    ),
  },
  {
    accessorKey: 'lastName',
    header: 'Last Name',
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue('lastName')}</div>
    ),
  },
  {
    accessorKey: 'birthday',
    header: 'Birthday',
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue('birthday')}</div>
    ),
  },
  {
    accessorKey: 'phone',
    header: 'Phone',
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue('phone')}</div>
    ),
  },
  {
    accessorKey: 'address',
    header: 'Address',
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue('address')}</div>
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
