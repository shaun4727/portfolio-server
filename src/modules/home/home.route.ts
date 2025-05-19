import express from 'express';
import { homeControllers } from './home.controller';

const router = express.Router();

router.post('/hero-section-create', homeControllers.heroSectionCreate);

export const HomeRoutes = router;
