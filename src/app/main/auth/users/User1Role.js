import React from 'react';
import { Button, Icon, Typography } from '@material-ui/core';
import { FusePageSimple, FuseHighlight } from '@fuse';
import { useDispatch } from 'react-redux';
import * as authActions from 'app/auth/store/actions';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    layoutRoot: {}
}));

function User1Role(props) {
    const dispatch = useDispatch();

    const classes = useStyles();

    return (
        <FusePageSimple
            classes={{
                root: classes.layoutRoot
            }}
            header={
                <div className="flex flex-1 items-center justify-between p-24">
                    <Typography className="h2">Users1  Auth role example page</Typography>
                    <Button
                        className="normal-case"
                        variant="contained"
                        onClick={ev => dispatch(authActions.logoutUser())}
                    >
                        <Icon className="mr-4">exit_to_app</Icon>
                        Logout
                    </Button>
                </div>
            }
            content={
                <div className="p-24">
                    <Typography className="mb-24">
                        You can see this page because you have logged in and have permission. Otherwise you should be redirected to login page.
                    </Typography>

                    <Typography className="mb-24">
                        This is the page's config file:
                    </Typography>

                    <FuseHighlight component="pre" className="language-js">
                        {`
                            import {authRoles} from 'auth';
                            import StaffRoleExample from 'app/main/auth/staff-role-example/StaffRoleExample';

                            export const StaffRoleExampleConfig = {
                                settings: {
                                    layout: {
                                        config: {}
                                    }
                                },
                                auth    : authRoles.user1,//['admin',staff']
                                routes  : [
                                    {
                                        path     : '/auth/users',
                                        component: User1Role
                                    }
                                ]
                            };
                            `}
                    </FuseHighlight>

                    <Typography className="my-24">
                        You can also hide the navigation item/collapse/group with user roles by giving auth property.
                    </Typography>

                    <FuseHighlight component="pre" className="language-json">
                        {`
                                export const fuseNavigationConfig = [
                                   {
                                        'id'   : 'only-User1-navigation-item',
                                        'title': 'Nav item only for user1',
                                        'type' : 'item',
                                        'auth' : authRoles.user1,//['admin','staff']
                                        'url'  : '/auth/User1Role',
                                        'icon' : 'verified_user'
                                    }
                                ];
                            `}
                    </FuseHighlight>

                </div>
            }
        />
    )
}

export default User1Role;