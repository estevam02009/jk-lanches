export default function Cadastro() {
    return (
        <section>
            <h2 className="text-2xl font-bold mb-4 text-orange-600">Cadastro</h2>
            <form className="flex flex-col gap-4 max-w-sm">
                <input type="text" placeholder="Nome" className="p-2 border rounded" />
                <input type="email" placeholder="Email" className="p-2 border rounded" />
                <input type="password" placeholder="Senha" className="p-2 border rounded" />
                <button className="bg-orange-500 text-white py-2 px-4 rounded">Cadastrar</button>
            </form>
        </section>
    );
}