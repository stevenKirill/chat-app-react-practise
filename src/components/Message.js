import React from 'react';

const Message = ({message, author}) => (
	<li className="each_message"> 
		<span className="message_author">{author}</span>: <span>{message}</span>
	</li>
);

export default Message;