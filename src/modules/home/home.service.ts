import { JwtPayload } from 'jsonwebtoken';
import { TExperience, THeroSection, TSkill } from './home.interface';
import AppError from '../../app/utils/AppError';
import { sendImageToCloudinary } from '../../app/utils/sendImageToCloudinary';
import {
  blogSectionData,
  experienceSectionData,
  HeroSectionData,
  skillSectionData,
} from './home.model';

interface UploadedFiles {
  thumbnail?: Express.Multer.File[];
}
const storeHeroSectionIntoDB = async (
  data: THeroSection,
  files: UploadedFiles,
  user: JwtPayload
) => {
  if (!files?.thumbnail?.[0]) {
    throw new AppError(400, 'Missing required files !');
  }

  let link = '';

  const thumbnail = files.thumbnail[0];

  try {
    if (thumbnail) {
      const imageName = `${user.userId}-${new Date().toISOString()}`;
      const path = thumbnail?.path;

      const { secure_url } = await sendImageToCloudinary(imageName, path);
      link = secure_url as string;
    }
    const obj = {
      ...data,
      thumbnail: link,
    };
    await HeroSectionData.create(obj);
  } catch (err: any) {
    throw new Error(err);
  }
};

const getHeroListFromDB = async () => {
  try {
    return await HeroSectionData.find();
  } catch (err) {
    console.log(err);
  }
};

const updateHeroIntoDB = async (
  data: THeroSection,
  files: UploadedFiles,
  user: JwtPayload
) => {
  let thumbnailFile;
  let obj: THeroSection = {
    ...data,
  };

  try {
    if (files && files.thumbnail) {
      thumbnailFile = files.thumbnail[0];
      const imageName = `${user.userId}-${new Date().toISOString()}`;
      const path = thumbnailFile?.path;

      const { secure_url } = await sendImageToCloudinary(imageName, path);
      obj.thumbnail = secure_url as string;
    }

    await HeroSectionData.updateOne({ _id: data._id }, { $set: obj });
  } catch (err: any) {
    throw new Error(err);
  }
};

// skill section
interface UploadedFiles {
  skill_icon?: Express.Multer.File[];
}
const storeSkillSectionIntoDB = async (
  data: TSkill,
  files: UploadedFiles,
  user: JwtPayload
) => {
  if (!files?.skill_icon?.[0]) {
    throw new AppError(400, 'Missing required files !');
  }

  let link = '';

  const thumbnail = files.skill_icon[0];

  try {
    if (thumbnail) {
      const imageName = `${user.userId}-${new Date().toISOString()}`;
      const path = thumbnail?.path;

      const { secure_url } = await sendImageToCloudinary(imageName, path);
      link = secure_url as string;
    }
    const obj = {
      ...data,
      skill_icon: link,
    };
    await skillSectionData.create(obj);
  } catch (err: any) {
    throw new Error(err);
  }
};

const getSkillListFromDB = async () => {
  try {
    return await skillSectionData.find();
  } catch (err) {
    console.log(err);
  }
};

const updateSkillIntoDB = async (
  data: TSkill,
  files: UploadedFiles,
  user: JwtPayload
) => {
  let thumbnailFile;
  let obj: TSkill = {
    ...data,
  };

  try {
    if (files && files.skill_icon) {
      thumbnailFile = files.skill_icon[0];
      const imageName = `${user.userId}-${new Date().toISOString()}`;
      const path = thumbnailFile?.path;

      const { secure_url } = await sendImageToCloudinary(imageName, path);
      obj.skill_icon = secure_url as string;
    }

    await skillSectionData.updateOne({ _id: data._id }, { $set: obj });
  } catch (err: any) {
    throw new Error(err);
  }
};

// experience section

const storeExperienceSectionIntoDB = async (data: TExperience) => {
  try {
    return await experienceSectionData.create(data);
  } catch (err: any) {
    throw new Error(err);
  }
};

const getAllExperiencesFromDB = async () => {
  try {
    return await experienceSectionData.find();
  } catch (err: any) {
    throw new Error(err);
  }
};

const updateExperienceIntoDB = async (data: TExperience) => {
  try {
    await experienceSectionData.updateOne({ _id: data._id }, { $set: data });
  } catch (err: any) {
    throw new Error(err);
  }
};

// blog section starts
const storeBlogSectionIntoDB = async (data: TExperience) => {
  try {
    return await blogSectionData.create(data);
  } catch (err: any) {
    throw new Error(err);
  }
};

const getAllBlogsFromDB = async () => {
  try {
    return await blogSectionData.find();
  } catch (err: any) {
    throw new Error(err);
  }
};

const updateBlogIntoDB = async (data: TExperience) => {
  try {
    await blogSectionData.updateOne({ _id: data._id }, { $set: data });
  } catch (err: any) {
    throw new Error(err);
  }
};

export const heroSectionServices = {
  storeHeroSectionIntoDB,
  getHeroListFromDB,
  updateHeroIntoDB,
  storeSkillSectionIntoDB,
  getSkillListFromDB,
  updateSkillIntoDB,
  storeExperienceSectionIntoDB,
  getAllExperiencesFromDB,
  updateExperienceIntoDB,
  storeBlogSectionIntoDB,
  getAllBlogsFromDB,
  updateBlogIntoDB,
};
