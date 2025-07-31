namespace AuthECAPI.Extensions
{
    public static class SwaggerExtensions
    {
        public static IServiceCollection AddSwaggerExplorer(this IServiceCollection services)
        {
            services.AddEndpointsApiExplorer();
            services.AddSwaggerGen();

            return services;
        }

        public static WebApplication ConfigureSwaggerExplorer(this WebApplication app)
        {

            return app;
        }
    }
}
