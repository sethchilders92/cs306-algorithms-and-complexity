/**
 * Exercises 1.3 - #2
 * Name the algorithms for the searching problem that you already
 * know. Give a good succinct description of each algorithm in English.
 * If you know no such algorithms, use this opportunity to design one.
 * 
 * Algorithm: Binary Search
 * Description: A tree search through a sorted set of elements that starts in
 * the middle of the set, and uses a comparison between the desired 
 * element and the current middle element, and moves on to either the lower half
 * or the higher half of the ordered set, depending on the result of the 
 * comparison against the middle element and the desired element.
 * 
 * Algorithm: Linear Search
 * Description: Start at the beginning or the end of an array. Compare
 * the desired element with the current element. If they match, return 
 * the current index of the array. If they do not match, move to the next
 * element in the array by incrementing the index by one.
 * 
 * Algorithm: Exponential Search
 * Description: Split the sorted array into exponentially sized groups, starting
 * with size 1, then size 2, 4, 8, etc. As you go and create these sub-arrays,
 * compare their last element with the desired element. If the value is greater
 * than the desired element, then use that sub-array. At this point, perform a
 * binary search on this sub-array.
 */