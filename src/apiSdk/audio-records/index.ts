import queryString from 'query-string';
import { AudioRecordInterface, AudioRecordGetQueryInterface } from 'interfaces/audio-record';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getAudioRecords = async (
  query?: AudioRecordGetQueryInterface,
): Promise<PaginatedInterface<AudioRecordInterface>> => {
  return fetcher('/api/audio-records', {}, query);
};

export const createAudioRecord = async (audioRecord: AudioRecordInterface) => {
  return fetcher('/api/audio-records', { method: 'POST', body: JSON.stringify(audioRecord) });
};

export const updateAudioRecordById = async (id: string, audioRecord: AudioRecordInterface) => {
  return fetcher(`/api/audio-records/${id}`, { method: 'PUT', body: JSON.stringify(audioRecord) });
};

export const getAudioRecordById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/audio-records/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteAudioRecordById = async (id: string) => {
  return fetcher(`/api/audio-records/${id}`, { method: 'DELETE' });
};
