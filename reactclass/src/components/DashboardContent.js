import React, { useEffect, useState } from 'react';
function DashboardContent() {
    const [data, setData] = useState(null);
    const [loading, setLoading] =
        useState(true);
    useEffect(() => {
        // 데이터 가져오기 예시
        const fetchData = async () => {
            try {
                const response = await
                    fetch('https://jsonplaceholder.typicode.com/posts');
                const result = await
                    response.json();
                setData(result.slice(0, 5)); // 상위5개 데이터만 표시
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);
    if (loading) return <p>Loading...</p>;
    return (

        <main className="dashboard-content">

            <h2>Dashboard Content</h2>
            <div className="widgets">
                {data.map((item) => (
                    <div key={item.id}
                        className="widget">
                        <h3>{item.title}</h3>
                        <p>{item.body}</p>
                    </div>
                ))}
            </div>
        </main>
    );
}
export default DashboardContent;