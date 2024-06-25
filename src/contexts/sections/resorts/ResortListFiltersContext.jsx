import moment from "moment";

const { createContext, useContext, useState } = require("react");

const ResortListFiltersContext = createContext();

export default function ResortListFiltersContextProvider({ children }) {
  const [search, setSearch] = useState("");
  const [checkInCheckOut, setCheckInCheckOut] = useState({
    checkIn: moment(),
    checkOut: moment().add(1, "day"),
  });
  const [adultAndChildCount, setAdultAndChildCount] = useState({
    adult: 1,
    child: 0,
  });

  const [vromonbilashRatings, setVromonbilashRatings] = useState([]);
  const [resortRatings, setResortRatings] = useState([]);
  const [priceRange, setPriceRange] = useState({
    min: 500,
    max: 5000,
  });
  const [roomType, setRoomType] = useState("");

  return (
    <ResortListFiltersContext.Provider
      value={{
        search,
        checkInCheckOut,
        adultAndChildCount,
        setSearch,
        setCheckInCheckOut,
        setAdultAndChildCount,

        vromonbilashRatings,
        resortRatings,
        priceRange,
        roomType,
        setVromonbilashRatings,
        setResortRatings,
        setPriceRange,
        setRoomType,
      }}
    >
      {children}
    </ResortListFiltersContext.Provider>
  );
}

export function useResortListFiltersContext() {
  return useContext(ResortListFiltersContext);
}
