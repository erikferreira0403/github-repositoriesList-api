import '../styles/repo.css';

export function RepoList(props){
    return(
  <li>
        <strong>{props.repository.name.toUpperCase()}</strong>
        <p>{props.repository.description}</p>
        <a href={props.repository.html_url}>Acessar</a>

  </li>
    )
    }