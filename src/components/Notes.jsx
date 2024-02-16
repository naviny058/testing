import React, { useRef } from 'react'
import Todos from './Todos'


function Notes() {
    const ref = useRef(null)
    const myTodos = [
        { title: 'Want to Start with React and build some Amazing project', size: 12, status: true },
        { title: 'Backend with NodeJs cant wait to start project', size: 19, status: false },
    ]
    return (
        <div ref={ref} className='bg-zinc-900 h-screen w-full flex flex-wrap gap-2'>
            <h1 className='text-[16vw] select-none absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-semibold'>Docs.</h1>
            {
                myTodos.map((todo) => (
                    <Todos key={todo.title} reference={ref} title={todo.title} size={todo.size} status={todo.status} />
                ))}
        </div>
    )
}

export default Notes