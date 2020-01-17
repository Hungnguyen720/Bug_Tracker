using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using Bug_Tracker.Models;
using Bug_Tracker.Data;
using System.Linq;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using System.Configuration;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using System.Collections.Generic;

namespace Bug_Tracker.Controllers
{
    public class HomeController : Controller
    {
        private readonly ProjectSettingsContext _context;

        public HomeController(ProjectSettingsContext context)
        {
            _context = context;
        }

        public async Task<ActionResult<List<ProjectSettingsModel>>> Index()
        {
            var project = await _context.ProjectSettings.ToListAsync();
            return View(project);    
        }

        [Authorize]
        public IActionResult Claims()
        {
            return View();
        }

        [AllowAnonymous]
        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}