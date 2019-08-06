import axios from 'axios';

class CommentService {
  constructor(){
    let service = axios.create({
      baseURL: http://localhost:5000/api/comments',
      withCredentials: true,
    });
    this.service = service;
  }
}