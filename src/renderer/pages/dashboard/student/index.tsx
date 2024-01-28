import Sidebar from '@/components/sidebar';
import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/ui/data-table';

import { Menu } from 'lucide-react';
import { columns } from './columns';
import { CreateStudentModal } from './create-student-modal';
import { useState } from 'react';

const data = [
  {
    id: '1',
    firstName: 'Nguyen',
    lastName: 'Van A',
    birthday: '01/01/1990',
    phone: '0123456789',
    address: 'Hanoi',
  },
  {
    id: '2',
    firstName: 'aaa',
    lastName: 'Van A',
    birthday: '01/01/1990',
    phone: '0123456789',
    address: 'Hanoi',
  },
  {
    id: '3',
    firstName: 'cc',
    lastName: 'Van A',
    birthday: '01/01/1990',
    phone: '0123456789',
    address: 'Hanoi',
  },
  {
    id: '4',
    firstName: 'Ngttbuyen',
    lastName: 'Van A',
    birthday: '01/01/1990',
    phone: '0123456789',
    address: 'Hanoi',
  },
];

function Student() {
  const [open, setOpen] = useState(false);

  return (
    <div className="container">
      <div className="flex flex-row items-center justify-between py-10">
        <div className="flex flex-row justify-left space-x-5 text-3xl text-black">
          <Sidebar />
          <h1>Student</h1>
        </div>
        <Button onClick={() => setOpen(true)}>New</Button>
      </div>

      <DataTable data={data} columns={columns} searchKey="id" />

      <CreateStudentModal
        open={open}
        onSubmit={() => {
          //
        }}
        onClose={() => setOpen(false)}
      />
    </div>
  );
}

export default Student;
