const initState = {
  users: [
    {id: 1, name: 'Leonardo', job: 'Developer', age: 21, info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est ullam quo, explicabo ea recusandae dolore voluptatem, accusantium commodi excepturi dolorum laborum officia aspernatur, debitis dignissimos aliquam quasi voluptas pariatur. Similique!'},
    {id: 2, name: 'Guilherme', job: 'Manager', age: 18, info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur iure eveniet at! Doloribus, libero vitae reprehenderit placeat quam mollitia quis perferendis quidem error et. Nesciunt placeat illum quidem aspernatur nostrum!'},
    {id: 3, name: 'Renan', job: 'Designer', age: 20, info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo nihil neque id itaque hic inventore! Et, magnam laboriosam aliquid labore porro velit consequuntur totam fugiat officia pariatur, quo saepe aut!'},
  ]
}

const rootReducer = (state = initState, action) => {
  return state;
}

export default rootReducer;
