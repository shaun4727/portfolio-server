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

const skillUpdate = catchAsync(async (req, res) => {
  await heroSectionServices.updateSkillIntoDB(
    req.body,
    req.files as UploadedFiles,
    req.user
  );

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Skill section updated successfully',
  });
});

// experience section starts
const experienceSectionCreate = catchAsync(async (req, res) => {
  await heroSectionServices.storeExperienceSectionIntoDB(req.body);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Experience section data stored successfully',
  });
});

const experienceUpdate = catchAsync(async (req, res) => {
  await heroSectionServices.updateExperienceIntoDB(req.body);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Experience section updated successfully',
  });
});

const getAllExperience = catchAsync(async (req, res) => {
  const result = await heroSectionServices.getAllExperiencesFromDB();

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Experiences are fetched successfully',
    data: result,
  });
});

// blog section
const blogSectionCreate = catchAsync(async (req, res) => {
  await heroSectionServices.storeBlogSectionIntoDB(req.body);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Blog section data stored successfully',
  });
});

const getAllBlogs = catchAsync(async (req, res) => {
  const result = await heroSectionServices.getAllBlogsFromDB();

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Blogs are fetched successfully',
    data: result,
  });
});

const blogUpdate = catchAsync(async (req, res) => {
  await heroSectionServices.updateBlogIntoDB(req.body);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Experience section updated successfully',
  });
});

export const homeControllers = {
  heroSectionCreate,
  heroSectionList,
  heroUpdate,
  skillSectionCreate,
  skillSectionList,
  skillUpdate,
  experienceSectionCreate,
  getAllExperience,
  experienceUpdate,
  blogSectionCreate,
  getAllBlogs,
  blogUpdate,
};
