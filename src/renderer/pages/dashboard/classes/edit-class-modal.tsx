import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useEffect, useState, useReducer } from 'react';

type Props = {
  id: number;
  open: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
};

export function EditClassModal({ id, open, onSubmit, onClose }: Props) {
  const [name, setName] = useState('');
  const [lectureHall, setLectureHall] = useState('');

  useEffect(() => {
    const fetchClass = async () => {
      const res = await fetch(`http://localhost:5000/api/classes/${id}`);
      const data = await res.json();

      setName(data?.name);
      setLectureHall(data?.lectureHall);
    };
    fetchClass();
  }, [id]);

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Class</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="clname" className="text-right">
              Class Name
            </Label>
            <Input
              id="classname"
              className="col-span-3"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="Lhall" className="text-right">
              Lecture Hall
            </Label>
            <Input
              id="lechall"
              className="col-span-3"
              value={lectureHall}
              onChange={(e) => setLectureHall(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="button" variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button
            className="bg-sky-600"
            type="submit"
            onClick={() => {
              onSubmit({ name, lectureHall });
            }}
          >
            Edit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
