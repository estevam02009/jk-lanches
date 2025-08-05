import Image from "next/image"

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
]

const numeroWhatsApp = '5584991151003'

export default function Produtos() {
    return (
        <section>
            <h2>Produtos</h2>
            <h2 className="text-2xl font-bold text-orange-600">Cardápio</h2>
            <p>Em breve lista de Produtos</p>
        </section>
    )
}