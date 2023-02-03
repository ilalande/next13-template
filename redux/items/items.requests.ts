import Item from '@custom-types/interfaces';
import axios from 'axios';

export const getItemsRequest = async (): Promise<Item[]> => {
  // for this example I used the json Place holder API
  return await axios.get(`https://jsonplaceholder.typicode.com/todos`);
};
