interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Student User'],
  customerRoles: [],
  tenantRoles: ['Student User', 'Teacher User'],
  tenantName: 'School',
  applicationName: 'EduNote',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage personal information',
    'Create and manage topics',
    'Create and manage notes',
    'Create and manage audio records',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/2687244f-d376-4496-9cd2-4cff40e9e997',
};
