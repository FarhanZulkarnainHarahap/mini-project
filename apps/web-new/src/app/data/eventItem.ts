// data/eventItems.ts
export interface EventItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: "Theater" | "Sports" | "Academy" | "Concert" | "Travel";
  stock: number;
  harga: number;
  location: string;
  isPaid: boolean;
  date: string;
  ticketTypes: {
    vip: number;
    regular: number;
  };
}

export const eventItems: EventItem[] = [
  {
    id: "1",
    title: "Drama Teater Hamlet",
    description: "Pertunjukan klasik Shakespeare.",
    image: "/Farhan.jpg",
    category: "Theater",
    stock: 120,
    harga: 150000,
    location: "Gedung Kesenian Jakarta",
    isPaid: true,
    date: "2025-06-01T19:00:00",
    ticketTypes: {
      vip: 250000,
      regular: 150000,
    },
  },
  {
    id: "2",
    title: "Liga Futsal 2025",
    description: "Kompetisi futsal antar kampus.",
    image: "/Farhan.jpg",
    category: "Sports",
    stock: 150,
    harga: 50000,
    location: "GOR Cempaka Putih",
    isPaid: true,
    date: "2025-06-10T15:00:00",
    ticketTypes: {
      vip: 100000,
      regular: 50000,
    },
  },
  {
    id: "3",
    title: "Workshop Frontend Dev",
    description: "Belajar React & Next.js bersama mentor profesional.",
    image: "/Farhan.jpg",
    category: "Academy",
    stock: 100,
    harga: 0,
    location: "Zoom Online",
    isPaid: false,
    date: "2025-06-15T09:00:00",
    ticketTypes: {
      vip: 0,
      regular: 0,
    },
  },
  {
    id: "4",
    title: "Konser Musik Indie",
    description: "Penampilan band lokal terbaik.",
    image: "/Farhan.jpg",
    category: "Concert",
    stock: 50,
    harga: 200000,
    location: "Lapangan D Senayan",
    isPaid: true,
    date: "2025-06-20T20:00:00",
    ticketTypes: {
      vip: 350000,
      regular: 200000,
    },
  },
  {
    id: "5",
    title: "Trip ke Raja Ampat",
    description: "Liburan seru dan snorkeling di Raja Ampat.",
    image: "/Farhan.jpg",
    category: "Travel",
    stock: 200,
    harga: 3000000,
    location: "Raja Ampat, Papua Barat",
    isPaid: true,
    date: "2025-07-01T07:00:00",
    ticketTypes: {
      vip: 5000000,
      regular: 3000000,
    },
  },
  {
    id: "6",
    title: "Festival Teater Modern",
    description: "Kolaborasi seni modern dari berbagai daerah.",
    image: "/Farhan.jpg",
    category: "Theater",
    stock: 100,
    harga: 100000,
    location: "Taman Ismail Marzuki",
    isPaid: true,
    date: "2025-07-05T18:00:00",
    ticketTypes: {
      vip: 200000,
      regular: 100000,
    },
  },
];
