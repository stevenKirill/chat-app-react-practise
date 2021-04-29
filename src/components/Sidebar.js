import React from 'react';

const Sidebar = ({ users, currName, color }) => (
	<aside id="sidebar" className="sidebar">
		<ul>
			{users.map(user => {
                if (user.name === currName) {
                    return <li key={user.id} style={{
                        color: color
                    }} className='sidebar_user'>{user.name}</li>
                } else {
                    return <li key={user.id} className='sidebar_user'>{user.name}</li>
                }
            })}
		</ul>
	</aside>
);

export default Sidebar;