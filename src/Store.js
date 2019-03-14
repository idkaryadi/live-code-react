import createStore from 'unistore'
import axios from 'axios'

const initialState = {
    username: '',
    password: '',
    email: '',
    avatar:'',
    is_login: false,
    listMovies:[],
    kategori: ''
}

const urlMovies = "https://api-todofancy.herokuapp.com/api/movies"

export const store = createStore(initialState)

export const actions = store => ({
    setField: (state, event) => {
        return { [event.target.name]: event.target.value };
    },
    // changeInput = e => {
    //     this.setState({ [e.target.name]: e.target.value });
    // };
    postLogout: state => {
        return { is_login: false };
    },
    postLogin: async state => {
        const data = { username: state.username, password: state.username }
        // const self = this
        
        await axios
            .post("https://api-todofancy.herokuapp.com/api/auth", data)
            .then(function (response) {
                console.log(response.data);
                if (response.data.hasOwnProperty("user_data")) {
                    store.setState({
                        is_login: true,
                        username: response.data.user_data.username,
                        email: response.data.user_data.email,
                        avatar: response.data.user_data.avatar
                    })
                    // self.props.history.push("/profile")
                    // alert ("123")
                }
            })
            .catch(function (error) {
                console.log(error);
            })

    },
    // // Add new, delete if error
    
    // getCategory: state => {
    //     const location = window.location.pathname
    //     var kat = ''
    //     if (location === '/sport') {
    //         kat = "sport"
    //     } else if (location === '/ekonomi') {
    //         kat = "economy"
    //     } else if (location === '/hiburan') {
    //         kat = "entertainment"
    //     } else if (location === '/teknologi') {
    //         kat = "technology"
    //     } else if (location === '/kesehatan') {
    //         kat = "health"
    //     }
    //     return {kategori:kat}
    // },

    getMovies: async (state) => {
        // console.log(state.kategori)
        // use await, kategori
        await axios
            .get(urlMovies)

            .then(function(response){
                store.setState({listMovies:response.data.movies});
            })

            .catch(function (error) {
                console.log(error);
            });
    }
})