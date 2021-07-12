import axios from 'axios';

export default {
    getData: function() {
        return axios.get("https://fluviusdata.blob.core.windows.net/app/fluvius_data.json")
    }
};