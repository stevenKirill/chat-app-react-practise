import React, {useState} from 'react';

const AddMessage = ({onAddMessage, currName}) => {
    const [value,setValue] = useState('');

    function handleSendMessage(e) {
        e.preventDefault()
        onAddMessage({
            message: value,
            author: currName
        })
        setValue('')
    };
    
    function handleChange(e) {
        setValue(e.target.value)
    };

	return (
		<section id="new-message">
            <form onSubmit={handleSendMessage}>
            <input
                onChange={handleChange}
				type="text"
                value={value}
			/>
            </form>
		</section>
	);
};

export default AddMessage;