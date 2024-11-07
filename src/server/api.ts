import express from 'express';
import { spawn } from 'child_process';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/search', async (req: express.Request, res: express.Response) => {
  const query = req.query.query as string || '';
  
  try {
    // 调用 Python 爬虫脚本
    const pythonProcess = spawn('python', ['crawler/spider.py', query], { stdio: ['pipe', 'pipe', 'pipe'] });
    
    let data = '';
    
    pythonProcess.stdout.on('data', (chunk: Buffer) => {
      data += chunk.toString();
    });
    
    pythonProcess.on('close', (code: number) => {
      if (code !== 0) {
        res.status(500).json({ error: '搜索失败' });
        return;
      }
      
      const results = JSON.parse(data);
      res.json(results);
    });
  } catch (error) {
    res.status(500).json({ error: '搜索失败' });
  }
});

app.listen(3003, () => {
  console.log('API 服务运行在端口 3001');
}); 