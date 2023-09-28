import { TopicInterface } from 'interfaces/topic';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface PhotoInterface {
  id?: string;
  title: string;
  description?: string;
  topic_id: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  topic?: TopicInterface;
  user?: UserInterface;
  _count?: {};
}

export interface PhotoGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  description?: string;
  topic_id?: string;
  user_id?: string;
}
