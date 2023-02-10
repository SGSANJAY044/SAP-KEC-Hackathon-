import axios from 'axios'

const API = axios.create({baseURL: 'http://localhost:8088/'})

export const UserLogin = (authdata) => API.post('/user/login', authdata)
export const UserSignup = (authdata) => API.post('/user/register', authdata)

export const StaffLogin = (authdata) => API.post('/staff/login', authdata)
export const StaffSignup = (authdata) => API.post('/staff/register', authdata)

export const SapGetAll = (id) => API.get(`/sap/all/${id}`)
export const SapAdd = (id, sapdata) => API.post(`/sap/add/${id}`, sapdata)
export const SapEdit = (id, sid, sapdata) => API.patch(`/sap/${id}/edit/${sid}`, sapdata)
export const SapDelete = (id, sid) => API.patch(`/sap/${id}/delete/${sid}`)

export const Eventsall = () => API.get('/events/')
export const Eventsadd = () => API.post('/events/add')
export const Eventsedit = (id) => API.patch(`/events/edit/${id}`)
export const Eventsdelete = (id) => API.delete(`/events/delete/${id}`)

export const Profile = (id) => API.get(`/profile/${id}`)
export const ProfileEdit = (id) => API.patch(`/profile/edit/${id}`)
