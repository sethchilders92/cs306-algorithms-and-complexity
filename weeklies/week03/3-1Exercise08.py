############################################################################
# Exercises 3.1 - #08
# 
# Sort the list E, X, A, M, P, L, E in alphabetical order by selection sort
############################################################################
import sys

# Got help from https://www.geeksforgeeks.org/selection-sort/
def selectionSort(unsorted):
    for i in range(len(unsorted)):
        nextIndex = i
        for j in range(i+1, len(unsorted)):
            if unsorted[nextIndex] > unsorted[j]:
                nextIndex = j

        unsorted[i], unsorted[nextIndex] = unsorted[nextIndex], unsorted[i]

    print("Sorted array")
    for i in range(len(unsorted)):
        print("{}".format(unsorted[i] ))

unsorted = ['E', 'X', 'A', 'M', 'P', 'L', 'E']
selectionSort(unsorted)