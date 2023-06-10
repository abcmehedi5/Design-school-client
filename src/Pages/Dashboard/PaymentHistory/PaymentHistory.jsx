import React, { useContext } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useQuery } from "react-query";

const PaymentHistory = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const { data: paymentHistory = [], isLoading } = useQuery({
    queryKey: ["paymentHistory", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/paymentHistory?email=${user?.email}`);
      return res.data;
    },
  });
  return (
    <>
      {paymentHistory.length <= 0 ? (
        <h3 className="min-h-screen hero text-4xl">
          Sorry, you have no payment history
        </h3>
      ) : (
        <div className="container mx-auto">
          <h1 className="uppercase text-2xl text-center mt-5 mb-5 font-bold">
            Payment History
          </h1>
          {isLoading ? (
            <h4 className="text-center text-2xl">Loading....</h4>
          ) : (
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium">
                      Class Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium">
                      Transaction Id
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium">
                      Amount
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-gray-50 divide-y divide-gray-200">
                  {paymentHistory.map((payment) => (
                    <tr key={payment._id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {payment.classesName.map((cls) => (
                            <li>{cls}</li>
                          ))}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {new Date(payment.date).toLocaleDateString("en-GB")}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {payment.transactionId}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          ${payment.price}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            payment.status === "service pending"
                              ? "bg-green-500 text-green-900"
                              : "bg-red-500 text-red-900"
                          }`}
                        >
                          success
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default PaymentHistory;
