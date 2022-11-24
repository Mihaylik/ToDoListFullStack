global using DataAccess.Data;
global using GraphQL.Types;
using DataAccess.Data.Task;
using XmlDataAccess.Repositories;
using ToDoListSANA.GraphSchemes;
using GraphQL.Server;
using ToDoListSANA.GraphTypes;
using ToDoListSANA.GraphQueries;
using ToDoListSANA.GraphMutation;
using ToDoListSANA.GraphVariables.Task;
using ToDoListSANA.GraphVariables.Categories;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy("DefaultPolicy", builder =>
    {
        builder.AllowAnyHeader()
               .WithOrigins("http://localhost:3000")
               .AllowCredentials()
               .AllowAnyMethod();
    });
});

// Add services to the container.
builder.Services.AddControllersWithViews();
builder.Services.AddHttpContextAccessor();
// Add DB signatures
builder.Services.AddSingleton<ITaskData, TaskData>();
builder.Services.AddSingleton<ICategoryData, CategoryData>();
builder.Services.AddSingleton<ITaskData, XmlTaskRepository>();
builder.Services.AddSingleton<ICategoryData, XmlCategoryRepository>();
builder.Services.AddSingleton<ISchema, Schemes>();
builder.Services.AddSingleton<TaskGraphType>();
builder.Services.AddSingleton<CategoryGraphType>();
builder.Services.AddSingleton<Schemes>();
builder.Services.AddSingleton<Queries>();
builder.Services.AddSingleton<Mutations>();
builder.Services.AddSingleton<TaskInput>();
builder.Services.AddSingleton<TaskEdit>();
builder.Services.AddSingleton<CategoryInput>();
builder.Services.AddGraphQL(option => option.EnableMetrics = false)
                .AddSystemTextJson();

var app = builder.Build();

// Configure the HTTP request pipeline.

if (app.Environment.IsDevelopment())
{
    app.UseCors("DefaultPolicy");
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();
app.UseGraphQL<ISchema>();
app.UseGraphQLAltair();

app.UseSpa(spa =>
 {
     spa.Options.SourcePath = "wwwroot";
 });


app.Run();
