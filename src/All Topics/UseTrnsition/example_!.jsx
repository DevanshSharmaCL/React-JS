import { useState, useTransition } from 'react';

function ListFilter() {
  const [query, setQuery] = useState('');
  const [filteredList, setFilteredList] = useState([]);
  const [isPending, startTransition] = useTransition();

  const bigList = Array(10000).fill('Item'); // Pretend big list

  const handleChange = (event) => {
    const value = event.target.value;
    setQuery(value); // Fast: updates input instantly

    startTransition(() => {
      // Slow: filters the list
      const filtered = bigList.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredList(filtered);
    });
  };

  return (
    <div>
      <input value={query} onChange={handleChange} placeholder="Type to filter" />
      {isPending && <p>Loading...</p>}
      <ul>
        {filteredList.slice(0, 10).map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListFilter;



// What’s Happening:
// Typing updates query right away (feels snappy).
// Filtering the huge list is wrapped in startTransition, so it doesn’t block typing.
// isPending shows “Loading…” while the filter runs.