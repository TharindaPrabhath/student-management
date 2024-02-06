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
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ADMIN_EMAIL = 'sample@email.com';
const ADMIN_PASSWORD = 'qwerty';

export function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = async () => {
    try {
      if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
        navigate('/students');
      } else {
        alert('Invalid email or password');
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="h-screen flex justify-center items-center">
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Admin SignIn</CardTitle>
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
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={signIn}>
            Sign In
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
