import { createContext, useContext, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import moment from "moment";

const SingleResortDataContext = createContext();

export default function SingleResortDataContextProvider({
  FullResortDetailsSectionLoading,
  children,
}) {
  const router = useRouter();
  const queryResortSlug = router.query.slug;
  const [readyForFetchData, setReadyForFetchData] = useState(false);
  const [checkInDate, setCheckInDate] = useState(moment());
  const [checkOutDate, setCheckOutDate] = useState(moment().add(1, "day"));

  const { data: resortData, isLoading: isResortLoading } = useSWR(
    readyForFetchData
      ? `/resorts/${queryResortSlug}?checkout=${checkOutDate.format(
          "YYYY-MM-DD"
        )}`
      : null,
    {
      revalidateOnReconnect: false,
      revalidateIfStale: false,
    }
  );

  // initial Sync url query string with state
  useEffect(() => {
    if (!router.isReady || readyForFetchData) return;

    let checkin = checkInDate;
    let checkout = checkOutDate;

    //  initial filtering and marge query string with state
    const queryCheckInDate = router.query.checkin;
    if (
      queryCheckInDate &&
      moment(queryCheckInDate).isValid() && // check if valid date given
      !moment(queryCheckInDate).isBefore(moment(), "day") //check if date is today or higher
    ) {
      checkin = moment(queryCheckInDate);
      checkout = moment(checkin).add(1, "day");
    }

    // checkout;
    const queryCheckOutDate = router.query.checkout;
    if (
      queryCheckOutDate &&
      moment(queryCheckOutDate).isValid() && // check if valid date given
      moment(queryCheckOutDate).isAfter(checkin) //check if date is  higher then checkindate
    ) {
      checkout = moment(queryCheckOutDate);
    }

    setCheckInDate(checkin);
    setCheckOutDate(checkout);
    setReadyForFetchData(true);
  }, [router.isReady, readyForFetchData]);

  // initial Sync url query string with state
  useEffect(() => {
    if (!router.isReady && !readyForFetchData) return;

    router.replace(
      {
        ...router,
        query: {
          ...router.query,
          checkin: checkInDate.format("YYYY-MM-DD"),
          checkout: checkOutDate.format("YYYY-MM-DD"),
        },
      },
      undefined,
      { shallow: true }
    );
    // eslint-disable-next-line
  }, [
    router.isReady, // this will make sure router isReady is happening on initial case
    checkInDate,
    checkOutDate,
  ]);

  return (
    <SingleResortDataContext.Provider
      value={{ resortData, checkInDate, checkOutDate }}
    >
      {!resortData ? <FullResortDetailsSectionLoading /> : children}
    </SingleResortDataContext.Provider>
  );
}

export function useSingleResortDataContext() {
  return useContext(SingleResortDataContext);
}
