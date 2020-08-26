import React from 'react';

const store = {
	name: 'akbar let-let',
	status: 'Mahasiswa',
};

const UserContext = React.createContext(store);

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };

export default UserContext;
