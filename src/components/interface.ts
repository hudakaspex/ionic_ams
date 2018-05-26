export interface alarmActive {
  id?: number;
  alarmObj: Object;
  type: string;
  severity: string;
  description: string;
  ackTime: null | string;
  actTime: null | string;
  ackUser: null | string;
}

export interface alarmHistory {
  id?: number;
  alarmObj: Object;
  type: string;
  severity: string;
  description: string;
  ackTime: null | string;
  actTime: null | string;
  ackUser: null | string;
  clearTime: null | string;
}

export interface alertMessageConfig {
  title: string;
  message: string;
}

export interface user {
  id: number;
  username: string;
  email: string;
  emailVerified: string;
  name: string;
  phone: number;
  realm: any;
}

export interface securitySites {
  id: number;
  security_id: number;
  site_id: number;
}

export interface site {
  id: number;
  district_id: number;
  discobj_id: number;
  label: string;
  address: string;
  zoom: number;
  latitude: number;
  longitude: number;
}
