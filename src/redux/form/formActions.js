import { SET_FORM_DATA, LOGOUT } from './formTypes';

export const saveFormData = (formData) => {
    return {
        type: SET_FORM_DATA,
        payload: formData,
    }
};

export const logout = () => ({
    type: LOGOUT,
});
