/**
 * Exercises 1.4 - #2
 * If you have to solve the searching problem for a list of n numbers,
 * how can you take advantage of the fact that the list is known to be
 * sorted? Give separate answers for
 * a. lists represented as arrays.
 * b. lists represented as linked lists.
 * 
 * Arrays: If you know if an array is sorted or not, you can determine which
 * search algorithm would be the most efficient based on the array length. Some
 * algorithms require the list to be sorted, some do not. It will also allow
 * you to determine if sorting it would be more efficient or not, in order to
 * reduce the number of memory accesses.
 * 
 * Linked Lists: Knowing if a linked list is sorted or not does not help, seeing
 * as linked lists must be searched linearly, or rather in order one by one. But
 * if it is a doubly linked list, then you would be able to determine which end
 * to start searching from.
 */