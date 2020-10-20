import useDebounce from "@clave/use-debounce";
import React, { useEffect, useState } from "react";
import countries from "./countries";
import style from "./style.module.css";

export default function Demo() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const delayedQuery = useDebounce(query, 500);

  useEffect(() => {
    setResults(search(query));
  }, [delayedQuery]);

  return (
    <div className={style.demo}>
      <label>Search for a country</label>
      <input onChange={(e) => setQuery(e.currentTarget.value)} value={query} />
      <ul>
        {results.map((country) => (
          <li>{country}</li>
        ))}
      </ul>
    </div>
  );
}

function search(query: string) {
  if (!query) return [];

  return countries.filter((country) =>
    country.toLowerCase().includes(query.toLowerCase())
  );
}
