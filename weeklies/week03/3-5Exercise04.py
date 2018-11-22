########################################################################
# Exercises 3.5 - #04
#
# Traverse the graph of Problem 1 by breadth-first search and construct
# the corresponding breadth-first search tree. Start the traversal at 
# vertex 'a' and resolve ties by the vertex alphabetical order.
#
# Problem 1 graph:
# f --- b     c --- g
#  \   / \   /     /
#    d --- a ---- e
########################################################################
import matplotlib as plt
import networkx as nx

def main():
    # make the graph
    graph = createGraph()
    # print the graph info
    print(nx.info(graph))
    # draw and show the graph
    drawGraph(graph)
    # print out the breadth first search info
    print(list(breadthFirst(graph)))

def breadthFirst(graph):
    return nx.bfs_edges(graph, 'a')

def drawGraph(graph):
    # draw the graph
    nx.draw(graph, with_labels=True)
    # show the graph
    plt.pyplot.savefig('3-5_graph.png')

def createGraph():
    G = nx.Graph()
    G.add_nodes_from(['a', 'b', 'c', 'd', 'e', 'f', 'g'])
    G.add_edges_from([('a', 'c'), ('a', 'b'), ('a', 'e'), ('a', 'd')])
    G.add_edges_from([('d', 'f'), ('d', 'b'), ('f', 'b')])
    G.add_edges_from([('c', 'g'), ('a', 'e'), ('e', 'g')])

    return G

if __name__ == "__main__":
    main()
