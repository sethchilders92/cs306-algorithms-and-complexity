/**
 * Exercises 1.4 - #9
 * For each of the following applications, indicate the most appropriate 
 * data structure:
 * 
 * Question: Answering telephone calls in the order of their known priorities
 * Answer: A priority queue, which would sort the items in terms of
 * priority, then you would access them as a sort of modified queue which is 
 * popping out the highest priority first.
 * 
 * Question: Sending backlog orders to customers in the order they have been received
 * Answer: A queue would fit best here, acting as a FIFO data structure.
 * 
 * Question: Implementing a calculator for computing simple arithmetical expressions
 * Answer: A priority queue again, seeing as you need to implement and prioritize
 * the order of operations in the equation, then after ordering them you can pop each
 * element out in order of priority, or rather in their proper order of operations order
 */