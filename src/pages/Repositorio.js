import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { Container, Owner, Loading, BackButton, IssuesList } from "./Rstyles";
import {FaArrowLeft} from 'react-icons/fa'
import api from '../services/api'

export default function Repositorio({match}){
    const repo = useParams()
    const repoName = repo.repositorio

    const [repositorio, setRepositorio] = useState({})
    const [issues, setIssues] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() =>{

        async function load(){
            const [repositorioData, issuesData] = await Promise.all([
                api.get(`/repos/${repoName}`),
                api.get(`/repos/${repoName}/issues`, {
                    params:{
                        state: 'open',
                        per_page: 5
                    }
                })
            ])  
            
            setRepositorio(repositorioData.data)
            setIssues(issuesData.data)
            setLoading(false)
        }

        load()

        
        
    }, [])

    if(loading){
        return(
            <Loading>
                <h1>Carregando...</h1>
            </Loading>
        )
    }else{
        return(
            <Container>
                <BackButton to="/">
                    <FaArrowLeft color='#000'></FaArrowLeft>
                </BackButton>

                <Owner>
                    <img src={repositorio.owner.avatar_url}/>
                    <h1>{repositorio.name}</h1>
                    <p>{repositorio.description}</p>
                </Owner>

                <IssuesList>
                    {issues.map(issue =>(
                        <li key={issue.id}>
                            <img src={issue.user.avatar_url}/>

                            <div>
                                <strong>
                                    <a href={issue.html_url} target="_blank">{issue.title}</a>

                                    {issue.labels.map(label =>(
                                        <span key={label.id}>{label.name}</span>
                                    ))}

                                    <p>{issue.user.login}</p>
                                </strong>
                            </div>
                        </li>
                    ))}
                </IssuesList>
            </Container>
        )
    }

    
}