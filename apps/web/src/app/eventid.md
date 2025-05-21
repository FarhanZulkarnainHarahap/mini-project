import { useEffect, useState } from "react";

export default function EventsPage() {
const [events, setEvents] = useState([]);
useEffect(() => {
async function getAllEvent() {
try {
const res = await fetch("http://localhost:8000/api/v1/event", {
method: "GET",
headers: {
"Content-Type": "application/json",
},

          // Jika backend kamu support body di GET
          // body: JSON.stringify({ someFilter: "value" }), // opsional
        });

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        setEvents(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    }
    getAllEvent();

}, []);

return <div></div>;
}
