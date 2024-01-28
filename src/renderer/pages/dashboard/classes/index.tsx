import Sidebar from '@/components/sidebar';
import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/ui/data-table';

import { Menu } from 'lucide-react';
import { columns } from './columns';
import { CreateClassModal } from './create-class-modal';
import { useState } from 'react';

const data = [
  {
    classcode: 'ce01',
    className: 'civil',
    teacher: 'abc',
    lecturehall: 'LT01',
  },
  {
    classcode: 'ce02',
    className: 'chem',
    teacher: 'abc1',
    lecturehall: 'LT02',
  },
  {
    classcode: 'ce03',
    className: 'math',
    teacher: 'abc2',
    lecturehall: 'LT03',
  },
  {
    classcode: 'ce04',
    className: 'sci',
    teacher: 'abc3',
    lecturehall: 'LT04',
  },
];

function Class() {
  const [open, setOpen] = useState(false);

  return (
    <div className="container">
      <div className="flex flex-row items-center justify-between py-10">
        <div className="flex flex-row justify-left space-x-5 text-3xl text-black">
          <Sidebar />
          <h1>Class</h1>
        </div>
        <Button onClick={() => setOpen(true)}>New</Button>
      </div>

      <DataTable data={data} columns={columns} searchKey="classcode" />

      <CreateClassModal
        open={open}
        onSubmit={() => {
          //
        }}
        onClose={() => setOpen(false)}
      />
    </div>
  );
}

export default Class;
