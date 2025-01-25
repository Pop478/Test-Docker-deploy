import React, { useState, useEffect } from 'react'

function App() {
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch('http://localhost:5000/api/data')
            .then((response) => response.json())
            .then((data) => setData(data))
    }, [])

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="p-8 bg-white shadow-lg rounded">
                <h1 className="text-2xl font-bold mb-4">Data from API:</h1>
                {data ? (
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    )
}

export default App
