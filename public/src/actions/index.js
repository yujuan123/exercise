/**
 * Created by yujuan on 17-8-2.
 */
export const loadUserInfo = (data)=> {
  return {
    type: 'USERINFO_LOADED'
  }
};
export const addUserInfo = (data)=> {
  return {
    type: 'USERINFO_ADDED',
    data
  }
};

export const deleteUser = (userId)=> {
  return {
    type: 'USER_DELETED',
    userId
  }
};

export const updateUser = (userInfo)=> {
  return {
    type: 'USER_UPDATE',
    userInfo
  }
};

export const search = (username)=> {
  return {
    type: 'SEARCH',
    username
  }
};