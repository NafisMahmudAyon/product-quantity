import React, { useState, useEffect }  from "react";
import productData from "./details.json";
import Asif from "./Asif";
import Mahin from "./Mahin";
import Zubaer from "./Zubaer";
import Navbar from "./Navbar";


function A() {
  const [combinedData, setCombinedData] = useState({
    tshirt: [],
    pant: [],
  });

  useEffect(() => {
    // Load the data from the three files
    const fetchData = async () => {
      try {
        const [file1Data, file2Data, file3Data] = await Promise.all([
          fetch("./asif.json").then((response) => response.json()),
          fetch("./mahin.json").then((response) => response.json()),
          fetch("./zubaer.json").then((response) => response.json()),
        ]);
	      console.log(response.json());

        // Combine the data and calculate the total quantity
        const combinedTshirts = combineAndCalculateQuantity(
          file1Data.productDetails.tshirt,
          file2Data.productDetails.tshirt,
          file3Data.productDetails.tshirt
        );

        const combinedPants = combineAndCalculateQuantity(
          file1Data.productDetails.pant,
          file2Data.productDetails.pant,
          file3Data.productDetails.pant
        );

        setCombinedData({
          tshirt: combinedTshirts,
          pant: combinedPants,
        });
      } catch (error) {
        console.error("Error loading data:", error);
      }
    };

    fetchData();
  }, []);

  // Helper function to combine and calculate total quantity
  const combineAndCalculateQuantity = (data1, data2, data3) => {
    return data1.map((product, index) => {
      return {
        ...product,
        sizeAndQuantity: product.sizeAndQuantity.map((sizeData, sizeIndex) => {
          const totalQuantity =
            sizeData.size in data2[index].sizeAndQuantity
              ? sizeData.quantity + data2[index].sizeAndQuantity[sizeData.size].quantity
              : sizeData.quantity;
          totalQuantity =
            sizeData.size in data3[index].sizeAndQuantity
              ? totalQuantity + data3[index].sizeAndQuantity[sizeData.size].quantity
              : totalQuantity;

          return {
            size: sizeData.size,
            quantity: totalQuantity,
          };
        }),
      };
    });
  };

  return (
    <div>
      <h2>T-Shirt Table</h2>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Size and Quantity</th>
          </tr>
        </thead>
        <tbody>
          {combinedData.tshirt.map((product, index) => (
            <tr key={index}>
              <td>{product.productName}</td>
              <td>
                <ul>
                  {product.sizeAndQuantity.map((sizeData, sizeIndex) => (
                    <li key={sizeIndex}>
                      {sizeData.size}: {sizeData.quantity}
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Pant Table</h2>
      <table>
        {/* Render the combined pant data in a similar manner */}
      </table>
    </div>
  );
}

export default A;
