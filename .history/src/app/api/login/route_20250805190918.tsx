import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';
import { cookies } from 'next/headers';

const prisma = new PrismaClient();

export async function POST(request: Request) {
    const { email, password } = await request.json();

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
        return NextResponse.json({ error: 'Usuário não encontrado.' }, { status: 401 });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        return NextResponse.json({ error: 'Senha incorreta.' }, { status: 401 });
    }

    // Salvar ID do usuário no cookie
    const cookieStore = await cookies();
    cookieStore.set('userId', user.id, {
        httpOnly: true,
        secure: true,
        sameSite: 'lax',
        maxAge: 60 * 60 * 24, // 1 dia
        path: '/',
    });

    return NextResponse.json({ message: 'Login bem-sucedido!', user: { id: user.id, name: user.name, email: user.email } });
}
