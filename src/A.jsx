import React from "react";
import productData from "./details.json";
import Navbar from "./Navbar";

const A = () => {
	return (
		<div className="">
			<Navbar title="Product Stock" />
			<h2 className="text-2xl text-center font-semibold my-8">
				T-Shirt Products - ({productData?.productDetails.update})
			</h2>

			<table className="w-full mx-auto shadow-lg rounded-lg">
				<thead>
					<tr>
						<th className="border text-left px-4 py-2">Product Name</th>
						<th className="border text-left px-4 py-2">Size (M)</th>
						<th className="border text-left px-4 py-2">Size (L)</th>
						<th className="border text-left px-4 py-2">Size (XL)</th>
					</tr>
				</thead>
				<tbody>
					{productData?.productDetails.tshirt.map((product) => (
						<tr key={product.id}>
							<td className="border px-4 py-2">{product.productName}</td>
							{product.sizeAndQuantity.map((sizeQty) => (
								<td key={sizeQty.size} className="border px-4 py-2">
									{sizeQty.quantity > 0 ? sizeQty.quantity : "Out of stock"}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>

			<h2 className="text-2xl text-center font-semibold my-8">
				Pant Products - ({productData?.productDetails.update})
			</h2>
			<table className="w-full mx-auto shadow-lg rounded-lg">
				<thead>
					<tr>
						<th className="border text-left px-4 py-2">Product Name</th>
						<th className="border text-left px-4 py-2">Size (28)</th>
						<th className="border text-left px-4 py-2">Size (30)</th>
						<th className="border text-left px-4 py-2">Size (32)</th>
						<th className="border text-left px-4 py-2">Size (34)</th>
						<th className="border text-left px-4 py-2">Size (36)</th>
						<th className="border text-left px-4 py-2">Size (38)</th>
					</tr>
				</thead>
				<tbody>
					{productData.productDetails.pant.map((product) => (
						<tr key={product.id}>
							<td className="border px-4 py-2">{product.productName}</td>
							{product.sizeAndQuantity.map((sizeQty) => (
								<td key={sizeQty.size} className="border px-4 py-2">
									{sizeQty.quantity > 0 ? sizeQty.quantity : "Out of stock"}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default A;
