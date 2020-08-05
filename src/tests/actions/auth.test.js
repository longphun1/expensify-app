import { login, logout } from '../../actions/auth';

test('should generate login actoin object', () => {
    const uid = 'abc123';
    const action = login(uid);
    expect(action).toEqual({
        type: 'LOGIN',
        uid
    });
});

test('shoudl generate logout action object', () => {
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT'
    });
});