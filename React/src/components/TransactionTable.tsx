function TransactionTable({ transactions, handleDeleteTransaction }: any) {
  return (
    <div className="flex flex-col justify-center items-center mt-16">
    <table className="min-w-full mt-10 divide-y divide-gray-700 dark:bg-gray-800">
      <thead className="bg-gray-600 dark:bg-gray-700">
        <tr>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
          >
            Amount
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
          >
            Category
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
          >
            Description
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
          >
            Income
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
          >
            Date
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
          >
            Action
          </th>
        </tr>
      </thead>
      <tbody className="bg-gray-700 dark:bg-gray-800 divide-y divide-gray-600 dark:divide-gray-700">
        {transactions.map((tran: any) => (
          <tr key={tran.id}>
            <td className="px-6 py-4 whitespace-nowrap text-gray-200 dark:text-white">
              {tran.amount}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-gray-200 dark:text-white">
              {tran.category}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-gray-200 dark:text-white">
              {tran.description}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-gray-200 dark:text-white">
              {tran.is_income ? (
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-500 dark:bg-green-300 text-green-100 dark:text-green-800">
                  Yes
                </span>
              ) : (
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-500 dark:bg-red-300 text-red-100 dark:text-red-800">
                  No
                </span>
              )}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-gray-200 dark:text-white">
              {tran.date}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-medium">
              <button
                onClick={() => handleDeleteTransaction(tran.id)}
                className="text-red-600 hover:text-red-900"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default TransactionTable