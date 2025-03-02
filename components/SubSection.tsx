import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

function SubSection() {
  return (
    <div className="flex">
      <Card className="w-1/3">
        <CardHeader>
          <CardTitle className="text-slate-400 text-lg">01.</CardTitle>
          <CardDescription className="font-bold text-black text-lg">
            Preventive Care
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Link href="/learnMore" className="flex gap-x-4 items-center">
            Learn More <ArrowRight />
          </Link>
        </CardContent>
      </Card>
      <Card className="w-1/3">
        <CardHeader>
          <CardTitle className="text-slate-400 text-lg">02.</CardTitle>
          <CardDescription className="font-bold text-black text-lg">
            Restorative Care
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Link href="/learnMore" className="flex gap-x-4 items-center">
            Learn More <ArrowRight />
          </Link>
        </CardContent>
      </Card>
      <Card className="w-1/3">
        <CardHeader>
          <CardTitle className="text-slate-400 text-lg">03.</CardTitle>
          <CardDescription className="font-bold text-black text-lg">
            Cosmetic Dentistry
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Link href="/learnMore" className="flex gap-x-4 items-center">
            Learn More <ArrowRight />
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}

export default SubSection;
