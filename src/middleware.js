const url = 'https://testebots.ru/api/v1';

export const SENDFORM = (formData) => async (dispatch) => {
    console.log('send');   
    try {
        const response = await fetch(`${url}/callback`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        if (!response.ok) {
            console.error('Fetch failed with status:', response.status); 
            return;
        }
        const data = await response.json();
        console.log('Response data:', data);
        dispatch({ type: 'SEND_FORM_SUCCESS'}); 
    } catch (error) {
        console.error("Error occurred:", error); 
    }
};

export const FETCHDATAREQUEST = (offset) => async (dispatch) => {
    console.log('FETCHDATAREQUEST');
    try {
        const response = await fetch(`${url}/journal/${offset}`, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            console.error('Fetch failed with status:', response.status); 
            return;
        }

        const data = await response.json();
        const newDataArray = data.map(item => {
            const headerParts = item.shortname.split('/');
            const header1 = headerParts[0].trim();
            const header2 = headerParts[1].trim();
            const textParts = item.post_text.split('/');
            const text1 = textParts[0].trim();
            const text2 = textParts[1].trim();
            return {
                data: item.post_date,
                header1: header1,
                header2: header2,
                text1: text1,
                text2: text2,
                img: item.media_list
            };
        });
        console.log(newDataArray);
        dispatch({ type: 'FETCH_DATA_SUCCESS', payload: newDataArray });
    } catch (error) {
        console.error("Error occurred:", error); 
    }
};