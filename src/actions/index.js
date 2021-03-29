import axios from 'axios';

export const fetchProducts = () => async dispatch => {
   const response = await axios.get('http://localhost:8080/https://api-test.innoloft.com/product/6781')
   dispatch({ type: 'FETCH_PRODUCT', payload: response });
}

export const addAttribute = (item, objectKey) => async (dispatch, getState) => {
   const randomId = Math.floor(Math.random() * 1000) + 1;
   const store = getState().product.data;
   console.log(objectKey, item);
   const response = await axios.put('http://localhost:8080/https://api-test.innoloft.com/product/6781',
      {
         ...store,
         [objectKey]: [...store.key, {
            id: randomId,
            name: item
         }]
      })
   dispatch({ type: 'ADD_ATTRIBUTE', payload: response });
}

export const fetchTRL = () => async dispatch => {
   const response = await axios.get('http://localhost:8080/https://api-test.innoloft.com/trl')
   dispatch({ type: 'FETCH_TRL', payload: response });
}


