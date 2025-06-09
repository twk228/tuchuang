import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { neon } from '@netlify/neon';
const sql = neon('postgresql://kedouzhihuiDB_owner:npg_tHU2FgQCOIA5@ep-shy-sunset-a8hk884g-pooler.eastus2.azure.neon.tech/kedouzhihuiDB?sslmode=require'); // automatically uses env NETLIFY_DATABASE_URL
// await sql`INSERT INTO public.classify_list (name, icon) VALUES ('React', '');`;
// await sql`DELETE FROM public.classify_list WHERE NAME = 'React';`;
const classifyList = await sql`SELECT * FROM classify_list`;
console.log('classifyList',classifyList);

createApp(App).mount('#app')
