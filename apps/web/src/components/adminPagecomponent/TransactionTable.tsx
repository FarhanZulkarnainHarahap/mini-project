"use client";
const transactions = [
  {
    id: "txn1",
    user: "John Doe",
    event: "Konser Musik Indie",
    total: 150000,
    status: "Paid",
  },
  {
    id: "txn2",
    user: "Jane Smith",
    event: "Liga Futsal 2025",
    total: 100000,
    status: "Unpaid",
  },
];

export default function TransactionTable() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Transaction History</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2">User</th>
            <th className="border px-4 py-2">Event</th>
            <th className="border px-4 py-2">Total</th>
            <th className="border px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((txn) => (
            <tr key={txn.id}>
              <td className="border px-4 py-2">{txn.user}</td>
              <td className="border px-4 py-2">{txn.event}</td>
              <td className="border px-4 py-2">
                Rp {txn.total.toLocaleString()}
              </td>
              <td className="border px-4 py-2">{txn.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
