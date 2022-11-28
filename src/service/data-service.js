import axios from 'axios';


export function getAllSites() {
    return axios.get(`api/sites`,{
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,

            'Content-Type': 'application/json',
         
        }


    })
}

export function getSite(id) {   
    return axios.get(`api/sites/${id}`,{
        headers: {

            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json',
           //   
        }
    }
    )
}

export function createSite(site) {
    return axios.post(`api/sites`, site, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,

            'Content-Type': 'application/json',
           //
        }
    })
}

export function updateSite(site) {
    return axios.patch(`api/sites/${site.id}`, site, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,

            'Content-Type': 'application/json',
           //
        }
    })
}

export function deleteSite(id) {
    return axios.delete(`api/sites/${id}`, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,

            'Content-Type': 'application/json',
           //
        }
    })
}

export function login(user) {
    return axios.post(`api/users/login`, user, {
        headers: {
            

            'Content-Type': 'application/json',
           //
        }
    })
}

export function signup(user) {
    return axios.post(`api/users/signup`, user, {
        headers: {
            

            'Content-Type': 'application/json',
           //
        }
    })
}


        
    





/* export default class DataService {
    constructor() {
        this.service = axios.create({
            baseURL: 'http://localhost:8001/api',
            withCredentials: true,
        });
    }

    getAllSites = () => {
        return this.service.get('/sites').then((response) => response.data);
    };

    getSite = (id) => {
        return this.service.get(`/sites/${id}`).then((response) => response.data);
    };

    createSite = (data) => {
        return this.service.post('/sites', data).then((response) => response.data);
    };

    updateSite = (id, data) => {
        return this.service
            .patch(`/sites/${id}`, data)
            .then((response) => response.data);
    };

    deleteSite = (id) => {
        return this.service
            .delete(`/sites/${id}`)
            .then((response) => response.data);
    };
}
 */
