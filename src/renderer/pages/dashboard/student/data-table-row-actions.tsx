'use client';

import { Row } from '@tanstack/react-table';

// Components
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useState, useReducer } from 'react';
import { EditStudentModal } from './edit-student-modal';
import { Trash } from 'lucide-react';
import { PencilLine } from 'lucide-react';

interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
}

export function DataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<any>) {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [reducerValue, forceUpdate] = useReducer((x) => x + 1, 0);

  const editStudent = async (data: any) => {
    try {
      await fetch(`http://localhost:5000/api/students/${row.original.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      toast({
        title: 'Student Edited',
        description: 'Student has been edited successfully',
      });
      setOpen(false);
      forceUpdate();
    } catch (err) {
      console.error(err);
      toast({ title: 'Error', description: 'Something went wrong.' });
    }
    [reducerValue];
  };

  const deleteStudent = async () => {
    try {
      await fetch(`http://localhost:5000/api/students/${row.original.id}`, {
        method: 'DELETE',
      });
      toast({
        title: 'Student Deleted',
        description: 'Student has been deleted successfully',
      });
      forceUpdate();
    } catch (err) {
      console.error(err);
      toast({ title: 'Error', description: 'Something went wrong.' });
    }
    [reducerValue];
  };

  return (
    <div className="flex flex-row items-center gap-1">
      <Button
        variant="destructive"
        className="flex h-8 w-8 p-0 data-[state=open]:bg-muted ml-auto"
        onClick={deleteStudent}
      >
        <Trash className="h-4 w-4" />
      </Button>
      <Button
        variant="default"
        className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
        onClick={() => setOpen(true)}
      >
        <PencilLine className="h-4 w-4" />
      </Button>
      <EditStudentModal
        id={Number(row.original.id)}
        open={open}
        onSubmit={editStudent}
        onClose={() => setOpen(false)}
      />
    </div>
  );
}
