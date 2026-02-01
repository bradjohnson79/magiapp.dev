import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  const test = await prisma.test.create({
    data: {
      name: 'Hello Prisma',
    },
  });

  const all = await prisma.test.findMany();

  return NextResponse.json({
    created: test,
    all,
  });
}