import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { neon } from '@netlify/neon';
console.log('neon',neon);
// const sql = neon(); // automatically uses env NETLIFY_DATABASE_URL
// console.log('sql',sql);
// const [post] = await sql`SELECT * FROM posts WHERE id = ${postId}`;

createApp(App).mount('#app')
