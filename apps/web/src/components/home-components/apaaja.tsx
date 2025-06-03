const searchParams = useSearchParams();
  const router = useRouter();

  const pageParam = parseInt(searchParams.get("page") || "1");
  const limitParam = parseInt(searchParams.get("limit") || "3");
  const titleParam = searchParams.get("title") || "";

  const [page, setPage] = useState(pageParam);
  const [limit, setLimit] = useState(limitParam);
  const [title, setTitle] = useState(titleParam);
  const [events, setEvents] = useState<EventType[]>([]);
  const [debouncedTitle, setDebouncedTitle] = useState<EventType[]>([]);
  const [totalPages, setTotalPages] = useState(1);

  const goToPage = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setPage(pageNumber);

      router.replace(
        ?page=${pageNumber}&limit=${limit}&title=${debouncedTitle},
        { scroll: false }
      );
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedTitle(title);
      setPage(1); // Reset to first page when search changes
      router.replace(?page=1&limit=${limit}&title=${title}, {
        scroll: false,
      });
    }, 500); // 500ms debounce

    return () => clearTimeout(timeout);
  }, [title]);

  useEffect(() => {
    async function getAllEvents() {
      try {
        const res = await fetch(
          http://localhost:2012/api/v1/events?page=${page}&limit=${limit}&title=${debouncedTitle}
        );
        const data = await res.json();
        setEvents(data.data);
        setTotalPages(data.totalPages);
      } catch (error) {
        console.error("error fetching event", error);
      }
    }
    getAllEvents();
  }, [page, limit, debouncedTitle]);