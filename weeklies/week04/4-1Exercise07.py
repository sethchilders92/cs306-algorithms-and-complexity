############################################################
# Exerccise 4.1 - #07
# Apply insertion sort to sort the list E, X, A, M, P, L, E
# in alphabetical order.
#
# Reference: https://www.geeksforgeeks.org/insertion-sort/
############################################################
def insertionSort(letters):
    for i in range(1, len(letters)):        # keep track of the index
        key = letters[i]                        # assign current letter to key
        j = i-1                                 # j is the last letter looked at
        while j >= 0 and key < letters[j]:      # while current letter < last letter
            letters[j+1] = letters[j]               # assign the next spot to the last letter
            j -= 1                                  # decrement j    
        letters[j+1] = key                      # assign the next value in letters to the current value
    print(letters)

insertionSort(['E', 'X', 'A', 'M', 'P', 'L', 'E'])
