# Pathfinding Analysis Engine & Visualizer (PWA)

## 📌 Overview
An advanced algorithmic engine designed to visualize and benchmark search heuristics in a 2D grid environment. This project is a demonstration of High-Performance Engineering coupled with a Modern DevOps Lifecycle, featuring automated security auditing and zero-downtime deployment.

<img width="100%" src="/public/Visual-Search_Demo.gif"/>

## 🏗 Engineering & DevOps Architecture
This repository implements a "Shift-Left" philosophy, ensuring code quality and security are verified before every merge.
* **CI/CD Pipeline**: Multi-stage GitHub Actions pipeline featuring automated Linting, Security Scanning, and Vercel Production Deployments.
* **Security Orchestration**: Integrated **Trivy** vulnerability scanning for containerized environments and **Lighthouse CI** for automated performance auditing.
* **Quality Gates**: Strict Branch Protection rules requiring passing status checks (ESLint v10 & Trivy) for all Pull Requests.
* **Containerization**: Production-ready `Dockerfile` using multi-stage builds on **Node 22-Alpine** for minimal footprint and maximum security.
* **High-Performance Rendering**: Optimized DOM manipulation and CSS transitions to maintain 60FPS during large-scale grid traversals (up to 2500+ nodes).
* **Progressive Web App (PWA)**: Engineered with Service Workers for 100% offline functionality and rapid "Add to Home Screen" capability.
* **State Management**: Implemented a robust state machine to handle real-time algorithm interruptions, speed adjustments, and grid resets.

## 🧠 Implemented Algorithms
The engine provides a deep dive into several graph traversal strategies:
* **Informed Search**: A*, IDA* (Iterative Deepening A*), Greedy Best-First Search.
* **Uninformed Search**: Dijkstra’s (Uniform Cost), BFS, DFS, Iterative Deepening.
* **Heuristics**: Manhatten, Euclidean, and Chebyshev distance implementations for cost estimation.

## 📈 Algorithmic Performance Metrics
* **Search Optimality**: Compares the shortest path found by Dijkstra/A* against suboptimal Greedy approaches.
* **Exploration Density**: Visualizes the number of nodes visited ($O(V+E)$) to demonstrate the efficiency of $h(n)$ heuristics.
* **Latency**: Real-time visualization adjustments with sub-10ms logic updates.
* **Lighthouse Standards**: Optimized to maintain >90 scores in Performance, Accessibility, and PWA.
* **Deterministic Builds**: Environment-locked dependencies via `package-lock.json` and Node 22 LTS pinning.

## 🛠 Tech Stack
* **Core**: Vanilla JavaScript (ES6+), CSS3 (Neumorphic UI).
* **Build System**: **Vite 6** (Next-generation frontend tooling).
* **DevOps**: GitHub Actions, Docker, Trivy, Dependabot.
* **Code Quality**: **ESLint v10** (Flat Config System).
* **Deployment**: Vercel (Edge Network).

## 🚀 Installation & Setup
Local Environment
1. `git clone https://github.com/Yeshwanth-kr/pathfinding-visualizer-pwa.git`
2. `npm install`
3. `npm run dev`

Quality Assurance
* **Linting**: `npm run lint` (ESLint v10 verification).
* **Security**: Runs automatically via GitHub Actions on every push.
* **Build**: `npm run build` (Vite production optimization).

---
**Author**: [Yeshwanth Krishna](http://yeshwanth.online)<br>
**Role**: Software Developer | **Focus**: DevOps, Algorithmic Efficiency & Security Orchestration
