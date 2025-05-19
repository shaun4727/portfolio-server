import sendResponse from '../../app/middleware/sendResponse';
import catchAsync from '../../app/utils/catchAsync';

interface UploadedFiles {
  thumbnail?: Express.Multer.File[];
  images?: Express.Multer.File[];
}

const heroSectionCreate = catchAsync(async (req, res) => {
  //   await projectServices.storeProjectIntoDB(
  //     req.body,
  //     req.files as UploadedFiles,
  //     req.user
  //   );

  console.log(req.body);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Hero section data stored successfully',
  });
});

export const homeControllers = {
  heroSectionCreate,
};
