using Microsoft.EntityFrameworkCore;

using Bug_Tracker.Models;


namespace Bug_Tracker.Data
{
    public class TaskContext : DbContext
    {
        public TaskContext(DbContextOptions<TaskContext> options) : base(options)
        {
        }

    public DbSet<Task> Task { get; set; }
    }
}
