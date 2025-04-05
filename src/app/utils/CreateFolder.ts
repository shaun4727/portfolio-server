import { NextFunction, Request, Response } from 'express';
const fs = require('fs');
const path = require('path');

export const createFolder = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const folderName = 'uploads';
  // Create the full path to the folder
  const folderPath = path.join(process.cwd(), folderName);

  // Create the folder if it doesn't already exist
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
  }

  // Proceed to the next middleware
  next();
};
