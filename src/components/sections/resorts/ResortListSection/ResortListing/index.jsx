import React, { Suspense, useEffect, useState } from "react";
import ResortListItem, { ResortListItemLoading } from "../ResortListItem";
import useSWRInfinite from "swr/infinite";
import dynamic from "next/dynamic";
import ErrorBoundary from "@/components/ErrorBoundary";
import { useInView } from "react-intersection-observer";
import { useResortListFiltersContext } from "@/contexts/sections/resorts/ResortListFiltersContext";

function ResortListingComponent() {}

function ResortListing({ type = "list" }) {
  const [perPage, setPerPage] = useState(2);

  const {
    search,
    checkInCheckOut,
    adultAndChildCount,
    priceRange,
    vromonbilashRatings,
    resortRatings,
    roomType,
  } = useResortListFiltersContext();

  const {
    data: resortData,
    isLoading,
    size,
    error,
    setSize,
  } = useSWRInfinite(
    (pageIndex, previousPageData) => {
      if (previousPageData && !previousPageData.next) return null;
      pageIndex++;
      return `/resorts?page=${pageIndex}&page_size=${perPage}&start-price=${
        priceRange.min
      }&end-price=${priceRange.max}&vromonbilash-rating=${
        vromonbilashRatings.length ? vromonbilashRatings.toString() : ""
      }&resort-rating=${
        resortRatings.length ? resortRatings.toString() : ""
      }&search=${search}&checkin=${checkInCheckOut.checkIn.format(
        "YYYY-M-D"
      )}&checkout=${checkInCheckOut.checkOut.format("YYYY-M-D")}&adult=${
        adultAndChildCount.adult
      }&children=${adultAndChildCount.child}&room-type=${
        !roomType ? "A,N,B" : roomType + ",B"
      }`;
    },
    {
      revalidateFirstPage: false,
      revalidateOnMount: true,
      revalidateOnFocus: false,
      fallbackData: [{ count: 0, next: null, results: [] }],
    }
  );

  const resorts = resortData.flatMap((resortData) => resortData.results);
  const isReachesEnd = !resortData[resortData.length - 1].next;
  const isLoadMoreLoading =
    resortData && typeof resortData[size - 1] == "undefined";
  // const isResortsLoading = isLoading && !isLoadMoreLoading;

  const {
    ref: inViewPortRef,
    inView,
    entry,
  } = useInView({
    /* Optional options */
    threshold: 0,
  });

  useEffect(() => {
    if (inView && !isReachesEnd && !isLoadMoreLoading) {
      setSize((size) => size + 1);
    }
  }, [inView]);

  if (error) return <></>;
  if (isLoading) return <ResortListingComponentLoading />;

  return (
    <div className="col-lg-8 col-xl-9">
      {resorts.map((resort) => (
        <ResortListItem key={resort.slug} view="list" resort={resort} />
      ))}
      {isLoadMoreLoading && <ResortListingLoading />}
      <div ref={inViewPortRef}></div>
    </div>
  );
}

function ResortListingLoading({ type = "list" }) {
  return (
    <>
      <ResortListItemLoading view="list" />
      <ResortListItemLoading view="list" />
      <ResortListItemLoading view="list" />
    </>
  );
}

function ResortListingComponentLoading({ type = "list" }) {
  return (
    <div className="col-lg-8 col-xl-9">
      <ResortListingLoading />
    </div>
  );
}

// function ResortListing({ type = "list" }) {
//   return (
//     <ErrorBoundary fallback={<></>}>
//       <Suspense fallback={<ResortListingLoading type={type} />}>
//         <ResortListingComponent type={type} />
//       </Suspense>
//     </ErrorBoundary>
//   );
// }

export default dynamic(
  () => {
    return Promise.resolve(ResortListing);
  },
  {
    ssr: false,
    loading: () => {
      return <ResortListingComponentLoading />;
    },
  }
);
