using Microsoft.AspNetCore.Diagnostics;

namespace Fleeman_Dotnet.Exceptions
{
	public class GlobalExceptionHandler(ILogger<GlobalExceptionHandler> logger) : IExceptionHandler
	{
		public async ValueTask<bool> TryHandleAsync(HttpContext httpContext, Exception exception, CancellationToken cancellationToken)
		{
			logger.LogError(exception, exception.Message);
			switch (exception)
			{
				case NotFound:
					httpContext.Response.StatusCode = StatusCodes.Status404NotFound;
					break;
                case BadRequest:
                    httpContext.Response.StatusCode = StatusCodes.Status400BadRequest;
					break;
                default:
					httpContext.Response.StatusCode = StatusCodes.Status500InternalServerError;
					break;
			}

			var response = new ExceptionRespone {StatusCode = httpContext.Response.StatusCode, Message = exception.Message };

			await httpContext.Response.WriteAsJsonAsync(response, cancellationToken);
			return true;
		}
	}
}
