import axios from "axios";
import { IAppsResponse, IGetApps, IGetAppOverview, IItem, IGetAppOverviewUsersResponce } from "./service.props";


const API_URL = "/api/v1/app-service/";

export const getApps = async ({
  pageNumber = 1,
  pageSize = 25,
}: IGetApps): Promise<IAppsResponse> => {
  const data: IGetApps = {
    pageNumber: pageNumber,
    pageSize: pageSize,
  };

  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };

  try {
    const response = await axios.put(`${API_URL}get-apps`, data, {
      headers: headers,
    });
    return response.data;
  } catch (error) {
    console.error("Error while sending PUT request:", error);
    throw error;
  }
};

export const getAppOverview = async ({
  appId = ''
}: IGetAppOverview): Promise<IItem> => {

  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    'ngrok-skip-browser-warning': '69420'
  };

  try {
    const response = await axios.get(`${API_URL}get-app-overview/${appId}`, {
      headers: headers,
    });
    return response.data;
  } catch (error) {
    console.error("Error while sending PUT request:", error);
    throw error;
  }
};

export const getAppOverviewUsers = async ({
  appId = ''
}: IGetAppOverview): Promise<IGetAppOverviewUsersResponce> => {

  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    'ngrok-skip-browser-warning': '69420'
  };

  try {
    const response = await axios.get(`${API_URL}get-app-overview-users/${appId}`, {
      headers: headers,
    });
    return response.data;
  } catch (error) {
    console.error("Error while sending PUT request:", error);
    throw error;
  }
};