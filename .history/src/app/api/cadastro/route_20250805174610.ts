import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
    const { name, email, password } = await request.json();

    if (!name || !email || !password) {
        return NextResponse.json({ error: 'Todos os campos são obrigatórios.' }, { status: 400 });
    }

    const userExists = await prisma.user.findUnique({ where: { email } });

    if (userExists) {
        return NextResponse.json({ error: 'Email já cadastrado.' }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
        data: {
            name,
            email,
            password: hashedPassword,
        },
    });

    return NextResponse.json({ message: 'Usuário criado com sucesso!', user: { id: newUser.id, name: newUser.name, email: newUser.email } });
}
