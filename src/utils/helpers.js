import { useRouter } from "next/router";

/**
 * Custom utility functions fro next router
 * @returns {object}
 */
export const useNavigation = () => {
  const router = useRouter();

  /**
   * Check for current page path name
   * @param {object} router - The Next Router.
   * @param {string | array} pathName - The pathname of the current page.
   * @returns {boolean} Returns true if the current page matches the given pathname.
   */
  const isPagePathName = (pathName) => {
    // Check if pathname is array
    if (Array.isArray(pathName)) {
      return pathName.includes(router.pathname);
    }
    return router.pathname == pathName;
  };

  return { isPagePathName };
};

/**
 * Conditional ClassNames
 * @param {string} condition
 * @param {string} pathName
 * @returns {boolean} Returns className if condition matches.
 */
export const setConditionalClassName = (condition, className) => {
  return condition ? className : "";
};

export const makeId = (length) => {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
};

export function bdPriceFormat(number) {
  return parseFloat(number).toLocaleString("en-IN");
}
