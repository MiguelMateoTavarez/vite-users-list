const state = {
  currentPath: 0,
  users: [],
};

const loadNextPage = async () => {
  throw new Error('Not implemented');
};

const loadPreviousPage = async () => {
  throw new Error('Not implemented');
};

//TODO: implement
const onUserChange = async () => {
  throw new Error('Not implemented');
};

const reloadPage = () => {
  throw new Error('Not implemented');
};

export default {
  loadNextPage,
  loadPreviousPage,
  onUserChange,
  reloadPage,

  getUser: () => [...state.users ],
  getCurrentPage: () => state.currentPage,
}