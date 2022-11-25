


export const uploadNewProductData = async (product) => {
  const url = "http://localhost:5000/product";
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(product),
  });
  const data = await response.json();
  return data;
};

export const getSellerUploadedProduct=async(email)=>{
    const url=`http://localhost:5000/products?email=${email}`;
    const response=await fetch(url);
    const data=await response.json();
    return data;
}