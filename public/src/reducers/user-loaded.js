/**
 * Created by yujuan on 17-8-2.
 */
const userLoaded = (state=[],action)=>{
  switch (action.type){
    case 'USER_LOADED':
      return action.data;
  }
  return state;
};

export default userLoaded;