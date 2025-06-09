let str = ``;
console.log(JSON.stringify(str));

import { neon } from '@netlify/neon';
const sql = neon(); // automatically uses env NETLIFY_DATABASE_URL
console.log('sql',sql);
// const [post] = await sql`SELECT * FROM posts WHERE id = ${postId}`;