/// static generation with data fetching

import User from '../components/user';

export default function UserList({users}) {
  console.log(users);
  return (
    <div>
      <h1>List of users</h1>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <User user={user} />
          </div>
        );
      })}
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  console.log(data);

  return {
    props: {
      users: data,
    },
  };
}

// same notes are on the text file attached to this project
//// getStaticProps :
// 1- getStaticProps runs only on the server side
//    the function will never run client side
//    the code you write inside getStaticProps won't even be included in the JS bundle
//that is sent to the browser.
// 2- you can write server side code directly in getStaticProps
//    accessing the file system using the fs module or querying a database can be done in
// getStaticProps
//    you also don't have to worry bout including API keys in getStaticProps as that won't
// make it to the browser.
// 3- getStaticProps is allowed only in a page and connot be run from a regular component file
//    it is used only for pre-rendering and not client-side data fetching
// 4- getStaticProps should return an object and the object should contain a prop key which is aslo
// an object
// 5- getStaticProps will run at build time. During development, getStaticProps runs on every request
