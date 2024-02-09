'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail } from 'lucide-react';
import { LockKeyhole } from 'lucide-react';

// const ADMIN_EMAIL = 'sample@email.com';
// const ADMIN_PASSWORD = 'qwerty';

export function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [reducerValue, forceUpdate] = useReducer((x) => x + 1, 0);

  const signIn = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      if (response?.status === 200) {
        navigate('/students');
      } else {
        alert('Invalid email or password');
        setEmail('');
        setPassword('');
        forceUpdate();
      }

      //navigate('/students');
      // if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      //   navigate('/students');
      // } else {
      //   alert('Invalid email or password');
      // }
    } catch (err) {
      console.error(err);
      alert('Invalid email or password');
      setEmail('');
      setPassword('');
      forceUpdate();
    }
    [reducerValue];
  };
  return (
    <div className="h-screen flex justify-center items-center">
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center">Admin Sign In</CardTitle>
          <CardDescription>
            Enter your email below to sign in to your admin account.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
          </div>
          <div className="grid gap-2">
            <div className="flex flex-row">
              <Mail className="h-4 w-4" />
              <div className="px-1" />
              <Label htmlFor="email">Email</Label>
            </div>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <div className="flex flex-row">
              <LockKeyhole className="h-4 w-4" />
              <div className="px-1" />
              <Label htmlFor="password">Password</Label>
            </div>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button
            className="w-full  bg-sky-600"
            onClick={(e) => {
              e.preventDefault();
              signIn();
            }}
          >
            Sign In
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
