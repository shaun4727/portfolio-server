import { Router } from 'express';
import { UserRoutes } from '../../modules/user-auth/user_auth.route';
import { MessageRoutes } from '../../modules/contact/contact.route';
import { ProjectRoutes } from '../../modules/projects/project.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: UserRoutes,
  },
  {
    path: '/message',
    route: MessageRoutes,
  },
  {
    path: '/project',
    route: ProjectRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
