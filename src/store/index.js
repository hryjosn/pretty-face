import React, { createContext } from 'react';
import HomeContext from '@container/Home/store/HomeStore';
import SignUpContext from '@container/SignUp/store/SignUpStore.js';
import InvitationContext from '@container/Invitation/InvitationStore.js';
import VerifyContext from '@container/Verify/VerifyStore.js';
import LoginContext from '@container/Login/store/LoginStore.js';
import { MobXProviderContext } from 'mobx-react-lite';
const RootStoreContext = createContext(null);

export const useStores = () => {
    return React.useContext(RootStoreContext);
};

const RootStore = ({ children }) => {
    const SignUpStore = SignUpContext();
    const LoginStore = LoginContext();
    const HomeStore = HomeContext();
    // const InvitationStore = InvitationContext();
    // const VerifyStore = VerifyContext();

    return (
        <RootStoreContext.Provider
            value={{
                SignUpStore,
                HomeStore,
                LoginStore,
                // VerifyStore,
                // InvitationStore,
            }}>
            {children}
        </RootStoreContext.Provider>
    );
};
export default RootStore;
