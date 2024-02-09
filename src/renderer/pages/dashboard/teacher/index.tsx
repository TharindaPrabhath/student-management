import Sidebar from '@/components/sidebar';
import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/ui/data-table';

import { Menu } from 'lucide-react';
import { columns } from './columns';
import { CreateTeacherModal } from './create-teacher-modal';
import { useEffect, useState, useReducer } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { CircleUserRound } from 'lucide-react';
import { PlusCircle } from 'lucide-react';

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

function Teacher() {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [teachers, setTeachers] = useState([]);
  const [reducerValue, forceUpdate] = useReducer((x) => x + 1, 0);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/teachers');
        const data = await res.json();
        forceUpdate();
        setTeachers(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchTeachers();
  }, [reducerValue]);

  const createTeacher = async (data: any) => {
    try {
      await fetch('http://localhost:5000/api/teachers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      setOpen(false);
      toast({ title: 'Success', description: 'Teacher created successfully' });
    } catch (err) {
      console.error(err);
      toast({ title: 'Error', description: 'Failed to create teacher' });
    }
  };

  return (
    <div className="container">
      <div className="flex flex-row items-center justify-between py-10">
        <div className="flex flex-row justify-left space-x-5 text-3xl text-black">
          <Sidebar />
          <div className="flex flex-row">
            <CircleUserRound className="h-9 w-9" />
            <div className="px-2" />
            <h1>Teacher</h1>
          </div>
        </div>
        <Button onClick={() => setOpen(true)} className="bg-sky-600">
          {' '}
          <PlusCircle className="h-5 w-5" />
          <div className="px-1" />
          New
        </Button>
      </div>

      <DataTable data={teachers} columns={columns} searchKey="id" />

      <CreateTeacherModal
        open={open}
        onSubmit={createTeacher}
        onClose={() => setOpen(false)}
      />
    </div>
  );
}

export default Teacher;
