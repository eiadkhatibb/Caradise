import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' }); // to make HTTP requests to a server running

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});

export const fetchPost = (id) => API.get(`/posts/${id}`); //retrieves a specific post by ID
export const fetchPosts = (page) => API.get(`/posts?page=${page}`); //retrieves a list of posts
export const fetchPostsByCreator = (name) => API.get(`/posts/creator?name=${name}`); //retrieves a list of posts by the name of their creator
export const fetchPostsBySearch = (searchQuery) => API.get(`/posts/search?searchQuery=${searchQuery.type || searchQuery.search || 'none'}&tags=${searchQuery.tags}`);
//retrieves a list of posts filtered by a search query and/or tags
export const createPost = (newPost) => API.post('/posts', newPost); //creates a new post
export const likePost = (id) => API.patch(`/posts/${id}/likePost`); //adds a like to a specific post
export const comment = (value, id) => API.post(`/posts/${id}/commentPost`, { value }); //- adds a comment to a specific post
export const chat = (value, id) => API.post(`/posts/${id}/chatPost`, { value }); //adds a chat message to a specific post
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost); //updates an existing post
export const deletePost = (id) => API.delete(`/posts/${id}`); //deletes a post

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);

export const getMessages = (formData) => API.post('/post/signup', formData);
