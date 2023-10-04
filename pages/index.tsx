import { useEffect } from 'react'

export default function Index() {
  useEffect(() => {
    async function makeAPICalls() {
      await Promise.all([200, 400, 401, 403, 404, 500].map((status) => fetch(`/api/hello?status=${status}`)))
    }

    makeAPICalls();
  });

  return (
    <div>
      Hello world
    </div>
  )
}
