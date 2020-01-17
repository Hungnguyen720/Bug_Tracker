using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Bug_Tracker.Controllers
{
    public class ProjectListController : Controller
    {
        // GET: ProjectList
        public ActionResult Index()
        {
            return View();
        }

        // GET: ProjectList/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: ProjectList/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: ProjectList/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(IFormCollection collection)
        {
            try
            {
                // TODO: Add insert logic here

                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: ProjectList/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: ProjectList/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, IFormCollection collection)
        {
            try
            {
                // TODO: Add update logic here

                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: ProjectList/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: ProjectList/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                // TODO: Add delete logic here

                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }
    }
}