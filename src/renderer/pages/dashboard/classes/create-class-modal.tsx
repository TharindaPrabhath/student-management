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
import { useReducer, useState } from 'react';

type Props = {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
};

export function CreateClassModal({ open, onSubmit, onClose }: Props) {
  const [code, setCode] = useState('');
  const [name, setName] = useState('');
  const [lectureHall, setLectureHall] = useState('');
  const [teacherId, setTeacherId] = useState('');

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Classes</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="clcode" className="text-right">
              Class Code
            </Label>
            <Input
              id="classcode"
              className="col-span-3"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
          </div>
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
            <Label htmlFor="tname" className="text-right">
              Teacher
            </Label>
            <Input
              id="teachern"
              className="col-span-3"
              value={teacherId}
              onChange={(e) => setTeacherId(e.target.value)}
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
              onSubmit({ code, name, lectureHall, teacherId });
            }}
          >
            Create
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
