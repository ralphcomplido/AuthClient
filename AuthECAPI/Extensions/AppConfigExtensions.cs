namespace AuthECAPI.Extensions
{
    public static class AppConfigExtensions
    {
        public static WebApplication ConfigureCORS(this WebApplication app, IConfiguration config)
        {
            // Configure the application settings
            app.UseCors(options =>
                options.WithOrigins("http://localhost:4200")
                .AllowAnyMethod()
                .AllowAnyHeader());
            return app;
        }
    }
}
