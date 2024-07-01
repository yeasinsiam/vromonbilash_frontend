import Cookies from "js-cookie";

// Function to set a cookie with a 7-day expiration
export function setCookie(name, value, days = 7) {
  Cookies.set(name, JSON.stringify(value), { expires: days, path: "/" });
}

// Function to get a cookie by name
export function getCookie(name) {
  return Cookies.get(name) && JSON.parse(Cookies.get(name));
}

// Function to delete a cookie by name
export function deleteCookie(name) {
  Cookies.remove(name, { path: "/" });
}

// Function to extend a cookie's expiration by another 7 days
export function extendCookieExpiration(name, value, days = 7) {
  const cookieValue = getCookie(name);
  if (cookieValue) {
    setCookie(name, cookieValue, days);
  }
}
