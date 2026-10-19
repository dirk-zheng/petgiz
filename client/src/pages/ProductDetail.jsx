import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Check, Factory, FileCheck2, PackageCheck } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { categoryNames } from '../data/products';
import { productSlug } from '../data/seoContent';

export default function ProductDetail(){
  const {slug}=useParams();
  const {state}=useStore();
  const p=state.products.find(x=>productSlug(x)===slug);
  if(!p)return <div className="min-h-screen pt-40 text-center"><h1 className="text-3xl font-bold">Petgiz essential not found</h1><Link to="/products" className="mt-4 inline-block text-[#a8694d]">Explore the collection</Link></div>;
  const specs=Array.isArray(p.specs)?p.specs:[];
  return <div className="min-h-screen bg-[#fbf8f2] pt-24"><main className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
    <Link to="/products" className="mb-7 inline-flex items-center gap-2 text-sm font-semibold text-[#526158]"><ArrowLeft size={16}/> Back to the collection</Link>
    <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
      <div className="overflow-hidden rounded-[2.25rem] bg-[#eee9e0]"><img src={p.image} alt={p.name} className="aspect-[3/4] w-full object-cover"/></div>
      <section className="lg:py-4">
        <p className="text-sm font-bold uppercase tracking-[.2em] text-[#a8694d]">{categoryNames[p.category]} · Petgiz essential</p>
        <h1 className="mt-3 font-heading text-4xl font-bold text-[#273b30] sm:text-5xl">{p.name}</h1>
        <p className="mt-6 text-lg leading-8 text-[#56635c]">{p.description}</p>
        <div className="mt-7 grid grid-cols-2 gap-3">
          {[['Size / format',p.sizes||'See product details'],['Colorway',p.wash||'Everyday colors'],['Designed for',categoryNames[p.category]],['Product help','Ask us anytime']].map(([label,value])=><div key={label} className="rounded-2xl bg-white p-4"><span className="text-xs uppercase tracking-wider text-[#657068]">{label}</span><strong className="mt-1 block">{value}</strong></div>)}
        </div>
        <div className="mt-7 rounded-2xl bg-[#eee9df] p-5"><h2 className="font-semibold">A comfortable fit matters</h2><p className="mt-2 text-sm leading-6 text-[#657068]">Check the product dimensions against your pet's measurements and leave room for comfortable movement. For carriers, confirm both the size and weight guidance before use.</p></div>
        <div className="mt-7 grid gap-3 sm:grid-cols-2"><Link to={`/contact?product=${encodeURIComponent(p.name)}`} className="flex items-center justify-center rounded-full bg-[#344b3a] px-5 py-4 font-semibold text-white hover:bg-[#26392d]">Ask about this product</Link><Link to="/faq" className="flex items-center justify-center rounded-full border border-[#344b3a]/20 px-5 py-4 font-semibold text-[#344b3a]">Product &amp; sizing help</Link></div>
        <div className="mt-8"><h2 className="font-heading text-2xl font-bold">Product details</h2><ul className="mt-4 space-y-3">{specs.map(s=><li key={s} className="flex gap-3 text-[#56635c]"><Check className="mt-1 shrink-0 text-[#a8694d]" size={16}/>{s}</li>)}</ul>{p.applications&&<p className="mt-5 rounded-2xl bg-[#efe8dc] p-5 text-sm leading-6"><strong>Good to know:</strong> {p.applications}</p>}</div>
        <div className="mt-7 grid gap-3 border-y border-[#344b3a]/10 py-6 sm:grid-cols-3"><span className="flex items-center gap-2 text-xs"><Factory size={17}/> Thoughtful details</span><span className="flex items-center gap-2 text-xs"><FileCheck2 size={17}/> Fit guidance</span><span className="flex items-center gap-2 text-xs"><PackageCheck size={17}/> Ready for everyday</span></div>
      </section>
    </div>
  </main></div>;
}
