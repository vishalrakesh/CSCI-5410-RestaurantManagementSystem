import localStore from "./localstore.util";
import { get, filter } from "lodash";

export const setUserInfo = async (info) => {
    const _data = { ...info };
    await localStore.store_data("userinfo", _data);
    return true;
};
export const getUserInfo = () => localStore.get_data("userinfo");

export const removeUserInfo = () => localStore.remove_data("userinfo");

export const setAdminInfo = async (info) => {
    const _data = { ...info };
    await localStore.store_data("Admininfo", _data);
    return true;
};
export const getAdminInfo = () => localStore.get_data("Admininfo");

export const removeAdminInfo = () => localStore.remove_data("Admininfo");

export const setUserRole = async (info) => {
    const _data = { ...info };
    await localStore.store_data("userRole", _data);
    return true;
};
export const getUserRole = () => get(localStore.get_data("userRole"), "role");

export const removeUserRole = () => localStore.remove_data("userRole");

export const getCategories = async () => {
    const _userInfo = await getUserInfo();
    const categories = filter(_userInfo.categories, (item) => item._id);

    return categories;
};
