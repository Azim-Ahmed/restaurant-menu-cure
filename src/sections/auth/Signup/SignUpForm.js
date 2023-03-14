import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// @mui
import { Link, Stack, IconButton, InputAdornment, TextField, Checkbox } from '@mui/material';
import { LoadingButton } from '@mui/lab';

import { useDispatch, useSelector } from 'react-redux';

// components
import Iconify from '../../../components/iconify';

// ----------------------------------------------------------------------

export default function SignUpForm(props) {
    const { submitLogin } = props;
    const { user } = useSelector(state => state.auth)

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const handleClick = async () => {
        const loginData = {
            identifier: email,
            password
        }
        await dispatch(submitLogin(loginData))


        // navigate('/dashboard', { replace: true });
    };

    useEffect(() => {

        if (user) {
            navigate("/")
        }
    }, [user])

    return (
        <>
            <Stack spacing={3}>
                <TextField value={email} onChange={e => setEmail(e.target.value)} name="email" label="Email address" />
                <TextField value={email} onChange={e => setEmail(e.target.value)} name="username" label="User name" />

                <TextField
                    name="password"
                    label="Password"
                    type={showPassword ? 'text' : 'password'}
                    value={password} onChange={e => setPassword(e.target.value)}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                                    <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
            </Stack>

            <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
                <Checkbox name="remember" label="Remember me" />
                <Link variant="subtitle2" underline="hover">
                    Forgot password?
                </Link>
            </Stack>

            <LoadingButton fullWidth size="large" type="submit" variant="contained" onClick={handleClick}>
                Signup
            </LoadingButton>
        </>
    );
}
