function depthSearch(tree) {
    if (tree.getLeft()) {
        tree.goLeft();
        depthSearch(tree);
    } else if (tree.getRight()) {
        tree.goRight();
        depthSearch(tree);
    } else {
        tree.getAdjacent();
        depthSearch(tree);
    }
}

function breadthFirst(tree) {
    
}