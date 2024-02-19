import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "./firebase-config.js";

function App() {
  const [users, setUsers] = useState([]);
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);

  const fetchUsers = async () => {
    await getDocs(collection(db, "users")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      setUsers(newData);
      console.log(users);
    });
  };

  const createUser = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "users"), {
        name: newName,
        age: Number(newAge),
      });
    } catch (err) {
      console.log(err);
    }
  };

  const updateUser = async (id, age) => {
    const newFields = { age: age + 1 };
    await updateDoc(doc(db, "users", id), newFields);
  };

  const deleteUser = async (id) => {
    await deleteDoc(doc(db, "users", id));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="app">
      <input
        type="text"
        placeholder="Name..."
        onChange={(e) => setNewName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Age..."
        onChange={(e) => setNewAge(e.target.value)}
      />
      <button type="submit" onClick={createUser}>
        Create User
      </button>

      <div>
        {users.map((user) => {
          return (
            <div key={user.id}>
              <h1>Name: {user.name}</h1>
              <p>Age: {user.age}</p>
              <button
                onClick={() => {
                  updateUser(user.id, user.age);
                }}
              >
                Increase age
              </button>
              <button
                onClick={() => {
                  deleteUser(user.id);
                }}
              >
                Delete User
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
