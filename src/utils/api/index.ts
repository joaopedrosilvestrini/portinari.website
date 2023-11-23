const api = {
    getAllTarefas: async() => {
        const res = await fetch('https://portinari-five.vercel.app/api/tarefas')
        const data = await res.json()

        return data.tarefas
    }
}

export default api;