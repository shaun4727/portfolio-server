import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import notFound from './app/middleware/notFound';
import globalErrorHandler from './app/middleware/globalErrorHandler';
import router from './app/routes';

const app: Application = express();

app.use(express.json());
app.use(
  cors({
    // origin: true,
    origin: [
      'https://portfolio-app-dashboard.vercel.app',
      'https://my-portfolio-client-git-main-shaun-hossains-projects.vercel.app',
    ],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

app.use(cookieParser());
app.use(express.json({ limit: '50mb' })); // Increase JSON payload limit
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use('/api', router);
app.get('/', (req: Request, res: Response) => {
  res.end('Project running');
});

app.use(notFound);
app.use(globalErrorHandler);
export default app;
