import client, {configureClient, resetClient} from '../client';
import storage from '../../utils/storage';

const authBaseUrl = '/api/users';

export const login = (credentials, remember) => {
    const url = `${authBaseUrl}/login`;
    return client
        .post(url, credentials)
        .then(({ token }) => {
            configureClient({ token })
            storage.set('auth', token)
            if(remember){
                for(const credential in credentials) {
                    storage.set(credential, credentials[credential]);
                }
            }
        });
            
}

export const logout = () => {
    return Promise.resolve().then(() => {
        resetClient();
        storage.remove('auth');
    });
};