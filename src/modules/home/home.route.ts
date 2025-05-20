import express, { NextFunction, Request, Response } from 'express';
import { homeControllers } from './home.controller';
import { USER_ROLE } from '../user-auth/user_auth.constant';
import auth from '../../app/middleware/auth';
import { upload } from '../../app/utils/sendImageToCloudinary';
import validateMiddleware from '../../app/middleware/validateRequest';
import { heroValidations } from './home.validation';
import { createFolder } from '../../app/utils/CreateFolder';

const router = express.Router();

router.post(
  '/hero-section-create',
  auth(USER_ROLE.admin),
  createFolder,
  upload.fields([{ name: 'thumbnail', maxCount: 1 }]),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  validateMiddleware(heroValidations.heroSectionCreateValidationSchema),
  homeControllers.heroSectionCreate
);

router.patch(
  '/update-hero-section',
  auth(USER_ROLE.admin),

  upload.fields([{ name: 'thumbnail', maxCount: 1 }]),

  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  validateMiddleware(heroValidations.heroSectionCreateValidationSchema),
  homeControllers.heroUpdate
);

router.get('/hero-section-list', homeControllers.heroSectionList);

// skill section

router.post(
  '/create-skill',
  auth(USER_ROLE.admin),
  createFolder,
  upload.fields([{ name: 'skill_icon', maxCount: 1 }]),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  validateMiddleware(heroValidations.skillCreateValidationSchema),
  homeControllers.skillSectionCreate
);

router.get('/skill-section-list', homeControllers.skillSectionList);

router.patch(
  '/update-skill-section',
  auth(USER_ROLE.admin),

  upload.fields([{ name: 'skill_icon', maxCount: 1 }]),

  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  validateMiddleware(heroValidations.skillCreateValidationSchema),
  homeControllers.skillUpdate
);

// experience section starts
router.post(
  '/create-experience',
  auth(USER_ROLE.admin),
  validateMiddleware(heroValidations.experienceCreateValidationSchema),
  homeControllers.experienceSectionCreate
);

router.patch(
  '/create-experience',
  auth(USER_ROLE.admin),
  validateMiddleware(heroValidations.experienceCreateValidationSchema),
  homeControllers.experienceUpdate
);

router.get('/create-experience', homeControllers.getAllExperience);

// create blog api
router.post(
  '/create-blog',
  auth(USER_ROLE.admin),
  validateMiddleware(heroValidations.blogCreateValidationSchema),
  homeControllers.blogSectionCreate
);

router.get('/create-blog', homeControllers.getAllBlogs);

router.patch(
  '/create-blog',
  auth(USER_ROLE.admin),
  validateMiddleware(heroValidations.blogCreateValidationSchema),
  homeControllers.blogUpdate
);

export const HomeRoutes = router;
