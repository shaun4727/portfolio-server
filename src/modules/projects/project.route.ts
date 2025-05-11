import express, { NextFunction, Request, Response } from 'express';
import validateMiddleware from '../../app/middleware/validateRequest';
import { createFolder } from '../../app/utils/CreateFolder';
import { upload } from '../../app/utils/sendImageToCloudinary';
import auth from '../../app/middleware/auth';
import { USER_ROLE } from '../user-auth/user_auth.constant';
import { projectValidations } from './project.validation';
import { projectControllers } from './project.controller';

const router = express.Router();

router.post(
  '/create-project',
  auth(USER_ROLE.admin),
  createFolder,
  upload.fields([
    { name: 'thumbnail', maxCount: 1 },
    { name: 'images', maxCount: 3 },
  ]),

  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  validateMiddleware(projectValidations.projectCreateValidationSchema),
  projectControllers.projectStore
);

router.patch(
  '/update-project',
  auth(USER_ROLE.admin),
  upload.fields([
    { name: 'thumbnail', maxCount: 1 },
    { name: 'images', maxCount: 3 },
  ]),

  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  validateMiddleware(projectValidations.projectCreateValidationSchema),
  projectControllers.projectUpdate
);

router.get(
  '/project-list',
  auth(USER_ROLE.admin),
  projectControllers.projectList
);

router.get(
  '/get-single-project/:projectId',
  projectControllers.getSingleProjectDetail
);

router.get('/project-list-for-user', projectControllers.projectList);

export const ProjectRoutes = router;
