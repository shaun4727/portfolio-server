import sendResponse from '../../app/middleware/sendResponse';
import catchAsync from '../../app/utils/catchAsync';
import { heroSectionServices } from './home.service';

interface UploadedFiles {
  thumbnail?: Express.Multer.File[];
}

const heroSectionCreate = catchAsync(async (req, res) => {
  await heroSectionServices.storeHeroSectionIntoDB(
    req.body,
    req.files as UploadedFiles,
    req.user
  );

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Hero section data stored successfully',
  });
});

const heroSectionList = catchAsync(async (req, res) => {
  const result = await heroSectionServices.getHeroListFromDB();

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Hero Section data retrieved successfully',
    data: result,
  });
});

const heroUpdate = catchAsync(async (req, res) => {
  await heroSectionServices.updateHeroIntoDB(
    req.body,
    req.files as UploadedFiles,
    req.user
  );

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Project updated successfully',
  });
});

// skill section
interface UploadedFiles {
  skill_icon?: Express.Multer.File[];
}

const skillSectionCreate = catchAsync(async (req, res) => {
  await heroSectionServices.storeSkillSectionIntoDB(
    req.body,
    req.files as UploadedFiles,
    req.user
  );

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Skill section data stored successfully',
  });
});

const skillSectionList = catchAsync(async (req, res) => {
  const result = await heroSectionServices.getSkillListFromDB();

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Hero Section data retrieved successfully',
    data: result,
  });
});

export const homeControllers = {
  heroSectionCreate,
  heroSectionList,
  heroUpdate,
  skillSectionCreate,
  skillSectionList,
};
