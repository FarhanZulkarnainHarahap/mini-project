"use client";
import EventTable from "@/components/adminPagecomponent/EventTable";
// import UserTable from "@/components/adminPagecomponent/UserTable";
// import TransactionTable from "@/components/adminPagecomponent/TransactionTable";

export default function AdminPage() {
  return (
    <div className="pt-28 px-6">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>
      <div>
        <EventTable />
      </div>
    </div>
  );
}
