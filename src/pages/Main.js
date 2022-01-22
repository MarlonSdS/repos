import React from "react";
import {useState, useCallback, useEffect} from 'react'
import {Container, Form, SubmitButton, List, DeleteButton} from './styles'
import {FaGithub, FaPlus, FaBars, FaTrash} from 'react-icons/fa'
import { Link } from "react-router-dom";

import api from '../services/api'

export default function Main(){
    const [newRepo, setNewRepo] = useState('')
    const [repositorios, setRepositorios] = useState([])
    const [loading, setLoading] = useState(false)
    const [alert, setAlert] = useState(null)

    //Buscar

    useEffect(() =>{
        const repoStorage = localStorage.getItem('repos')

        if(repoStorage){
            setRepositorios(JSON.parse(repoStorage))
        }
    },[])

    //Salvar

    useEffect(() =>{
        localStorage.setItem('repos', JSON.stringify(repositorios))
    }, [repositorios])

    const handleSubmit = useCallback((e)=> {
        e.preventDefault()
        async function submit(){
            setLoading(true)
            setAlert(null)
            try{

                if(newRepo === ''){
                    throw new Error('Você precisa informar um repositório')
                }

                const response = await api.get(`repos/${newRepo}`)
                const hasRepo = repositorios.find(repo => repo.nome == newRepo)

                if(hasRepo){
                    throw new Error('Repositório já existente')
                }

                const data = {
                    nome: response.data.full_name,

                }

                setRepositorios([...repositorios, data])
                setNewRepo('')
            }catch(error){
                setAlert('true')
                console.log(error)
            }finally{
                setLoading(false)
            }

            
    
        }
        submit()
    }, [repositorios, newRepo])

    function handleInputChange(e){
        setNewRepo(e.target.value)
        setAlert(null)
    }

    const handleDelete = useCallback((repo) =>{
        function erase(repo){
            const find = repositorios.filter(r => r.name !== repo)
            setRepositorios(find)
        }

        erase()
    }, [repositorios])
    return(
        <Container>
            <h1>
                <FaGithub size={25} color="#222"/>
                Meus repositórios
            </h1>

            <Form onSubmit={handleSubmit}>
                <input type='text' placeholder='Adicionar repositório' value={newRepo} onChange={handleInputChange} error={alert}/>
                
                <SubmitButton loading={loading ? 1 : 0}>
                    <FaPlus color='#FFF' size={14} />
                </SubmitButton>
            </Form>

            <List>
                {repositorios.map(repo =>(
                    <li key={repo.nome}>
                        <span>
                            <DeleteButton onClick={() => handleDelete(repo.nome)}>
                               <FaTrash size={14}></FaTrash> 
                            </DeleteButton>
                            
                            {repo.nome}
                        </span>
                        <Link to={`/repositorio/${encodeURIComponent(repo.nome)}`}>
                            <FaBars size={20}/>
                        </Link>
                    </li>
                ))}
            </List>
        </Container>
    )
}