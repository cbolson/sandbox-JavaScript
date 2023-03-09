/*
28. Find the Index of the First Occurrence in a String
Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, 
or -1 if needle is not part of haystack.
*/
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function (haystack, needle) {
  return haystack.indexOf(needle);
};

console.log(strStr("s2dbutsad", "sad")); // expects 0
console.log(strStr("sud", "leeto")); // expects -1
console.log(strStr("thiscarismycar", "car")); // expects 4
