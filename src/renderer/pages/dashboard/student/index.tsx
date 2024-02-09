import Sidebar from '@/components/sidebar';
import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/ui/data-table';

import { columns } from './columns';
import { CreateStudentModal } from './create-student-modal';
import { useEffect, useState, useReducer } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { GraduationCap } from 'lucide-react';
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

function Student() {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [students, setStudents] = useState([]);
  const [reducerValue, forceUpdate] = useReducer((x) => x + 1, 0);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/students');
        const data = await res.json();
        forceUpdate();
        setStudents(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchStudents();
  }, [reducerValue]);

  const createStudent = async (data: any) => {
    try {
      await fetch('http://localhost:5000/api/students', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      setOpen(false);
      toast({ title: 'Success', description: 'Student created successfully.' });
    } catch (err) {
      console.error(err);
      toast({
        title: 'Error',
        description: 'Failed to create student. Please try again.',
      });
    }
  };

  return (
    <div className="container">
      <div className="flex flex-row items-center justify-between py-10">
        <div className="flex flex-row justify-left space-x-5 text-3xl text-black">
          <Sidebar />
          <div className="flex flex-row">
            <GraduationCap className="h-9 w-9" />
            <div className="px-2" />
            <h1>Student</h1>
          </div>
        </div>
        <Button onClick={() => setOpen(true)} className=" bg-sky-600">
          {' '}
          <PlusCircle className="h-5 w-5" />
          <div className="px-1" />
          New
        </Button>
      </div>

      <DataTable data={students} columns={columns} searchKey="id" />

      <CreateStudentModal
        open={open}
        onSubmit={createStudent}
        onClose={() => setOpen(false)}
      />
    </div>
  );
}

export default Student;
