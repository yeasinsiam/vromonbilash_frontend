import axios from "@/utils/axios";
import { createContext, useContext, useState } from "react";
import { useSingleResortDataContext } from "./SingleResortDataContext";
import { getCookie, setCookie } from "@/utils/cookie";

const SingleResortCheckoutDataContext = createContext();

export default function SingleResortCheckoutDataContextProvider({ children }) {
  const [showSelectRoomsModal, setShowSelectRoomsModal] = useState("");
  const [selectedCategoriesCheckoutData, setSelectedCategoriesCheckoutData] =
    useState([]);
  // [
  //   {
  //     categorySlug: "string",
  //     rooms: [
  //       {
  //         id: "number",
  //         adult: "string",
  //         child: "string",
  //         roomType: "A|N|B",
  //       },
  //     ],
  //   },
  // ];

  const { resortData, checkInDate, checkOutDate } =
    useSingleResortDataContext();

  // const addCategoryToCheckoutData = () => {

  // }

  const handleHttpGetCheckoutData = (roomData, roomCheckoutData) => {
    const newSelectedCategoriesCheckoutData = [
      ...selectedCategoriesCheckoutData.filter(
        (data) => data.categorySlug != roomData.slug
      ),
      {
        categorySlug: roomData.slug,
        rooms: roomCheckoutData.map((data) => ({
          id: data.id,
          adult: data.adult,
          child: data.child,
          roomType: data.roomType,
        })),
      },
    ];

    setSelectedCategoriesCheckoutData(newSelectedCategoriesCheckoutData);

    // axios
    //   .post("/resort/checkout/", {
    //     resort: resortData.slug,
    //     checkin: checkInDate.format("YYYY-MM-DD"),
    //     checkout: checkOutDate.format("YYYY-MM-DD"),
    //     room_categories: [
    //       {
    //         slug: roomData.slug,
    //         rooms: roomCheckoutData.map((data) => ({
    //           room_type: data.roomType,
    //           adult: data.adult,
    //           child: data.child,
    //         })),
    //       },
    //     ],
    //   })
    //   .then((response) => {
    //     console.log(response.data);
    //   })
    //   .catch((error) => {
    //     console.error(error); // Handle errors
    //   });
  };

  const handleProcessToCheckout = () => {
    if (selectedCategoriesCheckoutData.length)
      setCookie("resort-checkout-credentials", {
        resortSlug: resortData.slug,
        checkInDate: checkInDate.format("YYYY-MM-DD"),
        checkOutDate: checkOutDate.format("YYYY-MM-DD"),
        selectedCategories: selectedCategoriesCheckoutData,
      });
  };

  return (
    <SingleResortCheckoutDataContext.Provider
      value={{
        showSelectRoomsModal,
        setShowSelectRoomsModal,
        handleHttpGetCheckoutData,
        handleProcessToCheckout,
      }}
    >
      {children}
      {/* <button
        onClick={() => console.log(getCookie("resort-checkout-credentials"))}
      >
        get cookie
      </button> */}
    </SingleResortCheckoutDataContext.Provider>
  );
}

export function useSingleResortCheckoutDataContext() {
  return useContext(SingleResortCheckoutDataContext);
}
