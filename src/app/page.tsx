"use client";

import { AdvocateTable } from "@/components/advocatetable";
import { PageGroup } from "@/components/pagegroup";
import { Input } from "@/components/ui/input";
import { useCallback, useEffect, useState } from "react";
import { debounce } from "throttle-debounce";

export default function Home() {
  const [advocates, setAdvocates] = useState([]);
  const [searchTerm, setSearchTerm] = useState(undefined);
  const [page, setPage] = useState(0);
  const limit = 10;

  useEffect(() => {
    fetch(getApiUrl()).then((response) => {
      response.json().then((jsonResponse) => {
        setAdvocates(jsonResponse.data);
      });
    });
  }, [searchTerm, page]);

  const getApiUrl = () => {
    if (searchTerm) {
      return `/api/advocates?searchterm=${searchTerm}&page=${page}`;
    }

    return `/api/advocates?page=${page}`;
  };

  const debounceChange = useCallback(
    debounce(600, (val) => setSearchTerm(val)),
    []
  );

  return (
    <main style={{ margin: "24px" }}>
      <div className="flex flex-col gap-7">
        <div className="flex flex-row align-bottom">
          <h1 className="basis-2/3">Solace Advocates</h1>
          <Input
            className="basis-1/3"
            onChange={(e) => debounceChange(e.target.value)}
            type="search"
            placeholder="Search"
          />
        </div>
        <div className="flex flex-row">
          <AdvocateTable
            columns={[
              "First Name",
              "Last Name",
              "City",
              "Degree",
              "Specialties",
              "Years of Experience",
              "Phone Number",
            ]}
            data={advocates}
          />
        </div>
        <PageGroup
          page={page}
          limit={limit}
          recordsDisplay={advocates.length}
          onClick={setPage}
        />
      </div>
    </main>
  );
}
