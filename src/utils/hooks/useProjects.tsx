import { useEffect, useRef, useState } from 'react'

export const useProjects = () => {
  const [isLoadingProjects, setIsLoadingLoadingProjects] = useState(true)
  const isFetching = useRef(false)

  const [projects, setProjects] = useState([])

  const getRepos = async () => {
    try {
      isFetching.current = true

      const response = await fetch(
        'https://api.github.com/users/gustavosiqueira2/repos'
      )

      const body: [] = await response.json()

      const pinnedRepos = body.filter(
        ({ name }) =>
          name === 'git-heart' ||
          name === 'Ampulheta' ||
          name === 'json-server-data-generator' ||
          name === 'rolldice'
      )

      setProjects(pinnedRepos)
    } catch (err) {
      console.log(err)
      setProjects([])
    } finally {
      setIsLoadingLoadingProjects(false)
    }
  }

  useEffect(() => {
    if (!isFetching.current) {
      getRepos()
    }
  }, [])

  return {
    isLoadingProjects,
    projects
  }
}
