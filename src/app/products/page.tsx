"use client";

const products = [
  {
    image: "https://via.placeholder.com/120x120?text=Product+1",
    name: "Smart CRM",
    desc: "A powerful CRM platform to manage your customers and sales pipeline efficiently.",
  },
  {
    image: "https://via.placeholder.com/120x120?text=Product+2",
    name: "Analytics Suite",
    desc: "Advanced analytics dashboard for actionable business insights.",
  },
  {
    image: "https://via.placeholder.com/120x120?text=Product+3",
    name: "Team Chat",
    desc: "A secure, real-time messaging app for seamless team collaboration.",
  },
];

export default function ProductsPage() {
  return (
    <main className="min-h-[70vh] bg-neutral-950 text-white px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-4 text-center">Our Products</h1>
        <p className="text-neutral-300 text-center mb-12 max-w-xl mx-auto">
          Explore our suite of innovative products designed to boost your business productivity.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <div key={idx} className="bg-neutral-900 rounded-2xl p-8 flex flex-col items-center shadow hover:shadow-lg transition">
              <img src={product.image} alt={product.name} className="w-24 h-24 rounded-xl mb-4 object-cover bg-neutral-800" />
              <h2 className="text-xl font-bold mb-2">{product.name}</h2>
              <p className="text-neutral-400 text-center">{product.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
} 