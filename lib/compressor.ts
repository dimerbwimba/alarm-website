import imageCompression from 'browser-image-compression';

const compressImage = async (file: any, options: any): Promise<File> => {
  try {
    const compressedFile = await imageCompression(file, options);
    return compressedFile as File;
  } catch (error) {
    console.error('Image compression error:', error);
    throw error; // Rethrow the error to handle it in the caller
  }
};

export default compressImage;