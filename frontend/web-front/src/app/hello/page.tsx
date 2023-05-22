'use client';
import React, { FC, useEffect, useState } from 'react'
import axios, { AxiosInstance } from 'axios'

type Todo = {
    id: string
    title: String
    body: String
}
 
export default function Hello() {
    const [todos, setTodo] = useState<Todo[]>([])

    const getAPIData = async () => {
        let instance: AxiosInstance

        instance = axios.create({
            baseURL: 'http://localhost:8080',
        })

        try {
            const response = await instance.get('/api/')
            console.log(response?.data)
            const tododata = response?.data as Todo[]
            setTodo(tododata)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            hello worlddddd
            <button onClick={() => getAPIData()}>click</button>
            {todos.map((item) => (
                <div key={item.id}>
                    <h1>{item.title}</h1>
                    <p>{item.body}</p>
                </div>
            ))}
        </div>
    )
}