import uuid from 'uuid';

const todos = [
  {
    id: uuid.v4(),
    title: 'delectus aut autem',
    completed: true
  },
  {
    id: uuid.v4(),
    title: 'quis ut nam facilis et officia qui',
    completed: false
  },
  {
    id: uuid.v4(),
    title: 'fugiat veniam minus',
    completed: false
  },
  {
    id: uuid.v4(),
    title: 'et porro tempora',
    completed: true
  },
  {
    id: uuid.v4(),
    title: 'laboriosam mollitia et enim quasi adipisci quia provident illum',
    completed: false
  },
  {
    id: uuid.v4(),
    title: 'qui ullam ratione quibusdam voluptatem quia omnis',
    completed: false
  },
  {
    id: uuid.v4(),
    title: 'illo expedita consequatur quia in',
    completed: false
  }
];

function getToDos() {
  return new Promise(res => {
    setTimeout(() => {
      res(todos);
    }, 1000);
  });
}

export default {
  getToDos
};
