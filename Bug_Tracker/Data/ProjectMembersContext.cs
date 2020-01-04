using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Bug_Tracker.Models;


namespace Bug_Tracker.Data
{
    public class ProjectMembersContext : DbContext
    {
        public ProjectMembersContext(DbContextOptions<ProjectMembersContext> options) : base(options)
        {
        }

        public DbSet<ProjectMembersModel> Project_Members { get; set; }
    }
}
