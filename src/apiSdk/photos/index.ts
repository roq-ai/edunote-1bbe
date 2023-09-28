import queryString from 'query-string';
import { PhotoInterface, PhotoGetQueryInterface } from 'interfaces/photo';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getPhotos = async (query?: PhotoGetQueryInterface): Promise<PaginatedInterface<PhotoInterface>> => {
  return fetcher('/api/photos', {}, query);
};

export const createPhoto = async (photo: PhotoInterface) => {
  return fetcher('/api/photos', { method: 'POST', body: JSON.stringify(photo) });
};

export const updatePhotoById = async (id: string, photo: PhotoInterface) => {
  return fetcher(`/api/photos/${id}`, { method: 'PUT', body: JSON.stringify(photo) });
};

export const getPhotoById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/photos/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deletePhotoById = async (id: string) => {
  return fetcher(`/api/photos/${id}`, { method: 'DELETE' });
};
