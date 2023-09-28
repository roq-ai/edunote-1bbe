import { TopicInterface } from 'interfaces/topic';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface AudioRecordInterface {
  id?: string;
  title: string;
  duration: number;
  topic_id: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  topic?: TopicInterface;
  user?: UserInterface;
  _count?: {};
}

export interface AudioRecordGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  topic_id?: string;
  user_id?: string;
}
