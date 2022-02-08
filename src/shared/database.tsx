import { getDatabase } from 'firebase/database';

class DataBase {
  // loginUser = => {};
  getLoginUser = () => {
    const database = getDatabase();
    console.log(database);
  };
}

export default DataBase;
