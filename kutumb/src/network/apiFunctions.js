export const postData = async (url = '', data = {}) =>{
    const token = localStorage.getItem("token");
    let header = {
        'Content-Type': 'application/json'
    }
    if(token!=null){
        header={...header,'Authorization': token}
    }
    const response = await fetch(url, {
        method: 'POST',
        headers: header,
        body: JSON.stringify(data)
    });
    if(response.status!=200){
        return "Error"
    }
    return  response.json();
}

export const fetchData = async(url) =>{
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

export const uploadImage = async(url,formData) =>{
    const response = await fetch(url, {
        method: 'POST',
        body: formData
    });
    return response.json();
}