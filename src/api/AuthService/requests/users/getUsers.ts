import { AxiosCustomRequestConfig, GetUsersParams, GetUsersResponse } from "../../../types";
import AuthClient from "../../client";

export type GetUsersConfig = AxiosCustomRequestConfig<GetUsersParams>;

export const getUsers = async ({ params, config }: GetUsersConfig) => {
  const response = await AuthClient.get<GetUsersResponse>("/user", { params, ...config });

  return response.data;
};
