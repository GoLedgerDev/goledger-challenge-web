import { APIGeneral } from './baseService/baseService';

export async function getFunction(url) {
    try {
      const response = await APIGeneral.get(url);
      return response;
    } catch (error) {
      console.error(error);
    }
    return false;
  }

  export async function postFunction(url, serch) {
    try {
      const response = await APIGeneral.post(url, serch);
      return response;
    } catch (error) {
      console.error(error);
    }
    return false;
  }

  export async function updateFunction(url) {
    try {
      const response = await APIGeneral.update(url);
      return response;
    } catch (error) {
      console.error(error);
    }
    return false;
  }

  export async function deleteFunction(url) {
    try {
      const response = await APIGeneral.delete(url);
      return response;
    } catch (error) {
      console.error(error);
    }
    return false;
  }

  export default async function useService(functionName, params = []) {
    try {
        let response = await APIGeneral[functionName](...params);
        return response;
    } catch (error) {
      console.error(error);
    }
    return false;
  }