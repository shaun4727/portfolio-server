import { JwtPayload } from 'jsonwebtoken';
import AppError from '../../app/utils/AppError';
import { TImages, TProject } from './project.interface';
import { Project } from './project.model';
import { sendImageToCloudinary } from '../../app/utils/sendImageToCloudinary';
import mongoose from 'mongoose';

interface UploadedFiles {
  thumbnail?: Express.Multer.File[];
  images?: Express.Multer.File[];
}

const storeProjectIntoDB = async (
  data: TProject,
  files: UploadedFiles,
  user: JwtPayload
) => {
  if (!files?.thumbnail?.[0] || !files.images) {
    throw new AppError(400, 'Missing required files !');
  }

  let link = '';
  let imagesLink = [] as TImages[];

  const thumbnail = files.thumbnail[0];
  const images = files.images;
  try {
    if (images) {
      await Promise.all(
        images.map(async (file: any, index) => {
          const imageName = `${user.userId}-${new Date().toISOString()}`;
          const path = file?.path;

          //send image to cloudinary
          const { secure_url } = await sendImageToCloudinary(imageName, path);

          imagesLink.push({ link: secure_url as string, key: index });
        })
      );
    }

    if (thumbnail) {
      const imageName = `${user.userId}-${new Date().toISOString()}`;
      const path = thumbnail?.path;

      const { secure_url } = await sendImageToCloudinary(imageName, path);
      link = secure_url as string;
    }
    const obj = {
      ...data,
      images: imagesLink,
      thumbnail: link,
    };
    await Project.create(obj);
  } catch (err: any) {
    throw new Error(err);
  }
};

const updateProjectIntoDB = async (
  data: TProject,
  files: UploadedFiles,
  user: JwtPayload
) => {
  let thumbnailFile;
  let obj: TProject = {
    ...data,
  };

  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    if (files && files.thumbnail) {
      thumbnailFile = files.thumbnail[0];
      const imageName = `${user.userId}-${new Date().toISOString()}`;
      const path = thumbnailFile?.path;

      const { secure_url } = await sendImageToCloudinary(imageName, path);
      obj.thumbnail = secure_url as string;
    }

    await Project.updateOne({ _id: data._id }, { $set: obj }, { session });

    if (files && files.images && files.images.length > 0) {
      const imagesList = files.images;
      data.imagesKey.forEach(async ({ key, link }) => {
        await Promise.all(
          imagesList.map(async (file: any, index) => {
            const imageName = `${user.userId}-${new Date().toISOString()}`;
            const path = file?.path;

            //send image to cloudinary
            const { secure_url } = await sendImageToCloudinary(imageName, path);

            link = secure_url as string;
          })
        );
        await Project.updateOne(
          { _id: data._id },
          {
            $set: {
              'images.$[img].link': link,
            },
          },
          {
            arrayFilters: [{ 'img.key': key }],
            session,
          }
        );
      });
    }
    await session.commitTransaction();
    await session.endSession();
  } catch (err: any) {
    throw new Error(err);
    await session.commitTransaction();
    await session.endSession();
  }
};

const getProjectListFromDB = async () => {
  try {
    return await Project.find();
  } catch (err) {
    console.log(err);
  }
};

const getProjectDetailFromDB = async (id: string) => {
  try {
    return await Project.findOne({ _id: id });
  } catch (err) {
    console.log(err);
  }
};

export const projectServices = {
  storeProjectIntoDB,
  getProjectListFromDB,
  updateProjectIntoDB,
  getProjectDetailFromDB,
};
