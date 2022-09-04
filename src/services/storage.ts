import { Storage } from '../interfaces/storage.interface';
import StorageModel from '../models/storage';

const registerUpload = async ({ idUser, fileName, path }: Storage) => {
  const responseItem = await StorageModel.create({ idUser, fileName, path });
  return responseItem;
}

export { registerUpload }