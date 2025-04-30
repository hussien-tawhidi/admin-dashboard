// types/dashboard.ts

export interface DashboardSettings {
  theme: "light" | "dark"; // Theme setting for dark or light mode
  security: {
    twoFactorEnabled: boolean; // Toggle for two-factor authentication
  };
  notifications: {
    email: boolean; // Toggle for receiving email notifications
  };
  integrations: {
    googleAnalytics: boolean; // Google Analytics integration toggle
    crmConnected: boolean; // CRM integration toggle
  };
  webhooks: {
    url: string;
    events: string[];
    active: boolean;
  }[];
}
