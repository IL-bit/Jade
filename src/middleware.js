const url = process.env.REACT_APP_URL;
const sendForm = `${url}/api/v1/callback`;
const getJournal = `${url}/api/v1/journal`;
export const SENDFORM = (formData) => async (dispatch) => { 
    try {
        const response = await fetch(sendForm, {
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
        dispatch({ type: 'SEND_FORM_SUCCESS', payload: data}); 
    } catch (error) {       
        console.error("Error occurred:", error); 
    }
};

export const FETCHDATAREQUEST = (offset) => async (dispatch) => {
    try {
        const response = await fetch(`${getJournal}/${offset}`, {
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
            const header1 = headerParts[0] ? headerParts[0].trim() : '';
            const header2 = headerParts[1] ? headerParts[1].trim() : '';        
            const textParts = item.post_text.split('/');
            const text1 = textParts[0] ? textParts[0].trim() : '';
            const text2 = textParts[1] ? textParts[1].trim() : '';
            const img = item.media_list && item.media_list.length > 0 ? item.media_list[0] : null;
            return {
                date: item.post_date,
                header1: header1,
                header2: header2,
                text1: text1,
                text2: text2,
                img: img
            };
        });
        dispatch({ type: 'FETCH_DATA_SUCCESS', payload: newDataArray });
    } catch (error) {
        console.error("Error occurred:", error); 
    }
};