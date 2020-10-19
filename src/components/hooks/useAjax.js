/* eslint-disable no-unused-vars */
import axios from 'axios';

const useAjax = ( body) => {
  
  let url = 'https://ash-todolist.herokuapp.com/items';
  
  const getItem = async () => {
    await axios.get(url).then(item => {
      body(item.data.results);
    }).catch(console.error);
  };

  const postItem = async body => {
    const options = {
      mode: 'cors',
      cache: 'no-cache',
      headers: { 'Content-Type': 'application/json' },
    };
   
    await axios.post(url, JSON.stringify(body), options).catch(console.error);

  };

  const putItem = async ( item) => {
    await axios.put(`${url}/${item._id}`, {complete: item.complete})
      .catch(console.error);
  };

  const removeItem = async (id) => {
    await axios.delete(`${url}/${id}`)
      .catch(console.error);
  };

  return { getItem, postItem, putItem, removeItem};

};

export default useAjax;