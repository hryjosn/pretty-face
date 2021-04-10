import React from 'react';
import { View, Text } from 'react-native';
import { Scene, Router, Stack } from 'react-native-router-flux';
import Init from '@container/Init';
import Login from '@container/Login';
import SignUp from '@container/SignUp';
import Profile from '@container/Profile';
import Home from '@container/Home';
import VerifyAuth from '@container/VerifyAuth';
import Verify from '@container/Verify';
import Invitation from '@container/Invitation';
import Icon from 'react-native-vector-icons/FontAwesome';
const TabIcon = (props) => {
    let color = props.focused ? 'white' : '#7F7F7F';
    return (
        <View
            style={{
                flex: 1,
                flexDirection: 'column',
                alignItems: 'center',
                alignSelf: 'center',
            }}>
            <Icon style={{ color }} name={props.iconName} size={30} />
        </View>
    );
};
const SceneRouter = () => {
    return (
        <Router>
            <Stack key="root">
                <Scene key="Auth" hideNavBar initial>
                    <Scene key="Init" component={Init} hideNavBar initial />
                    <Scene key="Login" component={Login} hideNavBar />
                    <Scene key="SignUp" component={SignUp} hideNavBar />
                    <Scene key="VerifyAuth" component={VerifyAuth} hideNavBar />
                </Scene>
                <Scene key="Main" hideNavBar>
                    <Scene
                        key="tabBar"
                        tabs
                        swipeEnabled={false}
                        animationEnabled={false}
                        showLabel
                        tabBarPosition="bottom"
                        activeTintColor="white"
                        inactiveTintColor="#7F7F7F"
                        labelStyle={{ fontWeight: '800', fontSize: 16 }}
                        tabBarStyle={{ backgroundColor: 'black' }}>
                        <Scene
                            key="tab0"
                            title={'Verify'}
                            icon={TabIcon}
                            iconName={'check'}>
                            <Scene key="Verify" component={Verify} hideNavBar />
                        </Scene>
                        <Scene
                            key="tab1"
                            title={'Home'}
                            icon={TabIcon}
                            iconName={'home'}
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
                            title={'Profile'}
                            icon={TabIcon}
                            iconName={'user'}>
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
