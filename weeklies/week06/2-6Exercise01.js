/****************************************************************************
 * 2.6 Exercise 6.6 - #01
 * 
 * a. Prove the equality 
 *        lcm(m, n) = m*n/gcd(m, n) 
 * that underlies the algorithm for  computing lcm(m, n)
 * 
 * Answer: See image below
 *
 * b. Euclid's algorithm is known to be in O(log n). If it is the
 * algorithm that is used for computing gcd(m, n), what is the efficiency
 * of the algorithm for computing lcm(m, n)?
 * 
 * Answer: It will be O(log n) as well, only requiring basic operations
 * on top of Euclid's algorithm, which is also O(log n).
 ****************************************************************************/
 