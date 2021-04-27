import { call, put } from "redux-saga/effects";
import { actionObject } from "./common";
import axios from 'axios';

function* requestService(method: string = 'GET', params: any = null, page: number = 1 ): any {

  const objectRequest: any = {
    method,
    url: `https://picsum.photos/v2/list?page=${page}&limit=30`,
    data: params,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    }
  }

  const response = yield call(axios, objectRequest);
  const responseBody = response.data;

  return responseBody;
}

export default requestService;
