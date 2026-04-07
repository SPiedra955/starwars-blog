export const initialStore = () => {
  return {
    message: null,
    films: [],
    favorites: [],
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ]
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {

    case 'deleteFav':
      return {
        ...store,
        favorites: store.favorites.filter(fav => fav !== action.payload)
      }
    case 'add_fav':
      if (store.favorites.includes(action.payload)) return store;

      return {
        ...store,
        favorites: [...store.favorites, action.payload]
      }
    case 'getData':
      return {
        ...store,
        ...(action.payload || {})
      }

  }
}
