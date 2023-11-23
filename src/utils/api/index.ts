const api = {
    getAllTarefas: async() => {
        const res = await fetch('http://localhost:3000/api/tarefas')
        const data = await res.json()

        return data.tarefas
    }
}

export default api;