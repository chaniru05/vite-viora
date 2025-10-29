// api.js - Add this to your frontend src folder

const API_URL = process.env.VITE_REACT_APP_API_URL || 'http://localhost:5000/api';

export const websiteAPI = {
  // Create new website
  create: async (data) => {
    const response = await fetch(`${API_URL}/websites`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return response.json();
  },

  // Get all websites
  getAll: async () => {
    const response = await fetch(`${API_URL}/websites`);
    return response.json();
  },

  // Get single website
  getOne: async (id) => {
    const response = await fetch(`${API_URL}/websites/${id}`);
    return response.json();
  },

  // Update website
  update: async (id, data) => {
    const response = await fetch(`${API_URL}/websites/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return response.json();
  },

  // Delete website
  delete: async (id) => {
    const response = await fetch(`${API_URL}/websites/${id}`, {
      method: 'DELETE'
    });
    return response.json();
  },

  // Launch website
  launch: async (id) => {
    const response = await fetch(`${API_URL}/websites/${id}/launch`, {
      method: 'PATCH'
    });
    return response.json();
  }
};