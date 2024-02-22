// utils/compressImage.ts
import imageCompression from 'browser-image-compression';

const compressImage = async (file: any, options:any): Promise<File | null> => {
  try {
    const compressedFile = await imageCompression(file, options);
    return compressedFile;
  } catch (error) {
    console.error('Image compression error:', error);
    return null;
  }
};

export default compressImage;
