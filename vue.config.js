module.exports = {
    publicPath: '/space-travel/',
    css: {
        loaderOptions: {
            scss: {
                prependData: `
                    @import "@/scss/variables.scss";
                    `
            }
        }
    }
}