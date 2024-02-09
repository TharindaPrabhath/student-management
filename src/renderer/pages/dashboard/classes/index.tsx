import Sidebar from '@/components/sidebar';
import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/ui/data-table';

import { columns } from './columns';
import { CreateClassModal } from './create-class-modal';
import { useEffect, useState, useReducer } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { Microscope } from 'lucide-react';
import { PlusCircle } from 'lucide-react';

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
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [classes, setClasses] = useState([]);
  const [reducerValue, forceUpdate] = useReducer((x) => x + 1, 0);

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/classes');
        const data = await res.json();
        forceUpdate();
        setClasses(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchClasses();
  }, [reducerValue]);

  const createClass = async (data: any) => {
    try {
      await fetch('http://localhost:5000/api/classes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      setOpen(false);
      toast({ title: 'Success', description: 'Class created successfully' });
    } catch (err) {
      console.error(err);
      toast({ title: 'Error', description: 'Failed to create class' });
    }
  };

  return (
    <div className="container">
      <div className="flex flex-row items-center justify-between py-10">
        <div className="flex flex-row justify-left space-x-5 text-3xl text-black">
          <Sidebar />
          <div className="flex flex-row">
            <Microscope className="h-9 w-9" />
            <div className="px-2" />
            <h1>Class</h1>
          </div>
        </div>
        <Button onClick={() => setOpen(true)} className=" bg-sky-600">
          {' '}
          <PlusCircle className="h-5 w-5" />
          <div className="px-1" />
          New
        </Button>
      </div>

      <DataTable data={classes} columns={columns} searchKey="classcode" />

      <CreateClassModal
        open={open}
        onSubmit={createClass}
        onClose={() => setOpen(false)}
      />
    </div>
  );
}

export default Class;
