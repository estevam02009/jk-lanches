import Image from 'next/image';

const produtos = [
    {
        id: 1,
        nome: 'X-Burger Clássico',
        descricao: 'Pão brioche, hambúrguer 150g, queijo prato, alface, tomate, maionese da casa.',
        preco: 19.90,
        imagem: '/lanches/xburger.jpg',
    },
    {
        id: 2,
        nome: 'X-Bacon Explosivo',
        descricao: 'Pão tradicional, hambúrguer 180g, queijo cheddar, bacon crocante, molho especial.',
        preco: 24.90,
        imagem: '/lanches/xbacon.jpg',
    },
    {
        id: 3,
        nome: 'Frango Crispy',
        descricao: 'Pão australiano, filé de frango empanado, alface americana, maionese temperada.',
        preco: 21.50,
        imagem: '/lanches/frango.jpg',
    },
];

const numeroWhatsApp = '5584991121003';

export default function Produtos() {
    return (
        <section>
            <h2 className="text-3xl font-bold mb-6 text-orange-600">Cardápio de Lanches</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {produtos.map((produto) => {
                    const mensagem = encodeURIComponent(
                        `Olá! Gostaria de pedir o lanche: *${produto.nome}*.\nIngredientes: ${produto.descricao}\nPreço: R$ ${produto.preco.toFixed(2)}`
                    );
                    const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagem}`;

                    return (
                        <div key={produto.id} className="border rounded-lg shadow hover:shadow-lg transition">
                            <Image
                                src={produto.imagem}
                                alt={produto.nome}
                                width={400}
                                height={300}
                                className="rounded-t-lg w-full h-64 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-bold text-orange-700">{produto.nome}</h3>
                                <p className="text-sm text-gray-600 mt-1">{produto.descricao}</p>
                                <p className="mt-2 font-semibold">R$ {produto.preco.toFixed(2)}</p>
                                <a
                                    href={linkWhatsApp}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block mt-3 text-center bg-green-500 text-white py-2 rounded hover:bg-green-600"
                                >
                                    Pedir no WhatsApp
                                </a>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
