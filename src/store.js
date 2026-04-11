export const initialStore = () => {
  const localFavorites = localStorage.getItem('favorites')

  return {
    message: null,
    films: [],
    favorites: localFavorites ? JSON.parse(localFavorites) : [],
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
