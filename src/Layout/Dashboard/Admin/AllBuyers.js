import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import { Oval } from "react-loader-spinner";
import { deleteAUser } from "../../../Auth/user";

const AllBuyers = () => {
  const {
    isLoading,
    data: buyers,
    refetch,
  } = useQuery({
    queryKey: ["all-buyer"],
    queryFn: () =>
      fetch("https://server-side-phi-lake.vercel.app/all-buyer").then((res) => res.json()),
  });

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

  const handleDeleteBuyer = (id) => {
    deleteAUser(id)
      .then((data) => {
        if(data.acknowledged){
          toast.success('A buyer deleted.');
          refetch();
        }
      })
      .catch((err) => toast.error(err.message));
  };

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
          </tr>
        </thead>
        <tbody className="block md:table-row-group">
          {buyers &&
            buyers.map((buyer) => (
              <tr
                key={buyer._id}
                className="border border-grey-500 md:border-none block md:table-row"
              >
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span className="inline-block w-1/3 md:hidden font-bold">
                    Buyer Photo
                  </span>
                  <img className="h-10 w-20" src={buyer?.user_photo} alt="" />
                </td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span className="inline-block w-1/3 md:hidden font-bold">
                    Buyer Name
                  </span>
                  {buyer?.user_name}
                </td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span className="inline-block w-1/3 md:hidden font-bold">
                    Buyer Email
                  </span>
                  {buyer?.user_email}
                </td>

                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span className="inline-block w-1/3 md:hidden font-bold">
                    Actions
                  </span>
                  <button
                    onClick={() => handleDeleteBuyer(buyer._id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllBuyers;
