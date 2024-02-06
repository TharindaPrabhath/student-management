'use client';

import { Row } from '@tanstack/react-table';

// Components
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { EditClassModal } from './edit-class-modal';
import { useState } from 'react';
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

  const editClass = async (data: any) => {
    try {
      await fetch(`http://localhost:5000/api/classes/${row.original.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      toast({
        title: 'Class Edited',
        description: 'Class has been edited successfully',
      });
      setOpen(false);
      // redirect('/students');
      // window.location.reload();
    } catch (err) {
      console.error(err);
      toast({ title: 'Error', description: 'Something went wrong.' });
    }
  };

  const deleteClass = async () => {
    try {
      await fetch(`http://localhost:5000/api/classes/${row.original.id}`, {
        method: 'DELETE',
      });
      toast({
        title: 'Class Deleted',
        description: 'Class has been deleted successfully',
      });
      // redirect('/students');
      window.location.reload();
    } catch (err) {
      console.error(err);
      toast({ title: 'Error', description: 'Something went wrong.' });
    }
  };

  return (
    <div className="flex flex-row items-center gap-1">
      <Button
        variant="destructive"
        className="flex h-8 w-8 p-0 data-[state=open]:bg-muted ml-auto"
        onClick={deleteClass}
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
      <EditClassModal
        id={Number(row.original.id)}
        open={open}
        onSubmit={editClass}
        onClose={() => setOpen(false)}
      />
    </div>
  );
}
