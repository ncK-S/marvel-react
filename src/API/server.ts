let token = '0fk38sdkf821c16d516fdkj3498j31ff4f8d5d97'

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://marvel-react-tm-81.herokuapp.com/api/heroes`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });
        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }
        return await response.json()
    },
    create: async ( data: any = {} ) => {
        const response = await fetch(`https://marvel-react-tm-81.herokuapp.com/api/heroes`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }
        return await response.json()
    },
    update: async (id:string, data:any = {} ) => {
        const response = await fetch(`https://marvel-react-tm-81.herokuapp.com/api/heroes/${id}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }
        return await response.json()
    },
    delete: async ( id:string ) => {
        const response = await fetch(`https://marvel-react-tm-81.herokuapp.com/api/heroes`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });
        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }
        return await response.json()
    },
}