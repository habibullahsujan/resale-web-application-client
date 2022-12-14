import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Oval } from "react-loader-spinner";
import { deleteAUser, verifySeller } from "../../../Auth/user";
import toast from "react-hot-toast";

const AllSeller = () => {
  const {
    isLoading,
    data: seller,
    refetch,
  } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("https://server-side-phi-lake.vercel.app/all-seller").then((res) => res.json()),
  });

  const handleDeleteSeller = (id) => {
    deleteAUser(id)
      .then((data) => {
        if (data.acknowledged) {
          toast.success("A seller deleted.");
          refetch();
        }
      })
      .catch((err) => toast.error(err.message));
  };

  const handleVerifyButton = (id) => {
    verifySeller(id)
      .then((data) => {
        toast.success("seller is verified now.");
        refetch();

        console.log(data);
      })
      .catch((err) => console.error(err));
    console.log(id);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Oval
          height={40}
          width={40}
          color="#4fa94d"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#4fa94d"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      </div>
    );
  }
  return (
    <div className="text-black lg:ml-64 bg-blue-400">
      <table className="min-w-full border-collapse block md:table">
        <thead className="block md:table-header-group">
          <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative">
            <th className=" p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              Photo
            </th>
            <th className=" p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              Name
            </th>
            <th className=" p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              Email
            </th>
            <th className=" p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              Action
            </th>
            <th className=" p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              Verify
            </th>
          </tr>
        </thead>
        <tbody className="block md:table-row-group">
          {seller &&
            seller.map((slr) => (
              <tr
                key={slr._id}
                className="border border-grey-500 md:border-none block md:table-row"
              >
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span className="inline-block w-1/3 md:hidden font-bold">
                    Buyer Photo
                  </span>
                  <img className="h-10 w-20" src={slr?.user_photo} alt="" />
                </td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span className="inline-block w-1/3 md:hidden font-bold">
                    Buyer Name
                  </span>
                  {slr?.user_name}
                </td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span className="inline-block w-1/3 md:hidden font-bold">
                    Buyer Email
                  </span>
                  {slr?.user_email}
                </td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span className="inline-block w-1/3 md:hidden font-bold">
                    Actions
                  </span>
                  <button
                    onClick={() => handleDeleteSeller(slr._id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded"
                  >
                    Delete
                  </button>
                </td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span className="inline-block w-1/3 md:hidden font-bold">
                    Actions
                  </span>
                  <button
                    disabled={slr?.sellerIsVerified === true}
                    onClick={() => handleVerifyButton(slr._id)}
                    className="bg-green-400 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                  >
                    {slr?.sellerIsVerified ? "Verified" : "Verify"}
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllSeller;
