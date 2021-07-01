const servicesConfig = {
    api_url : process.env.NODE_ENV == "development" ? process.env.API_DEV : ""
}

export default servicesConfig;