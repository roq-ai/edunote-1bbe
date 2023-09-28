import { AudioRecordInterface } from 'interfaces/audio-record';
import { NoteInterface } from 'interfaces/note';
import { PhotoInterface } from 'interfaces/photo';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface TopicInterface {
  id?: string;
  title: string;
  description?: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  audio_record?: AudioRecordInterface[];
  note?: NoteInterface[];
  photo?: PhotoInterface[];
  user?: UserInterface;
  _count?: {
    audio_record?: number;
    note?: number;
    photo?: number;
  };
}

export interface TopicGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  description?: string;
  user_id?: string;
}
