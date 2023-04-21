import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const Post = () => {
  const router = useRouter()
  const [user, setUser] = useState([]);

  const fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(a => a.json())
      .then((data) => setUser(data))
  }

  useEffect(() => {
    fetchData()
  }, [])

  const { slug } = router.query


  return <>
    <p className='fs-1'>User List</p>

    <ul>
      {user && user.length > 0 && user.map((userObj, index) => (
        <li key={userObj.id}>{userObj.name}</li>
      ))}
    </ul>
  </>
}

export default Post
