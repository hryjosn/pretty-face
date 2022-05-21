import React from 'react';
import { View, Text } from 'react-native';
import { Scene, Router, Stack } from 'react-native-router-flux';
import Init from '@container/Init';
import Login from '@container/Login';
import SignUp from '@container/SignUp';
import CheckUsername from '@container/SignUp/pages/CheckUsername';
import Profile from '@container/Profile';
import Home from '@container/Home';
import VerifyAuth from '@container/VerifyAuth';
import Verify from '@container/Verify';
import Invitation from '@container/Invitation';
import Pending from '@container/Pending';
import Icon from 'react-native-vector-icons/Ionicons';
import PhoneAuthentication from '@container/SignUp/pages/PhoneAuthentication';
import CodeInput from '@container/SignUp/pages/CodeInput';
import ChooseAvatar from '@container/SignUp/pages/ChooseAvatar';
import Password from '@container/SignUp/pages/Password';
const TabIcon = ({ focused, title }) => {
    let iconName;
    switch (title) {
        case 'tab0':
            iconName = focused
                ? 'ios-checkmark-circle'
                : 'ios-checkmark-circle-outline';
            break;
        case 'tab1':
            iconName = focused ? 'home' : 'home-outline';
            break;
        case 'tab2':
            iconName = focused ? 'person' : 'person-outline';
            break;
    }

    return <Icon style={{ color: '#7F7F7F' }} name={iconName} size={30} />;
};
const SceneRouter = () => {
    return (
        <Router>
            <Stack key="root">
                <Scene key="Auth" hideNavBar initial>
                    <Scene key="Init" component={Init} hideNavBar initial />
                    <Scene key="Login" component={Login} hideNavBar />
                    <Scene key="Password" component={Password} hideNavBar />
                    <Scene key="SignUp" component={SignUp} hideNavBar />
                    <Scene
                        key="CheckUsername"
                        component={CheckUsername}
                        hideNavBar
                    />
                    <Scene key="VerifyAuth" component={VerifyAuth} hideNavBar />
                    <Scene
                        key="PhoneAuthentication"
                        component={PhoneAuthentication}
                        hideNavBar
                    />
                    <Scene key="CodeInput" component={CodeInput} hideNavBar />
                    <Scene
                        key="ChooseAvatar"
                        component={ChooseAvatar}
                        hideNavBar
                    />
                    <Scene key="Pending" component={Pending} hideNavBar />
                </Scene>
                <Scene key="Main" hideNavBar>
                    <Scene
                        key="tabBar"
                        tabs
                        swipeEnabled={false}
                        showLabel={false}
                        tabBarPosition="bottom"
                        activeTintColor="white"
                        inactiveTintColor="#7F7F7F"
                        labelStyle={{ fontWeight: '800', fontSize: 16 }}
                        tabBarStyle={{
                            paddingTop: 5,
                            backgroundColor: 'white',
                        }}>
                        <Scene
                            key="tab0"
                            title={'tab0'}
                            icon={TabIcon}
                            iconName={'check'}>
                            <Scene key="Verify" component={Verify} hideNavBar />
                        </Scene>
                        <Scene
                            key="tab1"
                            icon={TabIcon}
                            iconName={'home'}
                            title={'tab1'}
                            initial>
                            <Scene
                                key="Home"
                                component={Home}
                                hideNavBar
                                initial
                            />
                        </Scene>
                        <Scene
                            key="tab2"
                            icon={TabIcon}
                            iconName={'user'}
                            title={'tab2'}>
                            <Scene
                                key="Profile"
                                component={Profile}
                                hideNavBar
                            />
                            <Scene
                                key="Invitation"
                                component={Invitation}
                                hideNavBar
                            />
                        </Scene>
                    </Scene>
                </Scene>
            </Stack>
        </Router>
    );
};
export default SceneRouter;
