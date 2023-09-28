import queryString from 'query-string';
import { TopicInterface, TopicGetQueryInterface } from 'interfaces/topic';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getTopics = async (query?: TopicGetQueryInterface): Promise<PaginatedInterface<TopicInterface>> => {
  return fetcher('/api/topics', {}, query);
};

export const createTopic = async (topic: TopicInterface) => {
  return fetcher('/api/topics', { method: 'POST', body: JSON.stringify(topic) });
};

export const updateTopicById = async (id: string, topic: TopicInterface) => {
  return fetcher(`/api/topics/${id}`, { method: 'PUT', body: JSON.stringify(topic) });
};

export const getTopicById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/topics/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteTopicById = async (id: string) => {
  return fetcher(`/api/topics/${id}`, { method: 'DELETE' });
};
