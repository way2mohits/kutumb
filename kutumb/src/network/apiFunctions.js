export const postData = async (url = '', data = {}) =>{
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    if(response.status!=200){
        return "Error"
    }
    return  response.json();
}

export async function fetchData(url) {
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': localStorage.getItem("token"),
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    } catch (error) {
        console.error('Error:', error);
    }
}