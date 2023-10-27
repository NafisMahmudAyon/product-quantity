import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";

function A() {
	const [combinedData, setCombinedData] = useState({});
	const [data, setData] = useState({});
	const [combinedPantData, setCombinedPantData] = useState({});

	useEffect(() => {
		// Assuming you are loading JSON data from three files asynchronously
		const loadData = async () => {
			try {
				const response1 = await fetch("./asif.json");
				const data1 = await response1.json();
				setData(data1);

				const response2 = await fetch("./mahin.json");
				const data2 = await response2.json();

				const response3 = await fetch("./zubaer.json");
				const data3 = await response3.json();

				// Combine the quantity data from the three files
				const combinedData = combineData([data1, data2, data3]);
				const combinedPantData = combinePantData([data1, data2, data3]);

				setCombinedData(combinedData);
				setCombinedPantData(combinedPantData);
			} catch (error) {
				console.error("Error loading data:", error);
			}
		};

		loadData();
	}, []);

	// Function to combine the quantity data for tshirts
	const combineData = (dataList) => {
		const combinedData = {};

		dataList.forEach((data, index) => {
			for (const category in data.productDetails) {
				if (category !== "update" && category !== "pant") {
					if (!combinedData[category]) {
						combinedData[category] = {};
					}

					data.productDetails[category].forEach((product) => {
						const productId = product.id;

						if (!combinedData[category][productId]) {
							combinedData[category][productId] = {
								M: 0,
								L: 0,
								XL: 0,
							};
						}

						product.sizeAndQuantity.forEach((sizeData) => {
							combinedData[category][productId][sizeData.size] +=
								sizeData.quantity;
						});
					});
				}
			}
		});

		return combinedData;
	};

	// Function to combine the quantity data for pants
	const combinePantData = (dataList) => {
		const combinedData = {};

		dataList.forEach((data, index) => {
			for (const category in data.productDetails) {
				if (category !== "update" && category !== "tshirt") {
					if (!combinedData[category]) {
						combinedData[category] = {};
					}

					data.productDetails[category].forEach((product) => {
						const productId = product.id;

						if (!combinedData[category][productId]) {
							combinedData[category][productId] = {
								28: 0,
								30: 0,
								32: 0,
								34: 0,
								36: 0,
								38: 0,
							};
						}

						product.sizeAndQuantity.forEach((sizeData) => {
							combinedData[category][productId][sizeData.size] +=
								sizeData.quantity;
						});
					});
				}
			}
		});

		return combinedData;
	};
	console.log(data);
	return (
		<div>
			<Navbar title="Product Stock" />
			<h2 className="text-2xl text-center font-semibold my-8">
				T-Shirt Products -{/* ({productData?.productDetails.update}) */}
			</h2>
			{Object.keys(combinedData).map((category) => (
				<div key={category}>
					{/* <h3>{category}</h3> */}
					<table className="w-full mx-auto shadow-lg rounded-lg">
						<thead>
							<tr>
								<th className="border text-left px-4 py-2">Product ID</th>
								<th className="border text-left px-4 py-2 text-center ">
									Size M
								</th>
								<th className="border text-left px-4 py-2 text-center ">
									Size L
								</th>
								<th className="border text-left px-4 py-2 text-center ">
									Size XL
								</th>
							</tr>
						</thead>
						<tbody>
							{Object.keys(combinedData[category]).map((productId, index) => (
								<tr key={productId}>
									<td className="border px-4 py-2">
										{data.productDetails.tshirt[index].productName}
									</td>
									<td className="border px-4 py-2 text-center ">
										{combinedData[category][productId]["M"]}
									</td>
									<td className="border px-4 py-2 text-center ">
										{combinedData[category][productId]["L"]}
									</td>
									<td className="border px-4 py-2 text-center ">
										{combinedData[category][productId]["XL"]}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			))}
			<h2 className="text-2xl text-center font-semibold my-8">
				Pant Products -{/* ({productData?.productDetails.update}) */}
			</h2>
			{Object.keys(combinedPantData).map((category) => (
				<div key={category}>
					{/* <h3>{category}</h3> */}
					<table className="w-full mx-auto shadow-lg rounded-lg">
						<thead>
							<tr>
								<th className="border text-left px-4 py-2">Product Name</th>
								<th className="border text-left px-4 py-2 text-center ">
									Size 28
								</th>
								<th className="border text-left px-4 py-2 text-center ">
									Size 30
								</th>
								<th className="border text-left px-4 py-2 text-center ">
									Size 32
								</th>
								<th className="border text-left px-4 py-2 text-center ">
									Size 34
								</th>
								<th className="border text-left px-4 py-2 text-center ">
									Size 36
								</th>
								<th className="border text-left px-4 py-2 text-center ">
									Size 38
								</th>
							</tr>
						</thead>
						<tbody>
							{Object.keys(combinedPantData[category]).map(
								(productId, index) => (
									<tr key={productId}>
										<td className="border px-4 py-2">
											{data.productDetails.pant[index].productName}
										</td>
										<td className="border px-4 py-2 text-center ">
											{combinedPantData[category][productId]["28"]}
										</td>
										<td className="border px-4 py-2 text-center ">
											{combinedPantData[category][productId]["30"]}
										</td>
										<td className="border px-4 py-2 text-center ">
											{combinedPantData[category][productId]["32"]}
										</td>
										<td className="border px-4 py-2 text-center ">
											{combinedPantData[category][productId]["34"]}
										</td>
										<td className="border px-4 py-2 text-center ">
											{combinedPantData[category][productId]["36"]}
										</td>
										<td className="border px-4 py-2 text-center ">
											{combinedPantData[category][productId]["38"]}
										</td>
									</tr>
								)
							)}
						</tbody>
					</table>
				</div>
			))}
		</div>
	);
}

export default A;

