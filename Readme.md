# Pathfinding Analysis Engine & Visualizer (PWA)

## 📌 Overview
An advanced algorithmic engine designed to visualize and benchmark search heuristics in a 2D grid environment. This Progressive Web App (PWA) evaluates the efficiency of informed and uninformed search strategies, providing a comparative analysis of path optimality and exploration density.

<img width="100%" src="/public/Visual-Search_Demo.gif"/>

## 🧠 Implemented Algorithms
The engine provides a deep dive into several graph traversal strategies:
* **Informed Search**: A*, IDA* (Iterative Deepening A*), Greedy Best-First Search.
* **Uninformed Search**: Dijkstra’s (Uniform Cost), BFS, DFS, Iterative Deepening.
* **Heuristics**: Manhatten, Euclidean, and Chebyshev distance implementations for cost estimation.

## 🏗 Engineering Highlights
* **High-Performance Rendering**: Optimized DOM manipulation and CSS transitions to maintain 60FPS during large-scale grid traversals (up to 2500+ nodes).
* **Progressive Web App (PWA)**: Engineered with Service Workers for 100% offline functionality and rapid "Add to Home Screen" capability.
* **State Management**: Implemented a robust state machine to handle real-time algorithm interruptions, speed adjustments, and grid resets.

## 📈 Algorithmic Performance Metrics
* **Search Optimality**: Compares the shortest path found by Dijkstra/A* against suboptimal Greedy approaches.
* **Exploration Density**: Visualizes the number of nodes visited ($O(V+E)$) to demonstrate the efficiency of $h(n)$ heuristics.
* **Latency**: Real-time visualization adjustments with sub-10ms logic updates.

## 🛠 Tech Stack
* **Frontend**: Vanilla JavaScript (ES6+), HTML5, CSS3 (Neumorphic UI).
* **Tooling**: Vite (Build System), ESLint (Code Quality).
* **Deployment**: Vercel/PWA standards.

## 🚀 Installation & Setup
1. `git clone https://github.com/Yeshwanth-kr/pathfinding-visualizer-pwa.git`
2. `npm install`
3. `npm run dev`

---
**Author**: Yeshwanth Krishna<br>
**Focus**: Algorithms, Data Structures & Performance Optimization