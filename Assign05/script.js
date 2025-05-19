const graph = {};

function addNode() {
  const val = parseInt(document.getElementById("nodeInput").value);
  if (!isNaN(val) && !(val in graph)) {
    graph[val] = [];
    document.getElementById("nodeInput").value = "";
    showOutput(`✅ Node ${val} added.`);
  } else {
    showOutput("⚠️ Invalid or duplicate node.");
  }
}

function addEdge() {
  const from = parseInt(document.getElementById("fromNode").value);
  const to = parseInt(document.getElementById("toNode").value);
  if (graph[from] && graph[to]) {
    graph[from].push(to);
    graph[to].push(from); // undirected graph
    document.getElementById("fromNode").value = "";
    document.getElementById("toNode").value = "";
    showOutput(`🔗 Edge added between ${from} and ${to}`);
  } else {
    showOutput("⚠️ One or both nodes do not exist.");
  }
}

function traverseGraph() {
  if (Object.keys(graph).length === 0) {
    showOutput("⚠️ Graph is empty. Add nodes first.");
    return;
  }

  // Start from the smallest node key
  const nodes = Object.keys(graph).map(Number).sort((a, b) => a - b);
  const start = nodes[0];

  const bfsTraversal = bfsFull(start);
  const dfsTraversal = dfsFull(start);

  showOutput(
    `🔵 BFS Traversal: ${bfsTraversal.join(" → ")}\n🟣 DFS Traversal: ${dfsTraversal.join(" → ")}`
  );
}

function bfsFull(start) {
  const visited = new Set();
  const queue = [start];
  const order = [];

  while (queue.length > 0) {
    const node = queue.shift();
    if (!visited.has(node)) {
      visited.add(node);
      order.push(node);
      for (const neighbor of graph[node]) {
        if (!visited.has(neighbor)) {
          queue.push(neighbor);
        }
      }
    }
  }
  return order;
}

function dfsFull(start) {
  const visited = new Set();
  const stack = [start];
  const order = [];

  while (stack.length > 0) {
    const node = stack.pop();
    if (!visited.has(node)) {
      visited.add(node);
      order.push(node);
      // Push neighbors in reverse order to match typical DFS order
      for (let i = graph[node].length - 1; i >= 0; i--) {
        const neighbor = graph[node][i];
        if (!visited.has(neighbor)) {
          stack.push(neighbor);
        }
      }
    }
  }
  return order;
}

function showOutput(msg) {
  document.getElementById("outputBox").innerText = msg;
}
