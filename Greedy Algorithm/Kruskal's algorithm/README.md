## Kruskal's algorithm

Kruskal's algorithm is a greedy algorithm that works as follows −

1. It Creates a set of all edges in the graph.

2. While the above set is not empty and not all vertices are covered, 
   - It removes the minimum weight edge from this set
   - It checks if this edge is forming a cycle or just connecting 2 trees. If it forms a cycle, we discard this edge, else we add it to our tree.
3. When the above processing is complete, we have a minimum spanning tree.


```
KRUSKAL(G):
A = ∅
For each vertex v ∈ G.V:
    MAKE-SET(v)
For each edge (u, v) ∈ G.E ordered by increasing order by weight(u, v):
    if FIND-SET(u) ≠ FIND-SET(v):       
    A = A ∪ {(u, v)}
    UNION(u, v)
return A
```
