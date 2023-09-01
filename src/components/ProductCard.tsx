import type { IProduct } from "../types"
import { useState } from 'preact/hooks'

interface ProductCardProps {
	product: IProduct
}


export default function ProductCard({ product }: ProductCardProps) {

	const [details, setDetails] = useState(false)
	const toggle = () => setDetails((prev) => !prev)

	return (

		<li className="border rounded mb-2 p-3 w-[300px] h-fit">
			<h2 className="text-lg">{product.title}</h2>
			<span className="block">{product.id}</span>
			<a className="block p-3 bg-yellow-400 text-white w-[150px]" href={`/product/${product.id}`}> Open product</a>
			<span className="font-bold">{product.price}</span>
			<img className="w-[200px] mb-2" src={product.image} alt="" />
			<button onClick={toggle} className="border py-2 px-4 bg-yellow-400 text-white">
				Description
			</button>
			{details && <p>{product.description}</p>}
		</li>

	)
}
