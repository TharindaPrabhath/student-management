import Sidebar from '@/components/sidebar';
import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/ui/data-table';

import { useEffect, useState } from 'react';
import { useToast } from '@/components/ui/use-toast';

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

function User() {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/users');
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchUsers();
  }, []);

  const createUser = async (data: any) => {
    try {
      await fetch('http://localhost:5000/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      setOpen(false);
      toast({ title: 'Success', description: 'User created successfully' });
    } catch (err) {
      console.error(err);
      toast({ title: 'Error', description: 'Failed to create user' });
    }
  };

  return (
    <div className="container">
      <div className="flex flex-row items-center justify-between py-10">
        <div className="flex flex-row justify-left space-x-5 text-3xl text-black">
          <Sidebar />
          <h1>User</h1>
        </div>
        <Button onClick={() => setOpen(true)}>New</Button>
      </div>

      <DataTable data={users} columns={columns} searchKey="classcode" />

      <CreateUserModal
        open={open}
        onSubmit={createUser}
        onClose={() => setOpen(false)}
      />
    </div>
  );
}

export default User;
