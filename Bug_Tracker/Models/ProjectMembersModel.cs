﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bug_Tracker.Models
{
    public class ProjectMembersModel
    {
        public int Id { get; set; }
        public int ProjectID { get; set; }
        public string ProjectMembers { get; set; }
    }
}
