import axios from 'axios';
import { BaseURL } from '../../../Constants/baseURL';

export const APIGeneral = axios.create({
    baseURL: BaseURL,
});