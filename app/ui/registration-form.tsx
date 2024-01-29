'use client';

import { lusitana } from '@/app/ui/fonts';
import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from './button';
import { useFormState, useFormStatus } from 'react-dom';
import { register } from '@/app/lib/actions';
import Link from 'next/link';

export default function RegistrationForm() {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(register, initialState);
  return (
    <form action={dispatch} className="space-y-3">
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
        <h1 className={`${lusitana.className} mb-3 text-2xl`}>
          Register
        </h1>
        <div className="w-full">
            <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="name">
              Name
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="name"
                type="name"
                name="name"
                placeholder="Enter your full name"
                maxLength={100}
                required
              />
              <UserIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
              />
              <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                required
                minLength={6}
              />
              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 mt-4">
          <ReturnButton />
          <RegisterButton />
        </div>
      </div>
    </form>
  );
}

function ReturnButton() {
  const { pending } = useFormStatus();

  return (
    <Link href="/login">
        <Button aria-disabled={pending}>
            <ArrowLeftIcon className="h-5 w-5 text-gray-50" />
            Go Back
        </Button>
    </Link>
  );
}

function RegisterButton() {
    const { pending } = useFormStatus();

    return (
      <div className="w-{110} ml-auto">
        <Button type="submit" aria-disabled={pending}>
            Register <ArrowRightIcon className="h-5 w-5 text-gray-50" />
        </Button>
      </div>
    );
  }
