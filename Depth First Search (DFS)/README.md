## DFS
Depth first Search or Depth first traversal is a recursive algorithm for searching all the vertices of a graph or tree data structure. Traversal means visiting all the nodes of a graph

### Depth First Search Algorithm
A standard DFS implementation puts each vertex of the graph into one of two categories:

Visited
 1. Not Visited
 2. The purpose of the algorithm is to mark each vertex as visited while avoiding cycles.

The DFS algorithm works as follows:
 1. Start by putting any one of the graph's vertices on top of a stack.
 2. Take the top item of the stack and add it to the visited list.
 3. Create a list of that vertex's adjacent nodes. Add the ones which aren't in the visited list to the top of the stack.
 4. Keep repeating steps 2 and 3 until the stack is empty.
   
   
### DFS Pseudocode (recursive implementation)
```
DFS(G, u)
    u.visited = true
    for each v ∈ G.Adj[u]
        if v.visited == false
            DFS(G,v)
     
init() {
    For each u ∈ G
        u.visited = false
     For each u ∈ G
       DFS(G, u)
}
```

### Application of DFS Algorithm
- For finding the path
- To test if the graph is bipartite
- For finding the strongly connected components of a graph
- For detecting cycles in a graph




