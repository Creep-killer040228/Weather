import axios from 'axios'
import {
    createStore
} from 'vuex'
export const store = createStore({
    state: {
        apiKey: 'c038d4a35fbb979535fb97613bd66b60',
        weather: null,
    },
    mutations: {
        getWeather(state, payload) {
            state.weather = payload
        }
    },
    actions: {
        async getWeather({
            state,
            commit,
        }, city = 'Ташкент') {
            let response = await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${state.apiKey}`)
            const {
                lat,
                lon,
                local_names
            } = response.data[0]
            if (local_names.ru.toLowerCase() == city.toLowerCase()) {
                let response2 = await axios.get(`https://api.openweathermap.org/data/2.8/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${state.apiKey}&units=metric&lang=ru`)
                let weatherInfo = {
                    ...response2.data,
                    name: city
                }
                weatherInfo.daily.pop()
                commit('getWeather', weatherInfo)
            }
        }
    }
})