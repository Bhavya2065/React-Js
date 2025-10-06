import { useParams } from "react-router-dom"

function User() {
    const {userid} = useParams()
  return (
    <div className="flex justify-center text-2xl py-2 bg-gray-600 text-white">User: {userid}</div>
  )
}

export default User