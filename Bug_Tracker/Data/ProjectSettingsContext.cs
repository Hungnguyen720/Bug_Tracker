using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Bug_Tracker.Models;
using Microsoft.EntityFrameworkCore;


namespace Bug_Tracker.Data
{
    public class ProjectSettingsContext : DbContext
    {
        public ProjectSettingsContext(DbContextOptions<ProjectSettingsContext> options) : base(options)
        {
        }

        public DbSet<ProjectSettingsModel> ProjectSettings { get; set; }
        public DbSet<ProjectMembersModel> Project_Members { get; }
    }
}
