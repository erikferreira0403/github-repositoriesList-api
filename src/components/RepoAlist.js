import {useEffect, useState} from 'react';
import { RepoList } from './RepoList';


export function RepoAlist() {
  const [repo, setRepo] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/users/erikferreira0403/repos')
    .then(response => response.json())
    .then(data => setRepo(data))
  }, [])
  console.log(repo)

  return (
      <div>
    <h1>Lista de repositorios</h1>
   <section className="repository-list">

    <ul className="repository">
      {repo.map(repository => {
          return <RepoList key={repository.name} repository={repository}/>
      })}
      
    </ul>
    </section>
    </div>
  );
        }