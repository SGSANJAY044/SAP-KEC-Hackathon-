import * as api from '../api'
import {setAlert} from './alert'
import {useNavigate} from 'react-router-dom';

export const getMyDetails = () => async (dispatch) => {
    try {
        const user = await JSON.parse(localStorage.getItem('sap_portal'));
        if (user !== null) {
            const {data} = await api.Profile(user.user._id)
            if (data === null && user?.user?.isAdmin !== true) {
                dispatch(setAlert("sorry we cant find the user", "warning"));
                localStorage.clear();
                const navigate = useNavigate();
                navigate('/')
            }
            dispatch({type: 'GET_MY_DETAILS', payload: data})
            dispatch(setAlert("Fetching or updating  details", "info", 2000))
        }
        return;
    } catch (error) {
        dispatch(setAlert("Server Error", "warning"))
    }
}

// export const newStudyProject = (projectData, navigate) => async (dispatch) => {
//     try {
//         await api.newStudyProject(projectData)
//         dispatch(setAlert("Added new Study Project", "success"))
//         dispatch(getMyDetails())
//         navigate(`/profile/${projectData.createdBy}`)
//     } catch (error) {
//         dispatch(setAlert("Server error while creating project", "danger"))
//     }
// }

// export const editProfile = (editData, navigate) => async (dispatch) => {
//     try {

//         await api.editProfile(editData);
//         dispatch(getMyDetails());
//         dispatch(setAlert("Edited Succesfully", "info"));
//         navigate(`/profile/${editData.id}`)
//     } catch (error) {
//         dispatch(setAlert("Error Occured", "warning"))
//     }
// }
