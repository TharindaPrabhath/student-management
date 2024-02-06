import Sidebar from '@/components/sidebar';
import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/ui/data-table';

import { columns } from './columns';
import { CreateStudentModal } from './create-student-modal';
import { useEffect, useState } from 'react';
import { useToast } from '@/components/ui/use-toast';

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

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/students');
        const data = await res.json();
        setStudents(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchStudents();
  }, []);

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
      // redirect('/students');
      window.location.href = '/students';
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
          <h1>Student</h1>
        </div>
        <Button onClick={() => setOpen(true)}>New</Button>
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
