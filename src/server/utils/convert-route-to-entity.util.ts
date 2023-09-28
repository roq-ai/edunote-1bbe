const mapping: Record<string, string> = {
  'audio-records': 'audio_record',
  notes: 'note',
  photos: 'photo',
  schools: 'school',
  topics: 'topic',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
