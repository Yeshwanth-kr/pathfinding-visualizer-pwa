# Technical Specifications: Pathfinding Analysis Engine

## 1. Objective
To build a tool that benchmarks the efficiency of various graph search algorithms. The focus is on demonstrating the trade-offs between **completeness**, **optimality**, and **time complexity**.

## 2. Algorithm Deep Dive

### A* and IDA* Implementation
* **Heuristic Choice**: Implemented Manhattan distance as the default $h(n)$ for 4-directional movement to satisfy the **Admissibility** criterion (ensuring the algorithm never overestimates the cost to the goal).
* **Memory Optimization**: IDA* was implemented to reduce the space complexity of A* from $O(b^d)$ to $O(d)$, where $d$ is the depth of the solution, by using a depth-first search approach with a cost threshold.

### Priority Queue Management
* **Data Structure**: Utilized a Min-Priority Queue for Dijkstra and A* to ensure the node with the lowest $f(n) = g(n) + h(n)$ is always processed next, maintaining $O(\log V)$ insertion and extraction.

## 3. Engineering Challenges

### Challenge: Efficient Grid Rendering
* **Problem**: Re-rendering a 50x50 grid during rapid search exploration caused significant layout thrashing.
* **Solution**: Decoupled the algorithm logic from the UI. The algorithm calculates the "Visited" sequence first, and a throttled "Animation Engine" updates the DOM in batches to maintain 60FPS.

## 4. Complexity Analysis Table
| Algorithm | Time Complexity | Space Complexity | Optimal? |
| :--- | :--- | :--- | :--- |
| BFS | $O(V + E)$ | $O(V)$ | Yes (Unweighted) |
| Dijkstra | $O((V+E) \log V)$ | $O(V)$ | Yes |
| A* | $O(E)$ (Heuristic dependent) | $O(V)$ | Yes (If admissible) |
| IDA* | $O(b^d)$ | $O(d)$ | Yes |