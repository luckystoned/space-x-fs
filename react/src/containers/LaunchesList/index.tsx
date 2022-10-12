// @ts-nocheck
import { useEffect, useContext, useState } from "react";
import { AuthContext } from "contexts/AuthContext";
import { ModeContext } from "contexts/ModeContext";
import { Launch } from "types";
import { LaunchCard, Search, Pagination, CARDS_PER_PAGE } from "components";
import { getLaunches } from "../../api";
import "./index.scss";

export const LaunchesList = () => {
  const { token } = useContext(AuthContext);
  const [launches, setLaunches] = useState<Launch[]>([]);
  const [filteredLaunches, setFilteredLaunches] = useState<Launch[]>([]);
  const [searchText, setSearchText] = useState<string>("");
  const { showAll } = useContext(ModeContext);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const filterLaunches = () => {
    setCurrentPage(1);
    // 3
    return setFilteredLaunches(launches.filter(
        (launch: Launch) => (showAll || launch.favorite) && (!searchText || launch.mission_name.toLowerCase().includes(searchText.toLowerCase()))
      )
    );
  };

  const toggleFavorite = (flightNumber: number) => {
    setLaunches(launches.map((launch) => {
        if (launch.flight_number === flightNumber) {
          launch.favorite = !launch.favorite;
        }
        return launch;
      })
    );
  };

  const loadLaunches = async () => {
    try {
      const launches = await getLaunches(token);
      setLaunches(launches);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadLaunches();
  }, []);

  useEffect(filterLaunches, [searchText, showAll, launches]);

  return (
    <div className="launches-list-container">
      <Search value={searchText} onChange={setSearchText} />
      <div className="launches-list">
        {filteredLaunches
          .filter(
            (_: Launch, i: number) =>
              i >= CARDS_PER_PAGE * (currentPage - 1) &&
              i < CARDS_PER_PAGE * currentPage
          )
          .map((launch, i) => (
            <LaunchCard
              key={launch.flight_number}
              launch={launch}
              updateFavorite={() => toggleFavorite(launch.flight_number)}
            />
          ))}
      </div>
      <Pagination
        value={currentPage}
        onChange={setCurrentPage}
        itemsCount={filteredLaunches.length}
      />
    </div>
  );
};
