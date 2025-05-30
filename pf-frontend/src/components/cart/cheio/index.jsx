import { useState } from "react";
import { ChevronUp, ChevronDown, Trash2 } from "lucide-react";

export default function Carrinho() {
  const [expandido, setExpandido] = useState(true);

  const toggleExpandido = () => {
    setExpandido(!expandido);
  };

  const produto = {
    nome: "Med Snack - Petisco para Medicamentos",
    preco: 29.99,
    imagem: "../../../../public/img/cart/recomendacoes-img/medsnack.png",
    vendedor: "Pawfect",
  };

  const quantidade = 2;
  const total = produto.preco * quantidade;

  return (
    <div className="bg-green-50 min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-2xl font-semibold mb-6">Meu carrinho</h1>

      <div className="flex w-full max-w-4xl gap-4">
        {/* Coluna esquerda: Itens */}
        <div className="flex-1 bg-green-100 rounded-lg p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold">Pawfect ({quantidade} itens)</h2>
            <button onClick={toggleExpandido}>
              {expandido ? <ChevronUp /> : <ChevronDown />}
            </button>
          </div>

          {expandido ? (
            <div className="space-y-4">
              {[...Array(quantidade)].map((_, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between border-b pb-4"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={produto.imagem}
                      alt="Produto"
                      className="w-20 h-auto"
                    />
                    <div>
                      <p className="font-semibold">{produto.nome}</p>
                      <p className="text-sm text-gray-600">
                        Vendido por {produto.vendedor}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="border px-2 rounded">- 1 +</div>
                    <p className="font-semibold">R$ {produto.preco.toFixed(2)}</p>
                    <Trash2 className="cursor-pointer text-red-500" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex items-center gap-2">
              {[...Array(quantidade)].map((_, idx) => (
                <img
                  key={idx}
                  src={produto.imagem}
                  alt="Produto"
                  className="w-12 h-auto"
                />
              ))}
              <span className="ml-auto font-semibold">R$ {total.toFixed(2)}</span>
            </div>
          )}
        </div>

        {/* Coluna direita: Resumo do pedido */}
        <div className="w-64 bg-green-100 rounded-lg p-4">
          <h2 className="font-semibold mb-2">Resumo do pedido</h2>
          <div className="text-sm space-y-1">
            <div className="flex justify-between">
              <span>Produtos ({quantidade} itens)</span>
              <span>R$ {total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Descontos</span>
              <span>R$ 0,00</span>
            </div>
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>R$ {total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Frete</span>
              <span>R$ 0,00</span>
            </div>
            <div className="flex justify-between font-semibold border-t pt-2">
              <span>Total:</span>
              <span>R$ {total.toFixed(2)}</span>
            </div>
          </div>

          <button className="w-full mt-4 bg-green-300 py-2 rounded font-semibold">
            Comprar
          </button>
          <button className="w-full mt-2 bg-green-200 py-2 rounded text-sm">
            Escolher mais produtos
          </button>
        </div>
      </div>
    </div>
  );
}
