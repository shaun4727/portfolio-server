import sendResponse from '../../app/middleware/sendResponse';
import catchAsync from '../../app/utils/catchAsync';
import { projectServices } from './project.service';
import { Express } from 'express';

interface UploadedFiles {
  thumbnail?: Express.Multer.File[];
  images?: Express.Multer.File[];
}

const projectStore = catchAsync(async (req, res) => {
  await projectServices.storeProjectIntoDB(
    req.body,
    req.files as UploadedFiles,
    req.user
  );

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Project stored successfully',
  });
});

const projectUpdate = catchAsync(async (req, res) => {
  await projectServices.updateProjectIntoDB(
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

const projectList = catchAsync(async (req, res) => {
  const result = await projectServices.getProjectListFromDB();

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Project list retrieved successfully',
    data: result,
  });
});

export const projectControllers = {
  projectStore,
  projectList,
  projectUpdate,
};
