import axios from "axios";

const API = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

// CRUD endpoints
export const getTasks = () => API.get("/todos?_limit=10"); // limit for demo
export const createTask = (task) => API.post("/todos", task);
export const updateTask = (id, updatedTask) => API.put(`/todos/${id}`, updatedTask);
export const deleteTask = (id) => API.delete(`/todos/${id}`);
