########################################################################
# Exercises 3.5 - #08
#
# A graph is said to be bipartite if all its vertices can be partitioned 
# into two disjoint subsets X and Y so that every edge connects a vertex
# in X with a vertex in Y. (One can also say that a graph is bipartite if 
# its vertices can be colored in two colors so that every edge has its 
# vertices colored in different colors; such graphs are also called 2-colorable.)
# For example, graph (i) is bipartite while graph (ii) is not.
#
#        (i)                              (ii)
#  x1 --- y1 --- x3                     a --- b
#  |      |      |                      |  /  |
#  y2 --- x2 --- y3                     c --- d
#
# a. Design a DFS-based algorithm for checking whether a graph is bipartite.
#   - While there is a next element to search AND the next element is not
#     the same color as the current element AND you haven't found what you're
#     looking for, go to the next element.
# b. Design a BFS-based algorithm for checking whether a graph is bipartite.
#   - While there are child nodes to search AND all child nodes are not the
#     same color as the current node AND you haven't found what you're looking
#     for, go to the next element.
########################################################################