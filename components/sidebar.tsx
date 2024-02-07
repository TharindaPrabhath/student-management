import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from './ui/button';
import { GraduationCapIcon, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';

function Sidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu className="w-6 h-6 " />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="bg-black-100">
        <SheetHeader>
          <SheetTitle className="text-white">Navigation Menu</SheetTitle>
        </SheetHeader>

        <div className="flex flex-col text-white">
          {Tabs.map((tab) => (
            <Link
              key={tab.label}
              to={tab.path}
              className="py-4 px-4 text-lg font-semibold hover:bg-slate-800 hover:border-l-4 "
            >
              {tab.label}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default Sidebar;

const Tabs = [
  {
    label: 'Student',
    path: '/students',
  },
  {
    label: 'Teacher',
    path: '/teachers',
  },
  {
    label: 'Class',
    path: '/classes',
  },
];
