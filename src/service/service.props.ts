export interface IAppRow {
  appId: string;
  appName: string;
  appSources: string[];
  category: string;
}

export interface IItem {
  appOverview: IAppRow;
}

export interface IAppsResponse {
  appRows: IAppRow[];
  totalCount: number;
}

export interface IGetApps {
  pageNumber: number;
  pageSize: number;
}

export interface IGetAppOverview {
  appId: string;
}

export interface IGetAppOverviewUsersResponce {
  appUsers: string[];
}