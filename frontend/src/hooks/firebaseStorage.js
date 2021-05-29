import { useState, useEffect } from 'react';

import { addFirebaseItem, getFirebaseItems } from "../firebase/firebase";

function useFbStorage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems();
  }, []);

  const getItems = async () => {
    const _items = await getFirebaseItems();
    setItems(_items);
  };

  const addItem = async item => {
    const newItem = { name: item.name, score: item.score, grade: item.grade, date: Date.now() };
    await addFirebaseItem(newItem);
    setItems([...items, newItem]);
  };

  //   const updateItem = async checked => {
  //     const changes = { done: !checked.done };
  //     await updateFirebaseItem(changes, checked.id);
  //     const newItems = items.map((item) => {
  //       if (item.id === checked.id) {
  //         item = { ...item, changes}
  //       }
  //       return item;
  //     })
  //     setItems(newItems);
  //   }

  //   const clearItems = () => {
  //     items.map(item => {
  //       clearFirebaseItem(item);
  //     })
  //     setItems([]);
  //   };

  return [items, addItem];
}

export default useFbStorage;